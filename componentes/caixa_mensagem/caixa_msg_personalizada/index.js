/* Usando o construtor para setar os parametros */
// const config = {
//     titulo: "Teste",
//     texto: "Curso de Javascript. Criando caixa de mensagem personalizada",
//     cor: "#48f",
// }
// const config2 = {
//     titulo: "Teste2",
//     texto: "Curso de Javascript 2. Criando caixa de mensagem personalizada",
//     cor: "#48f",
// }
// const config3 = {
//     titulo: "Teste3",
//     texto: "Curso de Javascript 3. Criando caixa de mensagem personalizada",
//     cor: "#48f",
// }

// const cxmsg = new Cxmsg(config)
// const cxmsg2 = new Cxmsg(config2)
// const cxmsg3 = new Cxmsg(config3)


// const btn_mostrar_cxmsg = document.querySelector('#btn_mostrarcxmsg')
// const btn_mostrar_cxmsg2 = document.querySelector('#btn_mostrarcxmsg2')
// const btn_mostrar_cxmsg3 = document.querySelector('#btn_mostrarcxmsg3')

// btn_mostrar_cxmsg.addEventListener('click', () => {
//   cxmsg.mostrar()
// })

// btn_mostrar_cxmsg2.addEventListener('click', () => {
//   cxmsg2.mostrar()
// })

// btn_mostrar_cxmsg3.addEventListener('click', () => {
//   cxmsg3.mostrar()
// })


  /* Sem usar o construtor para setar os parametros */

//   const config = {
//     cor: "#48f",
// }

// const cxmsg = new Cxmsg(config)


// const btn_mostrar_cxmsg = document.querySelector('#btn_mostrarcxmsg')
// const btn_mostrar_cxmsg2 = document.querySelector('#btn_mostrarcxmsg2')
// const btn_mostrar_cxmsg3 = document.querySelector('#btn_mostrarcxmsg3')

// btn_mostrar_cxmsg.addEventListener('click', () => {
//   cxmsg.mostrar('Roger Franco', 'Curso de Javascript')
// })

// btn_mostrar_cxmsg2.addEventListener('click', () => {
//   cxmsg.mostrar('Roger Franco2', 'Curso de Javascript2')
// })

// btn_mostrar_cxmsg3.addEventListener('click', () => {
//   cxmsg.mostrar('Roger Franco3', 'Curso de Javascript3')
// })

/* Usando módulos */
import { Cxmsg } from './cxmsg.js'

const config = {
  cor: "#48f",
}
Cxmsg.config(config)


// const cxmsg = new Cxmsg(config)


const btn_mostrar_cxmsg = document.querySelector('#btn_mostrarcxmsg')
const btn_mostrar_cxmsg2 = document.querySelector('#btn_mostrarcxmsg2')
const btn_mostrar_cxmsg3 = document.querySelector('#btn_mostrarcxmsg3')

btn_mostrar_cxmsg.addEventListener('click', () => {
Cxmsg.mostrar('Roger Franco', 'Curso de Javascript')
})

btn_mostrar_cxmsg2.addEventListener('click', () => {
Cxmsg.mostrar('Roger Franco2', 'Curso de Javascript2')
})

btn_mostrar_cxmsg3.addEventListener('click', () => {
Cxmsg.mostrar('Roger Franco3', 'Curso de Javascript3')
})