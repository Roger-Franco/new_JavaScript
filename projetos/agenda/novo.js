const btn_gravar = document.querySelector('#btn_gravar')
const btn_cancelar = document.querySelector('#btn_cancelar')
const f_nome = document.querySelector('#f_nome')
const f_celular = document.querySelector('#f_celular')
const f_email = document.querySelector('#f_email')
const f_dtnasc = document.querySelector('#f_dtnasc')

btn_gravar.addEventListener('click', (evt) => {
  const dados = {
    'nome': f_nome.value,
    'celular': f_celular.value,
    'email': f_email.value,
    'date': f_dtnasc.value,
  }
  const options = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dados)
}
  console.log(dados, options)
  const endpoint = 'http://localhost:3000/agendas'
  fetch(endpoint, options)
  .then(res => {
    // evt.preventDefault()
    console.log(res), 'res'
    if(res.status == 201) {
      console.log("OK")
    } else {
      alert('Erro ao gravar novo contato')
    }
  })
})
