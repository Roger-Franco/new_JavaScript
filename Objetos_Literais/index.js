const Pessoa = {
  nome: '',
  idade: '',
  getNome: function(){
    return this.nome
  },
  getIdade: function(){
    return this.idade
  },
  setNome: function(nome){
    this.nome = nome
  },
  setIdade: function(idade){
    this.idade = idade
  }
}

const p2 = Pessoa
const p3 = Pessoa

p3.nome = "Thuthu"
p2["nome"] = "Arthur"
p2.setNome('Frank')

// console.log(Pessoa.nome)
// console.log(p2.nome)
// console.log(p2.getNome())
// console.log(p3.nome)
const pessoas = []
const btn_add = document.querySelector('#btn_add')
const res = document.querySelector('.res')

function addPessoa () {
  const div = document.createElement('div')
  div.setAttribute('class', 'pessoa')
  res.appendChild(div)
  div.innerHTML = `Nome: ${p2.getNome()} <br/> Idade: ${p2.getIdade()}`
  // div.innerHTML = `pessoas`


}

btn_add.addEventListener('click', (e) => {
  const inputNome = document.querySelector('#f_nome')
  const inputIdade = document.querySelector('#f_idade')
  p2.setNome(inputNome.value)
  p2.setIdade(inputIdade.value)
  const p = {nome: inputNome.value, idade: inputIdade.value}
  // pessoas.push(p)
  // console.log(inputNome.value)
  // console.log(p2.getNome(inputNome.value))
  // console.log(pessoas)
  inputNome.value = ''
  inputIdade.value = ''
  inputNome.focus()
  addPessoa()
})