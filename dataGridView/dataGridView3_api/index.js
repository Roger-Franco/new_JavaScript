// const endpoint = "produtos.json"
const configDataGridView = {
  endpoint: "http://localhost:3000/produtos",
  idDestino: "dgvDados"
}

const dataGridView = (configDataGridView) => {
  const dgvDados = document.getElementById(configDataGridView.idDestino)
  dgvDados.innerHTML = ''
  fetch(configDataGridView.endpoint)
  .then(res => res.json())
  .then(res => {
    console.log(res)
    res.forEach((el) => {
      
    const dgvLinha = document.createElement('div')
    dgvLinha.setAttribute('class', 'dgvLinha')

    const c1 = document.createElement('div')
    c1.setAttribute('class', 'coluna c1')
    c1.innerHTML = el.id
    dgvLinha.appendChild(c1)

    const c2 = document.createElement('div')
    c2.setAttribute('class', 'coluna c2')
    c2.innerHTML = el.produto
    dgvLinha.appendChild(c2)

    const c3 = document.createElement('div')
    c3.setAttribute('class', 'coluna c3')
    c3.innerHTML = el.marca
    dgvLinha.appendChild(c3)

    const c4 = document.createElement('div')
    c4.setAttribute('class', 'coluna c4')
    c4.innerHTML = el.modelo
    dgvLinha.appendChild(c4)

    const c5 = document.createElement('div')
    c5.setAttribute('class', 'coluna c5')
    dgvLinha.appendChild(c5)

    const imgDelete = document.createElement('img')
    imgDelete.setAttribute('class', 'dgvIcone')
    imgDelete.setAttribute('src', 'deletar.svg')
    imgDelete.addEventListener('click', (evt) => {
      // const linha = evt.target.parentNode.parentNode
      const id = evt.target.parentNode.parentNode.firstChild.innerHTML
      const endpoint = `http://localhost:3000/produtos/${id}`
      fetch(endpoint, {
      method: "DELETE",
      ContentType: 'application/json'
  })
    })
    c5.appendChild(imgDelete)

    const imgEditar = document.createElement('img')
    imgEditar.setAttribute('class', 'dgvIcone')
    imgEditar.setAttribute('src', 'editar.svg')
    imgEditar.addEventListener('click', (evt) => {
      document.querySelector('#janelaEditar').classList.remove('ocultar')
      const id = evt.target.parentNode.parentNode.firstChild.innerHTML
      const endpoint = `http://localhost:3000/produtos/${id}`
      fetch(endpoint)
      .then(res => res.json())
      .then(res => {
        document.getElementById('f_idEditar').value = res.id
        document.getElementById('f_produtoEditar').value = res.produto
        document.getElementById('f_marcaEditar').value = res.marca
        document.getElementById('f_modeloEditar').value = res.modelo
        console.log(res)
        console.log(document.getElementById('f_modeloEditar'), 'document.getElement')
      })
    const btn_editar = document.getElementById('btn_gravar')
    btn_editar.addEventListener('click', async (evt) => {
      const dados = {
        'id': document.getElementById('f_idEditar').value,
        'produto': document.getElementById('f_produtoEditar').value,
        'marca': document.getElementById('f_marcaEditar').value,
        'modelo': document.getElementById('f_modeloEditar').value
      }
      console.log(dados, 'dados2')
      const endpoint = `http://localhost:3000/produtos/${id}`
      const options = {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados)
    }
      const response = await fetch(endpoint, options)
      // alert(response)
      return response
    })
    document.querySelector('#btn_cancelar').addEventListener('click', (evt) => {
      document.querySelector('#janelaEditar').classList.add('ocultar')
    })
  })

    c5.appendChild(imgEditar)

    const imgExibir = document.createElement('img')
    imgExibir.setAttribute('class', 'dgvIcone')
    imgExibir.setAttribute('src', 'exibir.svg')
    imgExibir.addEventListener('click', (evt) => {
      document.querySelector('.janelaView').classList.remove('ocultar')
      const id = evt.target.parentNode.parentNode.firstChild.innerHTML
      const endpoint = `http://localhost:3000/produtos/${id}`
      fetch(endpoint)
      .then(res => res.json())
      .then(res => {
        document.getElementById('f_id').value = res.id
        document.getElementById('f_produto').value = res.produto
        document.getElementById('f_marca').value = res.marca
        document.getElementById('f_modelo').value = res.modelo
        console.log(res)
      })
  //     fetch(endpoint, {
  //     method: "GET",
  //     ContentType: 'application/json'
  //     // body: JSON.stringify(dados)
  // })
    })
    c5.appendChild(imgExibir)

    dgvDados.appendChild(dgvLinha)
  });

  })
}
dataGridView(configDataGridView)

document.querySelector('#btn_ok').addEventListener('click', (evt) => {
  document.querySelector('.janelaView').classList.add('ocultar')
})