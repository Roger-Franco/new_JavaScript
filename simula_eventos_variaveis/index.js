const tmp = document.getElementById('tmp')
const nvl = document.getElementById('nvl')
const prs = document.getElementById('prs')

// quem esta alterando os valores no DOM não é um evento, mas o objeto dados, com a função set e get; (Semelhante ao setState do react)
let dados = {
  _temperatura: 0,
  _pressao: 0,
  _nivel: 0,
  set valores(val){
    this._temperatura = val.temperatura
    this._pressao = val.pressao
    this._nivel = val.nivel

    tmp.innerHTML = this._temperatura
    nvl.innerHTML = this._pressao
    prs.innerHTML = this._nivel
  },
  get valores(){
    return [this._temperatura, this._pressao, this._nivel]
  }
}


const buscarDados = () => {

  const endpoint = 'https://cursojavascript.rogerfranco.repl.co/'
  fetch(endpoint)
  // .then(res => res.text())
  .then(res => res.json())
  .then(res => {
    // console.log(res)
    // dados._temperatura = res.temperatura
    // dados._pressao = res.nivel
    // dados._nivel = res.pressao
    dados.valores = res
  })
}

let intervado = setInterval(buscarDados, 1000)

console.log(dados.valores)
