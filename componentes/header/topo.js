// const head = document.head
const body = document.body

// const estilo = '<link rel="stylesheet" type="text/css" href="topo.css"/>'
// head.innerHTML += estilo // esse formato é quando queremos criar estilo, mas não inline. 

const estiloTopo = 
  "display: flex;" + 
  "justify-content: space-between;" + 
  "align-items: center;" + 
  "background-color: #00f;" 

const topo = document.createElement('div')
topo.setAttribute('id', 'topo')
topo.setAttribute('class', 'topo')
topo.setAttribute('style', estiloTopo)
body.prepend(topo) // anexa no início, enquanto o appendChild no final;

const estiloImgLogo = 'width: 200px;' 
const logo = 
    "<div id='logo' class='logo'>" +
      "<img src='logo_amazon.png' title='logo_amazon' style='"+ estiloImgLogo +"' />" +
    "</div>"
topo.innerHTML += logo

const login = 
    "<div id='login' class='login'>" +
      "<p id='matricula' />Matrícula:<span></span></p>" +
      "<p id='nome' />Nome:<span></span></p>" +
    "</div>"
topo.innerHTML += login