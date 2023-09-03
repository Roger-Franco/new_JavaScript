class Login {
  static logado = null
  static matLogado = null
  static nomeLogado = null
  static acessoLogado = null
  static endpoint = 'https://login-javascript.rogerfranco.repl.co'

  // https://login-javascript.rogerfranco.repl.co/?matricula=123&senha=321

  static login = (mat, pas) => {
    this.endpoint += `?matricula=${mat}&senha=${pas}`
    fetch(this.endpoint)
    .then(res=> res.json())
    .then(res=> {
      if(res) {
        this.logado = true
        this.matLogado = mat
        this.nomeLogado = res.nome
        this.acessoLogado = res.acesso
        console.log(res)
      } else {
        console.log("Usuário não encontrado")
      }
    })
  }

}

export {Login}