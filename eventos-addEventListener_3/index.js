const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btn = document.querySelector('#btn_tranferir')
const todos_cursos = [...document.querySelectorAll('.curso')]

todos_cursos.map((el) => {
  el.addEventListener('click', (e) => {
    const curso = e.target
    console.log(curso)
    // curso.classList.add('selecionado')
    curso.classList.toggle('selecionado')
  })
})

// btn.addEventListener('click', (e) => {
//   todos_cursos.map((el) => {
//     if(el.classList.contains('selecionado')) {
//           caixa2.appendChild(el)
//     } else {
//       caixa1.appendChild(el)
//     }
//   })
// })

btn.addEventListener('click', (e) => {
  const curso_selecionado = [...document.querySelectorAll('.selecionado')]
  const curso_nao_selecionado = [...document.querySelectorAll('.curso:not(.selecionado)')]
  console.log(curso_nao_selecionado)
  curso_selecionado.map((el) => {
          caixa2.appendChild(el)
    })
    curso_nao_selecionado.map((el) => {
      caixa1.appendChild(el)
    })
  // todos_cursos.map((el) => {
  //   curso_selecionado.map((el) => {
  //         caixa2.appendChild(el)
  //   })
  //   curso_nao_selecionado.map((el) => {
  //     caixa1.appendChild(el)
  //   })
  //   })
})