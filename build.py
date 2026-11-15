import base64,json
d=lambda f:base64.b64encode(open('src/'+f,'rb').read()).decode()
app=open('src/app.html',encoding='utf-8').read()
mp=open('src/map.json',encoding='utf-8').read()
assets=f"const MAPDATA={mp};\nconst IMG='data:image/jpeg;base64,{d('map.jpg')}';"
logo='data:image/png;base64,'+d('logo.png')
prod=app.replace('__ASSETS__',assets).replace('__LOGO__',logo)
open('index.html','w',encoding='utf-8').write(prod)
core=open('core.js',encoding='utf-8').read()
demo=assets+'\n'+core+"\nwindow.DEMO=1;CORE.init(MAPDATA,null,function(){});CORE.demo();"
prev=app.replace('__ORIGIN__','').replace('__ASSETS__',demo).replace('__LOGO__',logo)
banner='<div style="background:#fff3cd;color:#664d03;font:600 13px Arial;padding:8px 16px;text-align:center">PRÉVIA com dados fictícios · senha do CME na prévia: <b>cme123</b> · nada é salvo</div>'
prev=prev.replace('<nav>',banner+'<nav>',1)
open('/mnt/user-data/outputs/preview.html','w',encoding='utf-8').write(prev)
print(len(prod),len(prev))
