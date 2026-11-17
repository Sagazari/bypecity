# Bype City
Render > New > Web Service > conecte o repositório. Build: `npm install` | Start: `npm start`

Variáveis:
- PREFEITURA_PASSWORD: senha única da Prefeitura (cai em ADMIN_PASSWORD se ausente)
- UPSTASH_REDIS_REST_URL e UPSTASH_REDIS_REST_TOKEN: persistência (aba REST API do banco Upstash)
- Alternativa: Disk do Render em /data + DATA_DIR=/data

- LIVEKIT_URL (wss://...), LIVEKIT_API_KEY, LIVEKIT_API_SECRET: transmissão do debate (conta grátis em livekit.io)
- DISCORD_WEBHOOK_URL (opcional): avisa no Discord quando sai notícia, ato do Diário ou o debate começa

Rotas: /noticias, /diario, /deveres, /debate, /, /eleicoes, /apuracao, /candidatos, /mapa, /leis, /orgaos, /prefeitura,
/cme /tfm /tmn /cdr /fmtd /clt /pbp /stam /oms /semol /smf (/dcr, /dtam, /slc e /sol redirecionam), /formulario/pss, /formulario/psv.
Monitoramento (UptimeRobot): GET ou HEAD em /health (HTTP 200, JSON).

Após editar src/app.html, src/map.json ou core.js, rode `python3 build.py` para regenerar index.html.
