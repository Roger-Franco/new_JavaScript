class Npc {
  static alerta = false // com o static voce nao precisa estanciar para depois mudar um a um alguma propriedade. Voce consegue mudar tudo de uma vez sem estanciar. Apenas chamar a classe e alterar a proprieade;
  constructor(energia) {
    this.energia = energia
    // this.alerta = false
  }
  info = function(){
    console.log(`Energia: ${this.energia}`)
    // console.log(`Alerta: ${this.alerta ? "Sim" : "Não"}`)
    console.log(`Alerta: ${Npc.alerta ? "Sim" : "Não"}`)
    console.log('---------------------------')
  }
  static alertar = function() {
    Npc.alerta = true
  }
}

const npc1 = new Npc(100)
const npc2 = new Npc(80)
const npc3 = new Npc(30)

// Npc.alerta = true
// npc1.alerta = true
Npc.alertar()

npc1.info()
npc2.info()
npc3.info()