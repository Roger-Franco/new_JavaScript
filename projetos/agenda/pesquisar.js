const btn_pesq = document.querySelector('#btn_pesq')
const f_txtpesq = document.querySelector('#f_txtpesq')
const dados = document.querySelector('#dados')

btn_pesq.addEventListener('click', (evt) => {
  const valor_pesquisado = f_txtpesq.value
  if(valor_pesquisado == "") {
    alert("Digite a pesquisa")
    f_txtpesq.focus()
    return;
  }

  const value_input_pesq = document.querySelector("input[name=f_pesq]:checked").value
  // console.log(document.querySelector("input[name=f_pesq]:checked").value)
  let query = ''
  if(value_input_pesq === 'id'){
    query = `id_like=${valor_pesquisado}`
  }else if(value_input_pesq === 'nome'){
    query = `nome_like=${valor_pesquisado}`
  }else if(value_input_pesq === 'email'){
    query = `email_like=${valor_pesquisado}`
  }else if(value_input_pesq === 'nasc'){
    query = `nasc_like=${valor_pesquisado}`
  }
  let endpoint = `http://localhost:3000/agendas?${query}`
  fetch(endpoint)
  .then(res => res.json())
  .then(res => {
    dados.innerHTML = "";
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

      dados.appendChild(linha)
    });
  })
})