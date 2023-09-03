const div_data = document.getElementById("div_data")
const div_relogio = document.getElementById("div_relogio")
const btn_ativar = document.getElementById("btn_ativar")
const btn_parar = document.getElementById("btn_parar")
const tmp_alarme = document.getElementById("tmp_alarme")
const hora_alarme = document.getElementById("hora_alarme")
const timer = document.getElementById("timer")

const som_alarme = new Audio('Alarm.mp3')
som_alarme.loop = -1

let ts_atual = null
let ts_alarme = null
let alarme_ativado = false
let alarme_tocando = false

btn_ativar.addEventListener('click', () => {
  ts_atual = Date.now()
  ts_alarme = ts_atual + (tmp_alarme.value * 1000)
  alarme_ativado = true
  const dt_alarme = new Date(ts_alarme)
  hora_alarme.innerHTML = "Hora do alarme:" + dt_alarme.getHours() + ":" + dt_alarme.getMinutes() + ":" + dt_alarme.getSeconds()
})

btn_parar.addEventListener('click', () => {
  let alarme_ativado = false
  let alarme_tocando = false
  hora_alarme.innerHTML = "Hora do alarme:"
  tmp_alarme.value = 0
  timer.classList.remove("alarme")
  som_alarme.pause()
  som_alarme.currentTime = 0
})


const data = new Date()


console.log(data)
console.log(data.toDateString())
console.log(Date.now(), 'Timestamp') // Timestamp

let dia = data.getDate()
dia = dia < 10 ? "0" + dia : dia
let mes = data.getMonth() + 1
mes = mes < 10 ? "0" + mes : mes
let ano = data.getFullYear()
const data_resumida = dia + '/' + mes + '/' + ano
console.log(data_resumida)
div_data.innerHTML = data_resumida

const relogio = () => {
  const data = new Date()
  let horas = data.getHours()
  horas = horas < 10 ? "0" + horas : horas
  let minutos = data.getMinutes()
  minutos = minutos < 10 ? "0" + minutos : minutos
  let segundos = data.getSeconds()
  segundos = segundos < 10 ? "0" + segundos : segundos
  const hora_completa = horas + ':' + minutos + ':' + segundos
  div_relogio.innerHTML = hora_completa

  if(alarme_ativado && !alarme_tocando){
    if(data.getTime() >= ts_alarme){
      alarme_tocando = true
      som_alarme.play()
      timer.classList.add("alarme")
    }
  }
}
// setInterval(() => {
//   relogio()
// }, 1000);

const interval = setInterval(relogio, 1000)

// getDate() = Dia do mês
// getDay() = Dia da Semana (número)
// getFullYear() = Ano com 4 dígitos
// getHours() = Horas
// getMilliseconds() = milisegundos
// getMinutes() = Minutos
// getMonth() = Mês
// getSeconds() = Segundos
// getTime() = Timestamp (milisegundos desde 1 de janeiro de 1970, 00:00:00 UTC)
// Date.now() = Timestamp (milisegundos desde 1 de janeiro de 1970, 00:00:00 UTC)
// getTimeZoneOffset() = Timezone da localidade
// setDate() = Define um dia do mês para a data
// setMonth() = define um mês para a data
// setFullYear() = Define um ano para a data
// setHours() = Define horas
// setminutes() = Define minutos
// setSeconds() = Define Segundos
// setMilliseconds() = Define milisegundos
// toDateString() = Retorna somente a data
