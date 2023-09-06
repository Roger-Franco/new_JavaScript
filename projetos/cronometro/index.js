/* =============== Aula 1 =============== */
// const timer = document.getElementById('timer')

// const tmpInicial = Date.now()

// // console.log(tmpInicial)

// const contador = () => {
//   const tmpAtual = Date.now()
//   let cont = tmpAtual - tmpInicial
//   let segundos =Math.floor(cont / 1000)
//   console.log(tmpAtual)
//   console.log(cont)
//   console.log(segundos)
// }

// // contador()
// setInterval(contador, 3000)
/* =============== Aula 2 =============== */

// const timer = document.getElementById('timer')

// const tmpInicial = Date.now()

// // console.log(tmpInicial)

// const contador = () => {
//   const tmpAtual = Date.now()
//   let cont = tmpAtual - tmpInicial
//   let segundos =cont / 1000
//   // console.log(tmpAtual)
//   // console.log(cont)
//   // console.log(segundos)
//   timer.innerHTML = converter(segundos)
// }

// const converter = (seg) => {
//   const hora = Math.floor(seg / 3600)
//   const resto = seg % 3600
//   const minuto = Math.floor(resto / 60)
//   const segundo = Math.floor(resto % 60)
//   const form = (hora < 10 ? "0" + hora : hora) + ":" + (minuto < 10 ? "0" + minuto : minuto) + ":" + (segundo < 10 ? "0" + segundo : segundo) 
//   return form
// }

// // contador()
// setInterval(contador, 1000)

/* =============== Aula 3 =============== */

// const timer = document.getElementById('timer')
// const btn_iniciar = document.getElementById('btn_iniciar')
// const btn_parar = document.getElementById('btn_parar')
// const btn_zerar = document.getElementById('btn_zerar')

// let intervalo = null
// let tmpInicial = null


// const contador = () => {
//   const tmpAtual = Date.now()
//   let cont = tmpAtual - tmpInicial
//   let segundos =cont / 1000
//   timer.innerHTML = converter(segundos)
// }

// const converter = (seg) => {
//   const hora = Math.floor(seg / 3600)
//   const resto = seg % 3600
//   const minuto = Math.floor(resto / 60)
//   const segundo = Math.floor(resto % 60)
//   const tempoFormatado = (hora < 10 ? "0" + hora : hora) + ":" + (minuto < 10 ? "0" + minuto : minuto) + ":" + (segundo < 10 ? "0" + segundo : segundo) 
//   return tempoFormatado
// }

// // setInterval(contador, 1000)

// btn_iniciar.addEventListener('click', (evt) => {
//   tmpInicial = Date.now()
//   intervalo = setInterval(contador, 1000)
// })

// btn_parar.addEventListener('click', (evt) => {
//   clearInterval(intervalo)
// })

// btn_zerar.addEventListener('click', (evt) => {
//   tmpInicial = Date.now()
//   timer.innerHTML = "00:00:00"
//   clearInterval(intervalo)
// })

/* =============== Aula 3 / Cronômetro com parciais=============== */

import { Cxmsg } from '../../componentes/caixa_mensagem/caixa_msg_personalizada/cxmsg.js'

const timer = document.getElementById('timer')
const btn_iniciar = document.getElementById('btn_iniciar')
const btn_parcial = document.getElementById('btn_parcial')
const btn_parar = document.getElementById('btn_parar')
const btn_zerar = document.getElementById('btn_zerar')
const parciaisRegistradas = document.getElementById('parciaisRegistradas')

const config = {
  cor: "#f00",
}
Cxmsg.config(config) // Essas inclus˜oes relacionadas a caixa de msg se refere a um novo exercício do futuro

let intervalo = null
let tmpInicial = null


const contador = () => {
  const tmpAtual = Date.now()
  let cont = tmpAtual - tmpInicial
  let segundos =cont / 1000
  timer.innerHTML = converter(segundos)
}

const converter = (seg) => {
  const hora = Math.floor(seg / 3600)
  const resto = seg % 3600
  const minuto = Math.floor(resto / 60)
  const segundo = Math.floor(resto % 60)
  const tempoFormatado = (hora < 10 ? "0" + hora : hora) + ":" + (minuto < 10 ? "0" + minuto : minuto) + ":" + (segundo < 10 ? "0" + segundo : segundo) 
  return tempoFormatado
}

btn_iniciar.addEventListener('click', (evt) => {
  tmpInicial = Date.now()
  intervalo = setInterval(contador, 1000)
})

btn_parcial.addEventListener('click', (evt) => {
  // const p = document.createElement('p')
  // parciaisRegistradas.appendChild(p)
  let parcial = timer.innerHTML
  parciaisRegistradas.innerHTML += '<div>' + parcial + '</div>'
})

btn_parar.addEventListener('click', (evt) => {
  clearInterval(intervalo)
})

btn_zerar.addEventListener('click', (evt) => {
  tmpInicial = Date.now()
  timer.innerHTML = "00:00:00"
  clearInterval(intervalo)
  parciaisRegistradas.innerHTML = ""

  Cxmsg.mostrar("Cronômetro", "O cronômetro foi zerado")
})