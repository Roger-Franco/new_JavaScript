const dados = document.querySelector('#dados')
const fundopopup = document.querySelector('#fundopopup')
const btn_gravar = document.querySelector('#btn_gravar')
const btn_cancelar = document.querySelector('#btn_cancelar')
const f_id = document.querySelector('#f_id')
const f_nome = document.querySelector('#f_nome')
const f_celular = document.querySelector('#f_celular')
const f_email = document.querySelector('#f_email')
const f_dtnasc = document.querySelector('#f_dtnasc')

btn_gravar.addEventListener('click', (evt) => {
  fundopopup.classList.add('ocultar')
})

btn_cancelar.addEventListener('click', (evt) => {
  fundopopup.classList.add('ocultar')
})

const preencherDataGridView = () => {
  dados.innerHTML = "";
  let endpoint = `http://localhost:3000/agendas`
  fetch(endpoint)
  .then(res => res.json())
  .then(res => {
    console.log(res)
    res.forEach(el => {
      // console.log('linha')
      const linha = document.createElement('div')
      linha.setAttribute('class', 'linhaDados')

      const c1 = document.createElement('div')
      c1.setAttribute('class', 'coluna c1')
      c1.innerHTML = el.id
      linha.appendChild(c1)

      const c2 = document.createElement('div')
      c2.setAttribute('class', 'coluna c2')
      c2.innerHTML = el.nome
      linha.appendChild(c2)

      const c3 = document.createElement('div')
      c3.setAttribute('class', 'coluna c3')
      c3.innerHTML = el.celular
      linha.appendChild(c3)

      const c4 = document.createElement('div')
      c4.setAttribute('class', 'coluna c4')
      c4.innerHTML = el.email
      linha.appendChild(c4)

      const c5 = document.createElement('div')
      c5.setAttribute('class', 'coluna c5')
      c5.innerHTML = el.date
      linha.appendChild(c5)

      const c6 = document.createElement('div')
      c6.setAttribute('class', 'coluna c6 c_comando')
      const img_delete = document.createElement('img')
      img_delete.setAttribute('src', './imgs/deletar.svg')
      img_delete.setAttribute('class', 'icone_comando')
      img_delete.addEventListener('click', (evt) => {
        // console.log(evt.target.parentNode.parentNode.firstChild.innerHTML)
        // console.log(evt.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML)
        const id = evt.target.parentNode.parentNode.firstChild.innerHTML;
        removerContato(id)
      })
      const img_editar = document.createElement('img')
      img_editar.setAttribute('src', './imgs/editar.svg')
      img_editar.setAttribute('class', 'icone_comando')
      img_editar.addEventListener('click', (evt) => {
        fundopopup.classList.remove('ocultar')
        // console.log(evt.target.parentNode.parentNode.childNodes)
        const dados = evt.target.parentNode.parentNode.childNodes
      })
      c6.appendChild(img_delete)
      c6.appendChild(img_editar)
      linha.appendChild(c6)


      dados.appendChild(linha)
    });
  })
}

preencherDataGridView()

const removerContato = (id) => {
  const endpoint = `http://localhost:3000/agendas/${id}`
  fetch(endpoint, {
    method: "DELETE",
    ContentType: 'application/json'
  })
}