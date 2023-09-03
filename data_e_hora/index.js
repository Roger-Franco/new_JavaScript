const div_data = document.getElementById("div_data")
const div_relogio = document.getElementById("div_relogio")

const data = new Date()


console.log(data)
console.log(data.toDateString())
console.log(Date.now()) // Timestamp

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