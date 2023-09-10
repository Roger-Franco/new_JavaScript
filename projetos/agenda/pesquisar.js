const btn_pesq = document.querySelector('#btn_pesq')
const f_txtpesq = document.querySelector('#f_txtpesq')

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
  .then(res => console.log(res))
})