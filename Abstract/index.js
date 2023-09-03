// Classe abstract não pode ser instanciada, apenas extendida

class CarroPadrao{
  constructor(){
    if(this.constructor === CarroPadrao) {
      throw new TypeError("Esta classe não pode ser instanciada!")
    }
    if(this.ligar === undefined) {
      throw new TypeError("É obrigatório implementar o método ligar")
    }
    if(this.desligar === undefined) {
      throw new TypeError("É obrigatório implementar o método desligar")
    }
    this.rodas = 4
    this.portas = 4
    this.ligado = false
  }
}

class Carro extends CarroPadrao{
  constructor(tipo, estagioTurbo){
    super()
    this.turbo = new Turbo(estagioTurbo)
    if(tipo == 1) {
      this.velMax = 120
      this.nome = "normal"
    }else if(tipo == 2) {
      this.velMax = 160
      this.nome = "esportivo"
    } else if(tipo == 3) {
      this.velMax = 200
      this.nome = "super esportivo"
    }
    this.velMax += this.turbo.potencia
  }
  info() {
    console.log(this.nome)
    console.log(this.velMax)
    console.log(this.turbo)
    console.log(this.rodas)
    console.log(this.portas)
    console.log(this.ligado)
    console.log('----------------------')
  }
  ligar() {
    this.ligado = true
  }
  desligar() {
    this.ligado = false
  }
}

class Turbo{
  constructor(estagio){
    if(estagio == 0) {
      this.potencia = 0
    } else if (estagio == 1) {
      this.potencia = 50
    } else if (estagio == 2) {
      this.potencia = 75
    } else if (estagio == 3) {
      this.potencia = 100
    }
  }
}

class CarroEspec extends Carro{
  constructor(estagioTurbo) {
    super(3, estagioTurbo)
    this.nome = "Carro espec"
  }
}

class CarroEspecial extends Carro{
  constructor(estagioTurbo) {
    super(4, estagioTurbo)
    this.tipoInfo = 1
    // this.tipoInfo = 2
    this.velMax = 300 + this.turbo.potencia
    this.nome = "Carro especial"
  }
  info(){ // Esse info sobrepões o da classe Carro, mas caso não queira esse comportamento, é só chamar o super.info()
    // super.info()
    if(this.tipoInfo == 1) {
      super.info()
    } else {
      console.log(`Nome:${this.nome}`)
      console.log(`Vel.Max:${this.velMax}`)
      console.log(`Turbo:${this.turbo.potencia}`)
      console.log('----------------------')
    }
  }
}

const c1 = new Carro(1, 0)
const c2 = new Carro(1, 1)
const c3 = new CarroEspec(3)
const c4 = new CarroEspecial(3)// nesse caso não preciso passar o tipo, pois ele já está no super;
// const c5 = new CarroPadrao()

c1.ligar()
c1.info()
c2.info()
c3.info()
c4.info()
// c5.info()