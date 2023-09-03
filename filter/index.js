// const idades = [15, 21, 30, 17, 18, 44, 12, 50]
// const maior = idades.filter((idade) => {
//   return idade >= 18
// })
// const menor = idades.filter((idade) => {
//   return idade < 18
// })

// console.log(maior)
// console.log(menor)

const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelectorAll("#c1_2")
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "reactNative"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")

cursos.map((el, chave) => {
  const novoElemento = document.createElement("div")
  novoElemento.setAttribute("id", "c"+chave)
  novoElemento.setAttribute("class", "curso c1")
  novoElemento.innerHTML = el
  
  const comandos = document.createElement("div")
  comandos.setAttribute("class", "comandos")

  const rb = document.createElement("input")
  rb.setAttribute("type", "radio")
  rb.setAttribute("name", "rb_curso")


  comandos.appendChild(rb)

  novoElemento.appendChild(comandos)

  caixaCursos.appendChild(novoElemento)

})


btnCursoSelecionado.addEventListener('click', (e) => {
  const todosRadios = [...document.querySelectorAll('input[type=radio]')]
  let radioSelecionado = todosRadios.filter((el, ind, arr) => {
    return el.checked
  })
  radioSelecionado = radioSelecionado[0]
  // const cursoSelecionado = radioSelecionado.parentNode.parentNode.firstChild.textContent // pegando as palavras
  const cursoSelecionado = radioSelecionado.parentNode.previousSibling.textContent
  
  alert('curso selecionado ' + cursoSelecionado)
  // console.log(cursoSelecionado)
  // console.log(radioSelecionado)
  // console.log(todosRadios)
})

// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling




const array1 = [{ id: 1, aula: 1}, { id: 2, aula: 2}, { id: 3, aula: 3}]
const array2 = [ { id: 2, aula: 2}, { id: 3, aula: 3}]

const result = array1.filter((item) => item.id !== array2[0].id)
const result1 = array1.filter((item) => !array2.map((el) => el.id).includes(item.id))

console.log(array1)
console.log(array2)
console.log(array2.map((el) => el.id))
// console.log(array2[0].id)
console.log(result)
console.log(result1)