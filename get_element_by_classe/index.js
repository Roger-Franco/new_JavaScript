const elementos_divs = [...document.getElementsByTagName('div')]
const elementos = [...document.getElementsByClassName('curso')]
const elementos_c1 = [...document.getElementsByClassName('c1')]
const elementos_c2 = [...document.getElementsByClassName('c2')]
const elementos_especial = document.getElementsByClassName('curso')[3]

const query_elementos_divs = document.querySelectorAll('div,p')
const query_elementos_ps = document.querySelectorAll('p')
const query_elementos_ps_dentro_divs = document.querySelectorAll('div > p')
const query_elementos_divs_class = document.querySelectorAll('div[class]')
// const query_elementos_divs_class = document.querySelectorAll('div > p')
const query_elementos_curso = document.querySelectorAll('.curso')
const query_elementos_c2 = document.querySelector('#c2')

console.log(query_elementos_ps_dentro_divs)
console.log(query_elementos_ps)
// console.log(query_elementos_divs)
// console.log(query_elementos_curso)
// console.log(query_elementos_c2)
// console.log(elementos_c1)
// console.log(elementos_c2)
// console.log(elementos_especial)

// elementos_c2.map((el) => {
//   el.classList.add("destaque")
// })