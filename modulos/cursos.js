// const cursos = ['javascript', 'HTML', 'CSS', 'Arduino', 'raspberry', 'C++', 'Python', 'Java', 'C#']
// const carros = ['Polo', 'T-cross', 'Golf', 'Onix', 'Cruze', 'Argo', 'Gol']

class Cursos {
  static cursos = ['javascript', 'HTML', 'CSS', 'Arduino', 'raspberry', 'C++', 'Python', 'Java', 'C#']
  constructor(){}
  
  static getTodosCursos = () =>{
    return this.cursos
  }

  static getCurso = (i_curso) =>{ // Com static voce pode usar os métodos sem precisar instanciar a classe
    return this.cursos[i_curso]
  }

  static addCurso = (novoCurso) =>{
    this.cursos.push(novoCurso)
  }

  static apagarCursos = () =>{
    return this.cursos = []
  }
}
export default Cursos