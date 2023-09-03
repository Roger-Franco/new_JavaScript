const p_array = document.querySelector('#array')
const btnVerificarar = document.querySelector('#btnVerificar')
const resultado = document.querySelector('#resultado')

// const elementos_array = [30, 25, 5, 8, 2, 6, 7, 9, 1]
const elementos_array = [20, 18, 25, 28, 32, 36, 47, 49, 51]
// const elementos_array = ["Javascript", "React", "Node"]

p_array.innerHTML = "["+elementos_array+"]"

btnVerificarar.addEventListener('click', (e) => {
  const retorno = elementos_array.every((el, i) => {
    if(el < 18) {
      resultado.innerHTML = "Array não conforme na posição " + (i + 1)
    }
    return el >= 18
  })

  if(retorno){
    resultado.innerHTML = "Array ok!"
  }
  console.log(retorno)
})
