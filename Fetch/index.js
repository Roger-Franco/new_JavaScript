const p_temp = document.getElementById('p_temp')
const p_nivel = document.getElementById('p_nivel')
const p_press = document.getElementById('p_press')
const btn_texto = document.getElementById('btn_texto')


const obterDados = () => {

  const endpoint = 'https://cursojavascript.rogerfranco.repl.co/'
  fetch(endpoint)
  // .then(res => res.text())
  .then(res => res.json())
  .then(dados => {
    console.log(dados)
  p_temp.innerHTML = "Temperatura: " + dados.temperatura
  p_nivel.innerHTML = "Nivel: " + dados.nivel
  p_press.innerHTML = "Pressão: " + dados.pressao
})
}

// btn_texto.addEventListener('click', () => {
//   obterDados()
// })

// setInterval(obterDados, 3000)


let dados = {
  nome: "Roger",
  canal: "FrankCursos",
  curso: "Javascript",
}

let cabecalho = {
  method: "POST",
  body: JSON.stringify(dados)
}

const gravarDados = () => {
  const endpoint = 'https://cursojavascript.rogerfranco.repl.co/'
  fetch(endpoint, cabecalho)
  // fetch(endpoint, {
  //     method: "POST",
  //     body: JSON.stringify(dados)
  // })
  .then(res => res.json())
  .then(ret => {
    console.log(ret)
})
}

btn_texto.addEventListener('click', () => {
  gravarDados()
  })

