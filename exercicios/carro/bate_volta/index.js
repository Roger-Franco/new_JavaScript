const carro = document.getElementById('carro')
const btn_direita = document.getElementById('btn_direita')
const btn_parar = document.getElementById('btn_parar')


const init = () => {
  // carro.style.position = 'relative'
  // carro.style.left = '0px'
  carro.style = "position: relative; left: 0px; width: 100px"
  tamMax = window.innerWidth - parseInt(carro.style.width) // dessa forma o carro vai parar realmente na borda direita
}

let anima = null
let tamMax = null

const move = (direcao) => {
  if(direcao > 0) {
      if(parseInt(carro.style.left) <= tamMax ) {
        carro.style.left = parseInt(carro.style.left) + (10 * direcao) + 'px'
        anima = setTimeout(move, 20, direcao) // Aqui esta a recursividade, ele vai chamar a função move novamente;
      } else {
        direcao = -1
        anima = setTimeout(move, 20, direcao)
      }
    }else if(direcao < 0) {
      if(parseInt(carro.style.left) >= 0 ) {
        carro.style.left = parseInt(carro.style.left) + (10 * direcao) + 'px'
        anima = setTimeout(move, 20, direcao) // Aqui esta a recursividade, ele vai chamar a função move novamente;
      }else {
        direcao = 1
        anima = setTimeout(move, 20, direcao)
      }
    }
}


btn_direita.addEventListener('click', () => {
  console.log(tamMax)
  clearTimeout(anima)
  move(1)
})

btn_parar.addEventListener('click', () => {
  clearTimeout(anima)
})

// window.onload = init
window.addEventListener('load', init())
window.addEventListener('resize', () => {
  tamMax = window.innerWidth - parseInt(carro.style.width)
})