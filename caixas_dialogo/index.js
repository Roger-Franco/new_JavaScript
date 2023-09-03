const btn_alert = document.getElementById('btn_alert')
const btn_confirm = document.getElementById('btn_confirm')
const btn_prompt = document.getElementById('btn_prompt')

btn_alert.addEventListener('click', (evt) => {
  alert("Olá, como você está?")
})

btn_confirm.addEventListener('click', (evt) => {
  const retorno = confirm("Vopcê está aprendendo muito?")
  console.log(retorno)
})

btn_prompt.addEventListener('click', (evt) => {
  const nome = prompt("Digite o seu nome:", "Digite o seu nome aqui") 
  if(nome == null){
    console.log("Botão Cancelar pressionado")
  } else{
    console.log("Botão Ok pressionado")
  }
  console.log(nome)
})