const p_array = document.querySelector('#array')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const btnPesquisar = document.querySelector('#btnPesquisar')
const resultado = document.querySelector('#resultado')

// const elementos_array = [0, 15, 5, 8, 2, 6, 7, 9, 1]
const elementos_array = ["Javascript", "React", "Node"]

p_array.innerHTML = "["+elementos_array+"]"

btnPesquisar.addEventListener('click', (e) => {
  resultado.innerHTML = "Valor não encontrado"
  const retorno = elementos_array.find((el, i) => {
    if(el.toUpperCase() == txt_pesquisar.value.toUpperCase()) {
      resultado.innerHTML = "Valor encontrado: " + el + " na posição " + i
      return el
    }
  })
  console.log(retorno)
})
