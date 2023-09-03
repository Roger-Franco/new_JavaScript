const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btn = document.querySelector('#btn_copiar')
const todos_cursos = [...document.querySelectorAll('.curso')]

todos_cursos.map((el) => {
  el.addEventListener('click', (e) => {
    const curso = e.target
    console.log(curso)
    // curso.classList.add('selecionado')
    curso.classList.toggle('selecionado')
  })
})

btn.addEventListener('click', (e) => {
  const curso_selecionado = [...document.querySelectorAll('.selecionado')]
  console.log(curso_selecionado)
  curso_selecionado.map((el) => {
    caixa2.appendChild(el)
  })
})