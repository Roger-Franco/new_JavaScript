const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelectorAll("#c1_2")
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "reactNative"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btnRemoverCurso = document.getElementById("btnRemoverCurso")
const btnAdicionarNovoCursoAntes = document.getElementById("btnAdicionarNovoCursoAntes")
const btnAdicionarNovoCursoDepois = document.getElementById("btnAdicionarNovoCursoDepois")
const nomeCurso = document.getElementById("nomeCurso")

let indice = 0

const tirarSelecao = () => {
  const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
  cursosSelecionados.map((el) => {
    el.classList.remove("selecionado")
  })
}

const criarNovoCurso = (curso) => {
  const novoElemento = document.createElement("div")
  novoElemento.setAttribute("id", "c"+indice)
  novoElemento.setAttribute("class", "curso c1")
  novoElemento.innerHTML = curso
  novoElemento.addEventListener("click", (e) => {
    tirarSelecao()
    e.target.classList.toggle("selecionado")
  })
  return novoElemento
}

cursos.map((el, chave) => {
  const novoElemento = criarNovoCurso(el)
  caixaCursos.appendChild(novoElemento)
  indice ++
})

const cursoSelecionado = () => {
  const cursoSelecionados = [...document.querySelectorAll(".selecionado")]
  return cursoSelecionados[0]
}


btnCursoSelecionado.addEventListener('click', (e) => {
  try {
    alert('curso selecionado ' + cursoSelecionado().innerHTML)
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
  curso_selecionado = cursoSelecionado()
  if(curso_selecionado !== undefined) {
    curso_selecionado.remove()
  } else {
    alert('Selecione um curso.')
  } // Poderia ser com try & catch
  
})

btnAdicionarNovoCursoAntes.addEventListener('click', (e) => {
  try {
      if(nomeCurso.value !== '') {
        const novoCurso = criarNovoCurso(nomeCurso.value)
      caixaCursos.insertBefore(novoCurso, cursoSelecionado())
    } else {
      alert('Digite o nome do curso.')
    }
  } catch (error) {
    alert('Selecione um curso.' + error)
  }
})

btnAdicionarNovoCursoDepois.addEventListener('click', (e) => {
  try {
    if(nomeCurso.value !== '') {
    const novoCurso = criarNovoCurso(nomeCurso.value)

    caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling)
  } else {
    alert('Digite o nome do curso.')
  }
  } catch (error) {
    alert('Selecione um curso.' + error)
  }
})

// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling
