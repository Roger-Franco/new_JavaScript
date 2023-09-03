const objetos = document.getElementById('objetos')


const computador = {
  // cpu: 'i9',
  // ram: '64gb',
  // hd: '2tb',
  cpu: '',
  ram: '',
  hd: '',
  info: function() {
    console.log(`CPU: ${computador.cpu}`)
    console.log(`CPU: ${this.cpu}`)
    console.log(`RAM: ${this.ram}`)
    console.log(`HD: ${this.hd}`)
    console.log(`HD: ${computador.hd}`)
  }
}
// computador["monitor"] = '20pol'
// computador.placaVideo = 'rtx'
// console.log(computador)
delete(computador.cpu)
console.log(computador)

const c1 = Object.assign({}, computador)
c1.info()
console.log(c1)

const c2 = Object.create(computador)
c2.cpu = 'i9'
c2.ram = '32gb'
c2.hd = '2tb'
c2.info()
console.log(c2)


const o1 = {obj1: '1'}
const o2 = {obj2: '2'}
const o3 = {obj3: '3'}
const o4 = Object.assign(o1, o2, o3)
// console.log(o4)

const computadores = [
  {
    cpu: 'i9',
    ram: '64gb',
    hd: '4tb',
  },
  {
    cpu: 'i7',
    ram: '32gb',
    hd: '2tb',
  },
  {
    cpu: 'i5',
    ram: '16gb',
    hd: '1tb',
  },
]

computadores.forEach(element => {
  const div = document.createElement("div")
  div.innerHTML = element.cpu + '<br/>' + element.ram + '<br/>' + element.hd
  div.setAttribute('class', 'computador')
  objetos.appendChild(div)
  // objetos.innerHTML += element.cpu
});

// computador.info()
// console.log(computador)
// objetos.innerHTML = JSON.stringify(computador)