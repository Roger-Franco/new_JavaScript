// Prototype => Quando precisar adicionar membros (propriedades/métodos) ao objeto depois que a classe já tiver sido instanciada

const Nave = function (energia) {
  this.energia = energia
  this.disparos = 100
}

const n1 = new Nave()

Nave.prototype.vidas = 3

Nave.prototype.disparar = function(){
  if(this.disparos > 0) {
    this.disparos--
  }
}

n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()

console.log(Nave)
console.log(n1)
console.log(n1.vidas)
console.log(n1.disparos)