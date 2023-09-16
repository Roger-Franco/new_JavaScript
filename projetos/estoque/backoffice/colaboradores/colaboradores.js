const dadosGrid = document.querySelector('#dadosGrid')
const btn_add = document.querySelector('#btn_add')
const novoColaborador = document.querySelector('#novoColaborador')
const btn_fecharPopup = document.querySelector('#btn_fecharPopup')
const btn_gravarPopup = document.querySelector('#btn_gravarPopup')
const btn_cancelarPopup = document.querySelector('#btn_cancelarPopup')
const f_telefone = document.querySelector('#f_telefone')
const telefones = document.querySelector('#telefones')
const f_nome = document.querySelector('#f_nome')
const f_tipoColab = document.querySelector('#f_tipoColab')
const f_status = document.querySelector('#f_status')

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
  const tels = [...document.querySelectorAll(".numTel")];
  // console.log(tels)
  let numTels = []
  tels.forEach(t => {
    numTels.push(t.innerHTML)
  })
  // console.log(numTels)
  const dados = {
    nome: f_nome.value,
    tipo: f_tipoColab.value,
    status: f_status.value,
    telefones:numTels
  }
  console.log(dados)
  const options = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dados)
}
const endpoint = 'http://localhost:3000/colaboradores'
  fetch(endpoint, options)
  .then(res => {
    if(res.status == 201) {
      alert("Gravação de novo colaborador com sucesso!")
    } else {
      alert('Erro ao gravar novo contato')
    }
  })

  novoColaborador.classList.add('ocultarPopup')
})

btn_cancelarPopup.addEventListener('click', (evt) => {
  novoColaborador.classList.add('ocultarPopup')
})

f_telefone.addEventListener('keyup', (evt) => {
  if(evt.key == "Enter"){
    if(evt.target.value.length >= 8) {
    const divTel = document.createElement('div')
    divTel.setAttribute('class', 'tel')

    const divNumTel = document.createElement('div')
    divNumTel.setAttribute('class', 'numTel')
    divNumTel.innerHTML = evt.target.value
    divTel.appendChild(divNumTel)
    
    const imgDelTel = document.createElement('img')
    imgDelTel.setAttribute('class', 'delTel')
    imgDelTel.setAttribute('src', '../../imgs/deletar.svg')
    // imgDelTel.innerHTML = evt.target.value
    imgDelTel.addEventListener('click', (evt) => {
      // console.log(evt.target.parentNode)
      evt.target.parentNode.remove()
    })

    divTel.appendChild(imgDelTel)
    telefones.appendChild(divTel)

    evt.target.value = ''
    } else {
      alert('Número de telefone inválido')
    }
    
  }
})
