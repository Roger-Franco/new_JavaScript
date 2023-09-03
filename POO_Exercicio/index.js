const radio_f_tipoMilitar = document.querySelector('#f_tipoMilitar')
const radio_f_tipoNormal = document.querySelector('#f_tipoNormal')
const f_blindagem = document.querySelector('#f_blindagem')
const f_municao = document.querySelector('#f_municao')
const f_nome = document.querySelector('#f_nome')
const f_portas = document.querySelector('#f_portas')
const carros = document.querySelector('#carros')
const btn_addCarro = document.querySelector('#btn_addCarro')

let array_carros = []

const removerCarro = (CarroARemover) => {
  array_carros = array_carros.filter((el) => {
    console.log(el.nome, 'el.nome')
    console.log(CarroARemover, 'CarroARemover')
    return el.nome !== CarroARemover
  })
}

radio_f_tipoMilitar.addEventListener('click', (e) => {
  f_nome.value = ''
  f_portas.value = 0
  f_blindagem.value = 0
  f_municao.value = 0
  f_blindagem.removeAttribute('disabled')
  f_municao.removeAttribute('disabled')
})

radio_f_tipoNormal.addEventListener('click', (e) => {
  f_nome.value = ''
  f_portas.value = 0
  f_blindagem.value = 0
  f_municao.value = 0
  f_blindagem.setAttribute('disabled', 'disabled')
  f_municao.setAttribute('disabled', 'disabled')
})

const gerenciarExibircaoCarros = () => {
  carros.innerHTML = ''
  array_carros.forEach((c) => {
    const div = document.createElement('div')
    const btn = document.createElement('button')
    btn.innerHTML = 'Remover'
    btn.addEventListener('click', (event) => {
      // const quemRemover = btn.parentElement.dataset.nome
      const quemRemover = event.target.parentNode.dataset.nome
      removerCarro(quemRemover)
      gerenciarExibircaoCarros()
      // console.log(btn.parentElement.dataset.nome)
      // console.log(event.target.parentNode.dataset.nome, 'parentNode')
      // return array_carros.filter((car) => {
      //     console.log(c.nome, car.nome, 'filter')
      //     car.nome !== c.nome
      //   })
      })
    div.setAttribute('class', 'carro')
    div.setAttribute('data-nome', c.nome)
    div.innerHTML = `Nome: ${c.nome} <br/>`
    div.innerHTML += `Portas: ${c.portas} <br/>`
    div.innerHTML += `Cor: ${c.cor} <br/>`
    div.innerHTML += `Blindagem: ${c.blindagem} <br/>`
    div.innerHTML += `Munição: ${c.municao} <br/>`
    div.appendChild(btn)
    carros.appendChild(div)
  })
}

btn_addCarro.addEventListener('click', (e) => {
  if(radio_f_tipoNormal.checked) {
    const c = new Carro(f_nome.value, f_portas.value)
    array_carros.push(c)
  } else {
    const c = new Militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)
    array_carros.push(c)
  }
  gerenciarExibircaoCarros()
})



class Carro{ // Classe Pai / Base
  constructor(nome, portas){
    this.nome = nome
    this.portas = portas
    this.ligado = false
    this.vel = 0
    this.cor = undefined
  }
  
  ligar = function(){
    this.ligado = true
  }

  desligar = function(){
    this.ligado = false
  }

  setCor= function(cor){
    this.cor = cor
  }

}

class Militar extends Carro { // Classe Filho / Herança
  constructor(nome, portas, blindagem, municao){
    super(nome, portas) // O super é para invocar algo especifico da classe pai
    this.blindagem = blindagem
    this.municao = municao
    this.setCor("verde") // Determina que todos os veículos militares inicialize na cor verde, mas pode mudar depois;
  }
  atirar = function(){
    if(this.municao > 0){
      this.municao --
    }
  }
}

// class utilitario extends Carro { // Classe Filho / Herança
//   constructor(nome, portas, lugares){
//     super(nome, portas) // O super é para invocar algo especifico da classe pai
//     this.lugares = lugares
//     this.setCor("verde") // Determina que todos os veículos militares inicialize na cor verde, mas pode mudar depois;
//   }
// }

const c1 = new Carro("Normal", 4)
c1.ligar()
c1.setCor('Cinza')

const c2 = new Militar("Lutador", 1, 100, 50)
c2.setCor('Azul')
c2.atirar('Azul')
c2.atirar('Azul')
c2.atirar('Azul')
c2.atirar('Azul')

// console.log(c1)
// console.log(`Nome: ${c1.nome}`)
// console.log(`Portas: ${c1.portas}`)
// console.log(`Ligado: ${(c1.ligado ? "Sim" : 'Não')}`)
// console.log(`Velocidade: ${c1.vel}`)
// console.log(`Cor: ${c1.cor}`)
// console.log('---------------------------')

// console.log(c2)
// console.log(`Nome: ${c2.nome}`)
// console.log(`Portas: ${c2.portas}`)
// console.log(`Ligado: ${(c2.ligado ? "Sim" : 'Não')}`)
// console.log(`Velocidade: ${c2.vel}`)
// console.log(`Blindagem: ${c2.blindagem}`)
// console.log(`Munição: ${c2.municao}`)
// console.log(`Cor: ${c2.cor}`)
// console.log('---------------------------')