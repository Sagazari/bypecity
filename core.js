var CORE=(function(){
var DEFAULT_LEIS="# Constituição Municipal de Bype City\n## Título I – Dos princípios fundamentais\nArt. 1º. Bype City é uma cidade democrática, onde todo poder emana do povo, que o exerce por meio do voto e das instituições municipais.\nArt. 2º. São princípios da cidade: legalidade, impessoalidade, moralidade, publicidade, eficiência e respeito mútuo.\nArt. 3º. Todos são iguais perante a lei, sem distinção de qualquer natureza.\n## Título II – Dos direitos e deveres\nArt. 4º. São direitos de todo cidadão:\n- votar e ser votado, cumpridos os requisitos desta Constituição;\n- ser ouvido e ter suas denúncias analisadas;\n- ter acesso às leis e aos atos públicos.\nArt. 5º. É permitido:\n- conviver, circular e participar das atividades da cidade com respeito;\n- criticar e fiscalizar governantes de forma educada e responsável;\n- participar dos processos seletivos e das eleições.\nArt. 6º. É proibido:\n- ofender, perseguir, ameaçar ou discriminar qualquer cidadão;\n- fraudar votos, inscrições ou resultados;\n- usar cargo público para benefício pessoal;\n- divulgar informações falsas para prejudicar candidatos ou a cidade;\n- descumprir decisões do Tribunal Federal Municipal.\n## Título III – Do Poder Executivo\nArt. 7º. O Poder Executivo é exercido pelo Prefeito, auxiliado pelo Vice-prefeito.\nArt. 8º. O Vice-prefeito substitui o Prefeito em seus impedimentos e o sucede em caso de renúncia ou perda do cargo.\nArt. 9º. É dever do Prefeito e do Vice-prefeito agir com transparência e prestar contas aos cidadãos.\n## Título IV – Das eleições\nArt. 10. As eleições são organizadas pelo CME – Conselho Municipal Eleitoral.\nArt. 11. Para ser candidato é obrigatório ser aprovado no Processo Seletivo Superior (PSS), para Prefeito, ou no Processo Seletivo Vice (PSV), para Vice-prefeito.\nArt. 12. Cada eleitor tem direito a um único voto por turno.\nArt. 13. Será eleito no primeiro turno o candidato que obtiver mais da metade dos votos válidos. Caso contrário, haverá segundo turno entre os dois mais votados.\n## Título V – Do Tribunal Federal Municipal\nArt. 14. O Tribunal Federal Municipal (TFM) é o órgão responsável por aplicar esta Constituição e as demais leis da cidade.\nArt. 15. Compete ao TFM julgar violações às leis, aplicar as penalidades previstas e resolver conflitos entre cidadãos e instituições.\nArt. 16. As decisões do TFM devem ser fundamentadas, públicas e cumpridas por todos.\n## Título VI – Das disposições finais\nArt. 17. Esta Constituição pode ser alterada pelo CME e pelo TFM, e as mudanças passam a valer assim que publicadas.",DB,REG,save=function(){},PASS='cme123',PAL=['#c4170c','#1565c0','#2e7d32','#f9a825','#6a1b9a','#00838f'];
var QB={
pss:{titulo:'PSS – Processo Seletivo Superior (Prefeito)',q:[
['Quem chefia o Poder Executivo do município?',['O presidente da Câmara','O prefeito','O secretário de obras','O juiz eleitoral'],1],
['Qual lei fixa as receitas e despesas do município a cada ano?',['Lei Orçamentária Anual','Plano Diretor','Código de Posturas','Lei Orgânica'],0],
['Qual órgão fiscaliza o prefeito e aprova as leis municipais?',['Tribunal de Justiça','Defesa Civil','Câmara de Vereadores','Polícia Militar'],2],
['Dois secretários entram em conflito. O prefeito deve:',['Demitir os dois','Ouvir ambos e decidir pelo interesse público','Ignorar o problema','Ficar do lado do mais próximo'],1],
['O princípio que proíbe favorecer pessoas na administração é o da:',['Impessoalidade','Eficiência','Publicidade','Legalidade'],0],
['Você descobre desvio de verba em uma obra. Qual a atitude correta?',['Abafar para evitar escândalo','Apurar, afastar os envolvidos e acionar os órgãos de controle','Esperar a próxima eleição','Trocar o nome da obra'],1],
['Numa enchente, a primeira prioridade da gestão é:',['Divulgar a prefeitura','Proteger vidas e acionar a Defesa Civil','Cobrar impostos atrasados','Adiar o socorro até ter orçamento'],1],
['A licitação serve para:',['Escolher o amigo do prefeito','Garantir a proposta mais vantajosa com igualdade entre concorrentes','Acelerar contratos sem regras','Reduzir a fiscalização'],1],
['Transparência na gestão significa:',['Divulgar gastos e decisões de forma acessível','Guardar os documentos em sigilo','Falar só com aliados','Publicar apenas as boas notícias'],0],
['Quem sanciona ou veta os projetos aprovados pela Câmara?',['O governador','O presidente da Câmara','O prefeito','O vice-prefeito'],2],
['O Plano Diretor trata de:',['Folha de pagamento','Desenvolvimento e ordenamento urbano','Eventos culturais','Regras de trânsito apenas'],1],
['Qual a duração do mandato de prefeito?',['2 anos','3 anos','5 anos','4 anos'],3],
['Moralidade administrativa exige:',['Agir com ética e honestidade','Seguir apenas a vontade popular do momento','Priorizar aliados','Cumprir só o que for conveniente'],0],
['Um aliado pede um cargo para o qual não tem qualificação. Você:',['Nomeia para manter a aliança','Nomeia por mérito e competência','Cria um cargo novo','Promete e esquece'],1],
['Você perdeu uma eleição. O correto é:',['Contestar sem provas','Reconhecer o resultado e continuar colaborando','Abandonar a cidade','Boicotar o vencedor'],1]]},
psv:{titulo:'PSV – Processo Seletivo Vice (Vice-prefeito)',q:[
['Qual o principal papel do vice-prefeito?',['Substituir o prefeito quando necessário e auxiliar na gestão','Fiscalizar o prefeito como opositor','Aprovar leis na Câmara','Cuidar apenas de eventos'],0],
['Se o prefeito renuncia ou se afasta, quem assume?',['O vereador mais votado','O vice-prefeito','Um secretário sorteado','O candidato derrotado'],1],
['Como o vice-prefeito é escolhido?',['Indicado depois da posse','Eleito na mesma chapa do prefeito','Sorteado entre os eleitores','Escolhido pela Câmara'],1],
['Você discorda de uma decisão do prefeito. O ideal é:',['Criticar publicamente','Expor sua posição com respeito nos canais internos','Sabotar a decisão','Renunciar na hora'],1],
['O prefeito viaja e surge uma crise. Você:',['Espera o prefeito voltar','Age conforme o planejado e mantém o prefeito informado','Age sem avisar ninguém','Culpa a equipe'],1],
['Lealdade institucional significa:',['Obedecer cegamente','Compromisso com o município e a lei acima de interesses pessoais','Proteger amigos','Evitar decisões'],1],
['Em geral, o vice recebe:',['Missões delegadas pelo prefeito','O controle do orçamento sozinho','Poder de vetar leis','Nenhuma função'],0],
['Diante de um conflito de interesses, o vice deve:',['Decidir mesmo assim','Declarar o conflito e se afastar da decisão','Esconder o fato','Pedir segredo aos colegas'],1],
['No contato com os moradores, o vice deve:',['Evitar reclamações','Ouvir as demandas e encaminhá-las','Prometer tudo','Responder só nas redes'],1],
['O plano de governo é:',['Um documento com as propostas da chapa','Uma lista de contatos','Um contrato de obra','Um relatório de multas'],0],
['Ao assumir interinamente, o vice deve:',['Mudar tudo imediatamente','Manter a continuidade e dialogar antes de mudar o plano','Parar a gestão','Nomear parentes'],1],
['O princípio da publicidade exige:',['Atos mantidos em sigilo','Ampla divulgação dos atos públicos','Propaganda pessoal','Divulgar só resultados positivos'],1],
['Trabalhar em equipe é:',['Concentrar as tarefas','Dividir tarefas e reconhecer o mérito de todos','Assumir o crédito sozinho','Evitar reuniões'],1],
['Você descobre uma irregularidade na equipe. Deve:',['Comunicar aos órgãos de controle','Ignorar','Pedir demissão','Divulgar boatos'],0],
['O vice-prefeito deve evitar:',['Participar de reuniões','Usar o cargo para benefício pessoal','Ouvir a população','Cumprir a lei'],1]]}};

function init(map,db,sv,pass){REG=map.R.map(function(r){return r.id});
 DB=Object.assign({S:{fase:'espera',turno:1,eid:0,titulo:'Eleição para Prefeito de Bype City',c1:[],c2:[],top1:[],eleito:null},C:{},V:{},AP:{},voters:{},votos:{},subs:[],cfg:{}},db||{});
 DB.cfg=Object.assign({pss:true,psv:true,min:12},DB.cfg);if(!DB.leis)DB.leis={texto:DEFAULT_LEIS,at:0};if(sv)save=sv;if(pass)PASS=pass}
var cands=function(n){return(DB.S['c'+n]||[]).filter(function(i){return DB.C[i]})};
var shuf=function(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a};
var COR=/^#[0-9a-f]{6}$/i,str=function(v,n){return String(v==null?'':v).trim().slice(0,n)};

function handle(m,url,b,h){b=b||{};h=h||{};var u=url.split('?'),p=u[0],q=Object.fromEntries(new URLSearchParams(u[1]||'')),S=DB.S;
 var ok=function(j){return{status:200,json:j||{ok:1}}},no=function(e,c){return{status:c||400,json:{erro:e}}};
 if(m==='GET'&&p==='/api/state'){var v=DB.voters[q.token],vo=DB.votos[q.token],ap={};
  [1,2].forEach(function(n){var a=DB.AP[n];ap[n]=a&&a.eid===S.eid?{reg:a.reg}:null});
  return ok({S:S,C:DB.C,V:DB.V,AP:ap,me:v?{n:v.n,r:v.r,voted:!!(vo&&vo.eid===S.eid&&vo['t'+S.turno]!=null)}:null})}
 if(m==='GET'&&p==='/api/leis')return ok(DB.leis);
 var fm=p.match(/^\/api\/form\/(pss|psv)$/);
 if(m==='GET'&&fm){var f=QB[fm[1]];return ok({tipo:fm[1],titulo:f.titulo,aberto:!!DB.cfg[fm[1]],perguntas:f.q.map(function(x){return{q:x[0],o:x[1]}})})}
 if(m!=='POST')return no('Rota não encontrada.',404);
 if(p==='/api/register'){if(!str(b.name,40)||REG.indexOf(b.r)<0)return no('Informe seu nome e sua região.');
  var t=globalThis.crypto.randomUUID();DB.voters[t]={n:str(b.name,40),r:b.r};save(DB);return ok({token:t})}
 if(p==='/api/vote'){var vt=DB.voters[b.token];if(!vt)return no('Cadastre-se antes de votar.');if(S.fase!=='votacao')return no('A votação não está aberta.');
  if(b.c!=='branco'&&cands(S.turno).indexOf(b.c)<0)return no('Candidato inválido.');
  var o=DB.votos[b.token]&&DB.votos[b.token].eid===S.eid?DB.votos[b.token]:{eid:S.eid};
  if(o['t'+S.turno]!=null)return no('Você já votou neste turno.');o.r=vt.r;o['t'+S.turno]=b.c;DB.votos[b.token]=o;save(DB);return ok()}
 if(p==='/api/inscricao'){var tp=b.tipo,F=QB[tp];if(!F)return no('Formulário inválido.');if(!DB.cfg[tp])return no('As inscrições estão encerradas.');
  var nome=str(b.nome,60),partido=str(b.partido,30),motivo=str(b.motivo,600),prop=str(b.proposta,600),r=b.resp;
  if(nome.length<3||!partido)return no('Preencha nome e partido.');if(motivo.length<20||prop.length<20)return no('Escreva respostas um pouco mais completas.');
  if(!Array.isArray(r)||r.length!==F.q.length||r.some(function(x,i){return!(x>=0&&x<F.q[i][1].length)}))return no('Responda todas as questões.');
  if(DB.subs.some(function(s){return s.tipo===tp&&s.nome.toLowerCase()===nome.toLowerCase()}))return no('Já existe uma inscrição com esse nome.');
  var ac=r.reduce(function(s,x,i){return s+(x===F.q[i][2]?1:0)},0);
  DB.subs.push({id:'s'+Date.now()+Math.floor(Math.random()*99),tipo:tp,nome:nome,partido:partido,motivo:motivo,proposta:prop,foto:String(b.foto||'').slice(0,200000),acertos:ac,total:F.q.length,status:'pendente',ts:Date.now()});
  save(DB);return ok()}
 if(p.indexOf('/api/admin/')!==0)return no('Rota não encontrada.',404);
 if(h['x-admin']!==PASS)return no('Senha do CME incorreta.',401);
 var n=S.turno;
 switch(p.slice(11)){
 case'login':break;
 case'setLeis':if(typeof b.texto!=='string'||b.texto.trim().length<20)return no('Texto muito curto.');DB.leis={texto:b.texto.slice(0,60000),at:Date.now()};break;
 case'stats':return ok({eleitores:Object.keys(DB.voters).length,votos:Object.values(DB.votos).filter(function(v){return v.eid===S.eid&&v['t'+n]!=null}).length,cfg:DB.cfg,
  subs:DB.subs.map(function(s){return Object.assign({},s,{foto:''})}).reverse()});
 case'addC':if(!str(b.nome,60))return no('Informe o nome.');
  DB.C['c'+Date.now()]={nome:str(b.nome,60),partido:str(b.partido,20)||'—',num:str(b.num,4)||'00',plano:str(b.plano,160),cor:COR.test(b.cor)?b.cor:PAL[0],foto:String(b.foto||'').slice(0,200000),vice:''};break;
 case'setC':{var c=DB.C[b.id];if(!c)return no('Candidato não encontrado.');if(COR.test(b.cor))c.cor=b.cor;if(typeof b.foto==='string')c.foto=b.foto.slice(0,200000);
  if(typeof b.vice==='string')c.vice=DB.V[b.vice]?b.vice:'';break}
 case'delC':delete DB.C[b.id];['c1','c2','top1'].forEach(function(k){S[k]=(S[k]||[]).filter(function(i){return i!==b.id})});if(S.eleito===b.id)S.eleito=null;break;
 case'delV':delete DB.V[b.id];Object.values(DB.C).forEach(function(c){if(c.vice===b.id)c.vice=''});break;
 case'setForm':if(typeof b.pss==='boolean')DB.cfg.pss=b.pss;if(typeof b.psv==='boolean')DB.cfg.psv=b.psv;if(b.min>=1&&b.min<=15)DB.cfg.min=Math.floor(b.min);break;
 case'accept':{var s=DB.subs.find(function(x){return x.id===b.id});if(!s)return no('Inscrição não encontrada.');if(s.status!=='pendente')return no('Esta inscrição já foi analisada.');
  if(s.acertos<DB.cfg.min)return no('Reprovado: abaixo da nota mínima do processo seletivo.');
  if(s.tipo==='pss'){var used=Object.values(DB.C).map(function(x){return x.num}),nn=10;while(used.indexOf(String(nn))>=0)nn++;
   s.ref='c'+Date.now();DB.C[s.ref]={nome:s.nome,partido:s.partido,num:String(nn),plano:s.proposta.slice(0,160),cor:PAL[Object.keys(DB.C).length%PAL.length],foto:s.foto,vice:''}}
  else{s.ref='v'+Date.now();DB.V[s.ref]={nome:s.nome,partido:s.partido,foto:s.foto}}
  s.status='aceito';break}
 case'reject':{var s2=DB.subs.find(function(x){return x.id===b.id});if(!s2)return no('Inscrição não encontrada.');s2.status='recusado';break}
 case'start':if(Object.keys(DB.C).length<2)return no('Cadastre ao menos 2 candidatos.');
  Object.assign(S,{eid:Date.now(),titulo:str(b.titulo,90)||S.titulo,turno:1,fase:'votacao',eleito:null,c1:Object.keys(DB.C),c2:[],top1:[]});break;
 case'close':DB.AP[n]={eid:S.eid,ord:shuf(REG),reg:{}};S.fase='apuracao';break;
 case'reveal':{var a=DB.AP[n];if(!a)return no('Sem apuração em andamento.');
  var pend=a.ord.filter(function(r){return!a.reg[r]}).slice(0,Math.min(+b.k||1,99)),ids=cands(n);
  pend.forEach(function(r){var o={branco:0};ids.forEach(function(c){o[c]=0});a.reg[r]=o});
  Object.values(DB.votos).forEach(function(v){var ch=v['t'+n];if(v.eid!==S.eid||ch==null||pend.indexOf(v.r)<0)return;
   if(ch!=='branco'&&ch in a.reg[v.r])a.reg[v.r][ch]++;else a.reg[v.r].branco++});break}
 case'finish':{var a2=DB.AP[n],tot={};if(!a2)return no('Sem apuração.');
  for(var r in a2.reg)for(var k in a2.reg[r])if(k!=='branco')tot[k]=(tot[k]||0)+a2.reg[r][k];
  var l=cands(n).map(function(i){return[i,tot[i]||0]}).sort(function(x,y){return y[1]-x[1]}),valid=l.reduce(function(t,x){return t+x[1]},0);
  var win=n===2||(valid>0&&l[0][1]/valid>.5);S.fase='encerrada';S.eleito=win&&l[0]?l[0][0]:null;if(n===1)S.top1=l.slice(0,2).map(function(x){return x[0]});break}
 case'second':S.turno=2;S.fase='votacao';S.c2=S.top1.filter(function(i){return DB.C[i]});S.eleito=null;break;
 case'reset':Object.assign(S,{fase:'espera',turno:1,eleito:null,c1:[],c2:[],top1:[]});break;
 default:return no('Ação desconhecida.')}
 save(DB);return ok()}

function demo(){var S=DB.S;
 DB.V={v1:{nome:'Paulo Nogueira',partido:'PRB',foto:''},v2:{nome:'Camila Rocha',partido:'MDU',foto:''},v3:{nome:'Diego Farias',partido:'PVC',foto:''}};
 DB.C={c1:{nome:'Marina Albuquerque',partido:'PRB',num:'10',plano:'Mais segurança e transporte',cor:'#c4170c',foto:'',vice:'v1'},
  c2:{nome:'Rafael Monteiro',partido:'MDU',num:'11',plano:'Economia e emprego local',cor:'#1565c0',foto:'',vice:'v2'},
  c3:{nome:'Helena Duarte',partido:'PVC',num:'12',plano:'Meio ambiente e lazer',cor:'#2e7d32',foto:'',vice:'v3'}};
 Object.assign(S,{eid:1,fase:'apuracao',turno:1,c1:['c1','c2','c3']});
 var ord=shuf(REG),reg={},w={c1:1.3,c2:1,c3:.7};
 ord.slice(0,32).forEach(function(r){var o={branco:Math.floor(Math.random()*4)};Object.keys(w).forEach(function(c){o[c]=Math.floor((8+Math.random()*60)*w[c]*(Math.random()<.35?2.2:1))});reg[r]=o});
 DB.AP[1]={eid:1,ord:ord,reg:reg};
 [['Lucas Andrade','PRB','pss',14],['Bianca Torres','UNI','pss',9],['Tiago Lemos','MDU','psv',13],['Sara Pires','PVC','psv',15]].forEach(function(x,i){
  DB.subs.push({id:'d'+i,tipo:x[2],nome:x[0],partido:x[1],motivo:'Quero contribuir com Bype City e ajudar a melhorar a vida de todos os moradores.',proposta:'Propostas de segurança, transporte e lazer para os bairros.',foto:'',acertos:x[3],total:15,status:'pendente',ts:Date.now()})})}
var api={init:init,handle:handle,demo:demo};if(typeof module!=='undefined')module.exports=api;return api})();
