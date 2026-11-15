# Eleições Bype City
Render > New > Web Service > conecte o repositório. Build: `npm install` | Start: `npm start`
Variáveis: ADMIN_PASSWORD (senha do CME)
Para salvar tudo de forma permanente e grátis: crie um banco no Upstash (Redis) e coloque
UPSTASH_REDIS_REST_URL e UPSTASH_REDIS_REST_TOKEN (aba REST API do banco).
Alternativa paga: Disk do Render em /data + DATA_DIR=/data.
Formulários: /?f=pss e /?f=psv

Card de link (Discord/WhatsApp): usa og.png e as meta tags do index.html (automático).
Atualizar pelo GitHub: crie .github/workflows/unzip.yml (arquivo unzip.yml) e depois basta enviar o .zip na raiz do repositório.
