
const data = new Date()
const data1 = new Date()
const data2 = new Date(data1.setHours(5))
const data3 = data2.setHours(6)
const data4 = new Date(data3)


console.log(data)
console.log(data2)
console.log(data3)
console.log(data4, 'data4')
console.log(data.getHours())
console.log(data.toDateString())
console.log(data.toString())
console.log(data.toLocaleString())
console.log(Date.now()) // Timestamp




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