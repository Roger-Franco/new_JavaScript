const q1 = document.getElementById('q1')
const q2 = document.getElementById('q2')
const posx = document.getElementById('posx')
const posy = document.getElementById('posy')
const largura = document.getElementById('largura')
const altura = document.getElementById('altura')

q1.accessKey = 'b'  // pressionar control + option + a tecla do accessKey
q2.accessKey = 'n'

const info = (Elemento) => {
  let DOMRect = Elemento.getBoundingClientRect()
  posx.innerHTML = `posx:${DOMRect.x}`
  posy.innerHTML = `posy:${DOMRect.y}`
  largura.innerHTML = `largura:${DOMRect.width}`
  altura.innerHTML = `altura:${DOMRect.height}`
}

q1.addEventListener('click', (evt) => {
  // info(q1)
  info(evt.target)
})

q2.addEventListener('click', (evt) => {
  // info(q2)
  info(evt.target)
})