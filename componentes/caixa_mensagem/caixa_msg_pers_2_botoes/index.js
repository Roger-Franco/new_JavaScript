
/* Usando módulos */
import { Cxmsg } from './cxmsg.js'

const config = {
  cor: "#48f",
  tipo: "sn", // sn => Sim ou Não Pode ser: sim / não, ok / cancela
  textos: ["SIM", "NÃO"],
  comando_sn: () => {}
}
// Cxmsg.config(config)
// const cxmsg = new Cxmsg(config)

const fsim = () => {
  console.log('Botão SIM pressionado!')
}


const btn_mostrar_cxmsg = document.querySelector('#btn_mostrarcxmsg')
const btn_mostrar_cxmsg2 = document.querySelector('#btn_mostrarcxmsg2')
const btn_mostrar_cxmsg3 = document.querySelector('#btn_mostrarcxmsg3')


btn_mostrar_cxmsg.addEventListener('click', () => {
  config.tipo = 'ok'
Cxmsg.mostrar(config, 'Roger Franco1', 'Curso de Javascript1')
})

btn_mostrar_cxmsg2.addEventListener('click', () => {
  config.tipo = 'sn'
  config.comando_sn = () => {fsim()}
  config.textos = ["SIM", "NÃO"]
Cxmsg.mostrar(config, 'Roger Franco2', 'Curso de Javascript2')
})

btn_mostrar_cxmsg3.addEventListener('click', () => {
  config.tipo = 'sn'
  config.textos = ["OK", "CANCELA"]
  config.comando_sn = () => {}
Cxmsg.mostrar(config, 'Roger Franco3', 'Curso de Javascript3')
})