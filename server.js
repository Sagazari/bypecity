const crypto=require('crypto'),http=require('http'),fs=require('fs'),path=require('path'),CORE=require('./core');
const DIR=process.env.DATA_DIR||path.join(__dirname,'data'),FILE=path.join(DIR,'db.json');
const UU=(process.env.UPSTASH_REDIS_REST_URL||'').replace(/\/$/,''),UT=process.env.UPSTASH_REDIS_REST_TOKEN;
const KEYS=['S','C','V','AP','voters','votos','subs','cfg','leis','forms','orgs','deb','news','dia','deveres'];
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
 CORE.init(JSON.parse(fs.readFileSync(path.join(__dirname,'map.json'))),await load(),onSave,process.env.PREFEITURA_PASSWORD||process.env.ADMIN_PASSWORD);
 const html=fs.readFileSync(path.join(__dirname,'index.html'),'utf8'),og=fs.readFileSync(path.join(__dirname,'og.png'));
 const hook=process.env.DISCORD_WEBHOOK_URL||'',okHook=/^https:\/\/(discord|discordapp)\.com\/api\/webhooks\//.test(hook);
 const notify=t=>{if(okHook)fetch(hook,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({content:String(t).slice(0,1800),allowed_mentions:{parse:[]}})}).catch(()=>{})};
 const b64=o=>Buffer.from(typeof o==='string'?o:JSON.stringify(o)).toString('base64url');
 const lkToken=role=>{const k=process.env.LIVEKIT_API_KEY,sec=process.env.LIVEKIT_API_SECRET,u=process.env.LIVEKIT_URL;if(!k||!sec||!u)return null;
  const n=Math.floor(Date.now()/1000),id=role==='host'?'host':role==='mic'?'host-mic':'v-'+crypto.randomBytes(6).toString('hex'),h=b64({alg:'HS256',typ:'JWT'}),
  p=b64({iss:k,sub:id,name:id,nbf:n-10,exp:n+(role==='viewer'?14400:43200),video:{room:'debate',roomJoin:true,canPublish:role!=='viewer',canSubscribe:true,canPublishData:false}});
  return{token:h+'.'+p+'.'+crypto.createHmac('sha256',sec).update(h+'.'+p).digest('base64url'),url:u.replace(/^http/,'ws')}};
 const NAMES={debate:'Debate',eleicoes:'Eleições',apuracao:'Apuração',candidatos:'Candidatos',mapa:'Mapa',leis:'Leis',orgaos:'Órgãos',prefeitura:'Prefeitura',
  noticias:'Notícias',diario:'Diário Oficial',deveres:'Deveres dos órgãos',cme:'CME',tfm:'TFM',tmn:'TMN',cdr:'CDR',fmtd:'FMTD',clt:'CLT',pbp:'PBP',stam:'STAM',oms:'OMS',semol:'SEMOL',smf:'SMF'};
 const OLD={'/dcr':'/cdr','/dtam':'/stam','/slc':'/semol','/sol':'/semol'};
 const DESC='Portal da cidade de Bype City: eleições, apuração em tempo real, leis, tribunais e órgãos municipais.';
 http.createServer((q,s)=>{
  const raw=q.url.split('?')[0],low=(raw.replace(/\/+$/,'')||'/').toLowerCase();
  if(low==='/health'||low==='/healthz'){s.writeHead(200,{'Content-Type':'application/json','Cache-Control':'no-store'});return s.end(JSON.stringify({status:'ok',uptime:Math.round(process.uptime()),time:new Date().toISOString()}))}
  if(low==='/api/live/token'){const rp=new URL(q.url,'http://x').searchParams.get('role'),role=rp==='host'||rp==='mic'?rp:'viewer',send=(c,j)=>{s.writeHead(c,{'Content-Type':'application/json','Cache-Control':'no-store'});s.end(JSON.stringify(j))};
   if(role!=='viewer'&&!CORE.auth(q.headers))return send(401,{erro:'Senha da Prefeitura incorreta.'});
   const r=lkToken(role);return r?send(200,r):send(503,{erro:'Transmissão não configurada: defina LIVEKIT_URL, LIVEKIT_API_KEY e LIVEKIT_API_SECRET.'})}
  if(OLD[low]){s.writeHead(301,{Location:OLD[low]});return s.end()}
  if(low==='/og.png'){s.writeHead(200,{'Content-Type':'image/png','Cache-Control':'public,max-age=86400'});return s.end(og)}
  if(!low.startsWith('/api/')){
   const seg=low.slice(1),fm=low.match(/^\/formulario\/(pss|psv)$/),known=low==='/'||NAMES[seg]||fm;
   const name=fm?'Inscrição '+fm[1].toUpperCase():NAMES[seg],title=low==='/'?'Bype City':known?name+' · Bype City':'Página não encontrada · Bype City';
   const o=(q.headers['x-forwarded-proto']||'http').split(',')[0]+'://'+q.headers.host;
   s.writeHead(known?200:404,{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-cache'});
   return s.end(html.replace(/__ORIGIN__/g,o).replace(/__PATH__/g,low==='/'?'/':low).replace(/__TITLE__/g,title).replace(/__DESC__/g,known&&low!=='/'?name+' de Bype City. '+DESC:DESC))}
  let b='';q.on('data',c=>{b+=c;if(b.length>3e6)q.destroy()});
  q.on('end',()=>{let j={};try{j=JSON.parse(b||'{}')}catch{}const r=CORE.handle(q.method,q.url,j,q.headers);
   if(r.status===200&&q.url.startsWith('/api/admin/')){const a=q.url.slice(11).split('?')[0],o=(q.headers['x-forwarded-proto']||'http').split(',')[0]+'://'+q.headers.host;
    if(a==='newsAdd')notify('📰 **Notícia:** '+j.titulo+'\n'+o+'/noticias');else if(a==='diaAdd')notify('📜 **Diário Oficial:** '+(j.tipo||'')+' — '+j.titulo+'\n'+o+'/diario');else if(a==='debSet'&&j.fase==='aovivo')notify('🔴 **Debate ao vivo:** assista em '+o+'/debate')}
   s.writeHead(r.status,{'Content-Type':'application/json'});s.end(JSON.stringify(r.json))})
 }).listen(process.env.PORT||3000,()=>console.log('Bype City no ar'+(UU?' (banco Upstash)':' (arquivo local)')));
})().catch(e=>{console.error('Erro ao iniciar:',e.message);process.exit(1)});
process.on('SIGTERM',async()=>{if(timer){clearTimeout(timer);await flush()}process.exit(0)});
