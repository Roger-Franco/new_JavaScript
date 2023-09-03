const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelectorAll("#c1_2")
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "reactNative"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btnRemoverCurso = document.getElementById("btnRemoverCurso")

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

const radioSelecionado = () => {
  const todosRadios = [...document.querySelectorAll('input[type=radio]')]
  let radioSelecionado = todosRadios.filter((el, ind, arr) => {
    return el.checked
  })
  return radioSelecionado[0]
}


btnCursoSelecionado.addEventListener('click', (e) => {
  const radio_selecionado = radioSelecionado()
  // const cursoSelecionado = radioSelecionado.parentNode.parentNode.firstChild.textContent // pegando as palavras
  try {
    const cursoSelecionado = radio_selecionado.parentNode.previousSibling.textContent
    alert('curso selecionado ' + cursoSelecionado)
  } catch (error) {
    alert('Selecione um curso.' + error)
  }
  // if(radio_selecionado !== undefined) {
  //   const cursoSelecionado = radio_selecionado.parentNode.previousSibling.textContent
  //   alert('curso selecionado ' + cursoSelecionado)
  // } else {
  //   alert('Selecione um curso.')
  // } // Esse tambem daria certo!
  // console.log(cursoSelecionado)
  // console.log(radioSelecionado)
  // console.log(todosRadios)
})

btnRemoverCurso.addEventListener('click', (e) => {
  const radio_selecionado = radioSelecionado()
  
  if(radio_selecionado !== undefined) {
    const cursoSelecionado = radio_selecionado.parentNode.parentNode
  // console.log(cursoSelecionado)
  cursoSelecionado.remove()
  } else {
    alert('Selecione um curso.')
  } // Poderia ser com try & catch
  
})

// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling
