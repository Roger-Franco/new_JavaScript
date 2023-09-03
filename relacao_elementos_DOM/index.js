const caixa1 = document.querySelector('#caixa1')
const c1 = document.querySelector('#c1')
// const cursos1 = [...document.querySelectorAll('.curso')]

const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'React Native']

// console.log(c1.parentNode)
// console.log(c1.parentNode.parentNode) // caso precise de pegar o avô

// const novo_elemento = document.createElement('div')
// novo_elemento.setAttribute('class', 'c1 curso')
// novo_elemento.setAttribute('id', 'c7')

// novo_elemento.innerHTML = 'React Native'

// caixa1.appendChild(novo_elemento)

cursos.map((el, index) => {
  const novo_elemento = document.createElement('div')
  novo_elemento.setAttribute('class', 'c1 curso')
  novo_elemento.setAttribute('id', 'c' + (Number(index) + 1))
  novo_elemento.innerHTML = el
  
  const btn_lixeira = document.createElement('img')
  btn_lixeira.setAttribute("src", '../imgs/lixeira.png')
  btn_lixeira.setAttribute("class", 'btn_lixeira')
  
  // novo_elemento.addEventListener('click', (e) => {
    //   console.log(e.target)
    //   caixa1.removeChild(e.target)
    // })
    
    btn_lixeira.addEventListener('click', (e) => {
      // console.log(e)
      // console.log(e.target.parentNode)
      caixa1.removeChild(e.target.parentNode)
    })
    
    
    caixa1.appendChild(novo_elemento)
    novo_elemento.appendChild(btn_lixeira)
})


// const cursos1 = [...document.querySelectorAll('.curso')]
// console.log(caixa1.firstElementChild)
// console.log(caixa1.lastElementChild)
// console.log(caixa1.children)
// console.log(cursos1)

