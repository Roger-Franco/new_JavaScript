// const numero = document.getElementById('numero')
// const btn_promessa = document.getElementById('btn_promessa')

// let promise = new Promise((resolve, reject) => {
//   let resultado = true
//   let tempo = 3000

//   setTimeout(() => {
//     if(resultado){
//       resolve("Deu tudo certo")
//     } else{
//       reject("Deu tudo errado")
//     }
//   }, tempo)
// })

// promise.then((retorno) => {
//   numero.innerHTML = retorno
//   numero.classList.remove("erro")
//     numero.classList.add("ok")
// })

// promise.catch((retorno) => {
//   numero.innerHTML = retorno
//   numero.classList.remove("ok")
//   numero.classList.add("erro")
// })

// numero.innerHTML = "Processando..."


// let resultado = false
// let tempo = 3000

// numero.innerHTML = "Processando..."

// setTimeout(() => {
//   resultado = true
// }, tempo)

// if(resultado) {
//   numero.innerHTML = "Deu tudo certo"
//   numero.classList.remove("erro")
//   numero.classList.add("ok")
// } else {
//   numero.innerHTML = "Deu tudo errado"
//   numero.classList.add("erro")
//   numero.classList.remove("ok")
// }

/* ====================== */

const numero = document.getElementById('numero')
const btn_promessa = document.getElementById('btn_promessa')

btn_promessa.addEventListener('click', (evt) => {
  numero.innerHTML = "Processando..."
  promessa()
    .then((retorno) => {
      numero.innerHTML = retorno
      numero.classList.remove("erro")
        numero.classList.add("ok")
    })
    
    .catch((retorno) => {
      numero.innerHTML = retorno
      numero.classList.remove("ok")
      numero.classList.add("erro")
    })
})

const promessa = () => {
  let promise = new Promise((resolve, reject) => {
    let resultado = true
    let tempo = 3000
  
    setTimeout(() => {
      if(resultado){
        resolve("Deu tudo certo")
      } else{
        reject("Deu tudo errado")
      }
    }, tempo)
  })
  return promise
  
}

numero.innerHTML = "Esperando."