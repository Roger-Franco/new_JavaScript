class Carro{
  canal = "Frank cursos"
  constructor(pnome, ptipo){
    this.nome = pnome
    this.canal = 'YouTube'
    if(ptipo == 1){
      this.tipo = "Esportivo"
      this.velmax = 300
    } else if(ptipo == 2){
      this.tipo = "Utilitário"
      this.velmax = 100
    } else if(ptipo == 3){
      this.tipo = "Passeio"
      this.velmax = 160
    } else {
      this.tipo = "Militar"
      this.velmax = 180
    }
  }
  getNome(){
    return this.nome
  }
  getTipo(){
    return this.tipo
  }
  getVelMax(){
    return this.velmax
  }
  getInfo(){
    return [this.nome, this.tipo, this.velmax]
  }

  setNome(nome){
    this.nome = nome
  }
  setTipo(tipo){
    this.tipo = tipo
  }
  setVelMax(velmax){
    this.velmax = velmax
  }
  setInfo(){
    return [this.nome, this.tipo, this.velmax]
  }
  info(){
    console.log("Canal " + this.canal)
    console.log("Nome " + this.nome)
    console.log("Tipo " + this.tipo)
    console.log("V.Max " + this.velmax)
  }
}

let c1 = new Carro("Rapidão", 1)
let c2 = new Carro("Super Luxo", 3)
let c3 = new Carro("Bombadão", 4)
let c4 = new Carro("Carrego tudo", 2)

// console.log(c1.nome)
// console.log(c1.tipo)
// console.log(c1.velmax)
// console.log(c2.nome)
// console.log(c3.nome)
// console.log(c4.nome)

c1.setNome('Mustang')
c1.setTipo("Super Esportivo")
c1.setVelMax(350)
c1.info()
// console.log(c1.getNome())
// console.log(c1.getInfo())
// console.log(c1.getInfo()[0])