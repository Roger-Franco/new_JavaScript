const caixa1 = document.querySelector('#caixa1')
const btn_c1 = document.querySelector('#c1')
const cursos = [...document.querySelectorAll('.curso')]

caixa1.addEventListener('click', (e) => {
  console.log('clicou');
})

cursos.map((el) => {
  el.addEventListener('click', (e) => {
    e.stopPropagation()
  })
})


btn_c1.addEventListener('click', (e) => {
  e.stopPropagation()
})

