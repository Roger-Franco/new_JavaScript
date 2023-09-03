function msg(){
  alert('clicou no segundo elemento')
}

// const c1 = document.getElementById('c1')
const c3 = document.querySelector('#c3')
const c5 = document.querySelector('#c5')
const c6 = document.querySelector('#c6')
const cursos = [...document.querySelectorAll('.curso')]

cursos.map((el) => {
  el.addEventListener('click', (e) => {
    const el = e.target
    el.classList.add('destaque')
  })
})

// c3.addEventListener('click', msg)
// c5.addEventListener('click', () => {
//   alert('clicou outro elemento')
// })
// c6.addEventListener('click', (e) => {
//   console.log(e.target.innerHTML)
//   const valor = e.target.innerHTML
//   const el = e.target
//   el.classList.add('destaque')
//   alert('clicou o elemento com o valor ' + valor)
// })