const p_array = document.querySelector('#array')
const btnReduzir = document.querySelector('#btnReduzir')
const resultado = document.querySelector('#resultado')

const elementos_array = [1, 2, 3, 4, 5]

let prev = []
let current = []
let dobro = []

p_array.innerHTML = "["+elementos_array+"]"

btnReduzir.addEventListener('click', (e) => {
  dobro.push(elementos_array[0] * 2)
  resultado.innerHTML = elementos_array.reduce((anterior, atual, posicao, array) => {
    prev.push(anterior)
    current.push(atual)
    dobro.push(atual * 2)
    return atual + anterior
  })
  resultado.innerHTML+= "<br/> Anterior " + prev + "<br/> Atual " + current + "<br/> Dobro " + dobro
  console.log(prev)
  console.log(current)
})
