const http=require('http'),fs=require('fs'),path=require('path'),CORE=require('./core');
const DIR=process.env.DATA_DIR||path.join(__dirname,'data'),FILE=path.join(DIR,'db.json');
const UU=(process.env.UPSTASH_REDIS_REST_URL||'').replace(/\/$/,''),UT=process.env.UPSTASH_REDIS_REST_TOKEN;
const KEYS=['S','C','V','AP','voters','votos','subs','cfg'];
const rest=async c=>{const r=await fetch(UU+'/pipeline',{method:'POST',headers:{Authorization:'Bearer '+UT},body:JSON.stringify(c)});if(!r.ok)throw new Error('Upstash '+r.status);return r.json()};
let last={},timer=null,cur=null;
async function flush(){timer=null;const d=cur;if(!d)return;
 if(UU){const ch=KEYS.filter(k=>JSON.stringify(d[k])!==last[k]);if(!ch.length)return;
  try{await rest(ch.map(k=>['SET','bype:'+k,JSON.stringify(d[k])]));ch.forEach(k=>last[k]=JSON.stringify(d[k]))}
  catch(e){console.error('Falha ao salvar:',e.message);timer=setTimeout(flush,5000)}}
 else try{fs.mkdirSync(DIR,{recursive:true});fs.writeFileSync(FILE,JSON.stringify(d))}catch(e){console.error(e)}}
const onSave=d=>{cur=d;if(!timer)timer=setTimeout(flush,800)};
async function load(){
 if(UU){const r=await rest(KEYS.map(k=>['GET','bype:'+k])),db={};KEYS.forEach((k,i)=>{const v=r[i]&&r[i].result;if(v){db[k]=JSON.parse(v);last[k]=v}});return db}
 try{return JSON.parse(fs.readFileSync(FILE))}catch{return{}}}
(async()=>{
 CORE.init(JSON.parse(fs.readFileSync(path.join(__dirname,'map.json'))),await load(),onSave,process.env.ADMIN_PASSWORD);
 const html=fs.readFileSync(path.join(__dirname,'index.html'));
 http.createServer((q,s)=>{
  if(!q.url.startsWith('/api/')){s.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});return s.end(html)}
  let b='';q.on('data',c=>{b+=c;if(b.length>3e6)q.destroy()});
  q.on('end',()=>{let j={};try{j=JSON.parse(b||'{}')}catch{}const r=CORE.handle(q.method,q.url,j,q.headers);
   s.writeHead(r.status,{'Content-Type':'application/json'});s.end(JSON.stringify(r.json))})
 }).listen(process.env.PORT||3000,()=>console.log('Eleições Bype City no ar'+(UU?' (banco Upstash)':' (arquivo local)')));
})().catch(e=>{console.error('Erro ao iniciar:',e.message);process.exit(1)});
process.on('SIGTERM',async()=>{if(timer){clearTimeout(timer);await flush()}process.exit(0)});
