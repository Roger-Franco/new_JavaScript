const dadosGrid = document.querySelector('#dadosGrid')
const btn_add = document.querySelector('#btn_add')
const novoColaborador = document.querySelector('#novoColaborador')
const btn_fecharPopup = document.querySelector('#btn_fecharPopup')
const btn_gravarPopup = document.querySelector('#btn_gravarPopup')
const btn_cancelarPopup = document.querySelector('#btn_cancelarPopup')
const f_tipoColab = document.querySelector('#f_tipoColab')

const endpoint_todosColaboradores = 'http://localhost:3000/colaboradores'

fetch(endpoint_todosColaboradores)
.then(res => res.json())
.then(res => {
  console.log(res)
  dadosGrid.innerHTML = ''
  res.forEach(el => {
    const divLinha = document.createElement('div')
    divLinha.setAttribute('class', 'linhaGrid')

    const divC1 = document.createElement('div')
    divC1.setAttribute('class', 'colunaLinhaGrid c1')
    divC1.innerHTML = el.id
    divLinha.appendChild(divC1)

    const divC2 = document.createElement('div')
    divC2.setAttribute('class', 'colunaLinhaGrid c2')
    divC2.innerHTML = el.nome
    divLinha.appendChild(divC2)

    const divC3 = document.createElement('div')
    divC3.setAttribute('class', 'colunaLinhaGrid c3')
    divC3.innerHTML = el.tipo
    divLinha.appendChild(divC3)

    const divC4 = document.createElement('div')
    divC4.setAttribute('class', 'colunaLinhaGrid c4')
    divC4.innerHTML = el.status
    divLinha.appendChild(divC4)

    const divC5 = document.createElement('div')
    divC5.setAttribute('class', 'colunaLinhaGrid c5')
    divLinha.appendChild(divC5)

    dadosGrid.appendChild(divLinha)
  });
})

const endpoint_tiposColaboradores = 'http://localhost:3000/Tipos'

fetch(endpoint_tiposColaboradores)
.then(res => res.json())
.then(res => {
  f_tipoColab.innerHTML = '';
  res.forEach(e => {
    console.log(res)
    const opt = document.createElement("option")
    opt.setAttribute("value", e.id)
    opt.innerHTML = e.tipo
    f_tipoColab.appendChild(opt)
  })
})

btn_add.addEventListener('click', (evt) => {
  novoColaborador.classList.remove('ocultarPopup')
})

btn_fecharPopup.addEventListener('click', (evt) => {
  novoColaborador.classList.add('ocultarPopup')
})

btn_gravarPopup.addEventListener('click', (evt) => {
  novoColaborador.classList.add('ocultarPopup')
})

btn_cancelarPopup.addEventListener('click', (evt) => {
  novoColaborador.classList.add('ocultarPopup')
})
