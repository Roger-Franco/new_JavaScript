const q1 = document.getElementById('q1')
const q2 = document.getElementById('q2')
const posx = document.getElementById('posx')
const posy = document.getElementById('posy')
const largura = document.getElementById('largura')
const altura = document.getElementById('altura')


// posx.innerHTML = `posx:${DOMRect_q1.x}`
// posy.innerHTML = `posy:${DOMRect_q1.y}`
// largura.innerHTML = `largura:${DOMRect_q1.width}`
// altura.innerHTML = `altura:${DOMRect_q1.height}`

/* ========== Minha solução ================ */

// let DOMRect_q1 = q1.getBoundingClientRect()
// let DOMRect_q2 = q2.getBoundingClientRect()
// console.log(DOMRect_q1)
// console.log(DOMRect_q2)

// const info = (Elemento) => { // minha solução
//   posx.innerHTML = `posx:${Elemento.x}`
//   posy.innerHTML = `posy:${Elemento.y}`
//   largura.innerHTML = `largura:${Elemento.width}`
//   altura.innerHTML = `altura:${Elemento.height}`
// }

// q1.addEventListener('click', () => {
//   info(DOMRect_q1)
// })

// q2.addEventListener('click', () => {
//   info(DOMRect_q2)
// })

/* ========================== */

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