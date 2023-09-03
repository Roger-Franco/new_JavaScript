const carro = document.getElementById('carro')
const btn_esquerda = document.getElementById('btn_esquerda')
const btn_direita = document.getElementById('btn_direita')
const btn_parar = document.getElementById('btn_parar')

/* ======== Com setInterval =========== */

// const init = () => {
//   carro.style.position = 'relative'
//   carro.style.left = '0px'
//   // carro.style = "position: relative; left: 0px"
// }

// let anima = null

// const move = (direcao) => {
//   carro.style.left = parseInt(carro.style.left) + (10 * direcao) + 'px'
// }

// btn_esquerda.addEventListener('click', () => {
//   clearInterval(anima)
//   // carro.style.left = parseInt(carro.style.left) - 10 + 'px'
//   // move(-1) // clicando para cada movimento
//   anima = setInterval(move, 20, -1) // O argumento vem no final
// })

// btn_direita.addEventListener('click', () => {
//   clearInterval(anima)
//   // let pos = parseInt(carro.style.left)
//   // pos += 10
//   // console.log(pos)
//   // carro.style.left = `${pos}px`
//   // move(1) // clicando para cada movimento
//   anima = setInterval(move, 20, 1) // O argumento vem no final
// })

// btn_parar.addEventListener('click', () => {
//   clearInterval(anima)
// })

// window.onload = init
// window.addEventListener('load', init())


/* ======== Com setTimeout =========== */

// const init = () => {
//   carro.style.position = 'relative'
//   carro.style.left = '0px'
//   // carro.style = "position: relative; left: 0px"
// }

// let anima = null
// // A funçao setTimeout chama apenas uma vez, então precisaremos usar a recursividade para que a div continue andando na 
// // direção escolhida, sem precisar ficar apertando o botão;
// const move = (direcao) => {
//   carro.style.left = parseInt(carro.style.left) + (10 * direcao) + 'px'
//   anima = setTimeout(move, 20, direcao) // Aqui esta a recursividade, ele vai chamar a função move novamente;
// }

// btn_esquerda.addEventListener('click', () => {
//   clearTimeout(anima)
//   move(-1)
// })

// btn_direita.addEventListener('click', () => {
//   clearTimeout(anima)
//   move(1)
// })

// btn_parar.addEventListener('click', () => {
//   clearTimeout(anima)
// })

// window.onload = init
// // window.addEventListener('load', init())

/* ======== com funcionalidade para não ultrapassar laterais ============ */

const init = () => {
  // carro.style.position = 'relative'
  // carro.style.left = '0px'
  carro.style = "position: relative; left: 0px; width: 100px"
  tamMax = window.innerWidth - parseInt(carro.style.width) // dessa forma o carro vai parar realmente na borda direita
}

let anima = null
let tamMax = null
console.log(tamMax)
// console.log(parseInt(carro.style.width))
// A funçao setTimeout chama apenas uma vez, então precisaremos usar a recursividade para que a div continue andando na 
// direção escolhida, sem precisar ficar apertando o botão;
const move = (direcao) => {
  if(direcao > 0) {
    if(parseInt(carro.style.left) <= tamMax ) {
      carro.style.left = parseInt(carro.style.left) + (10 * direcao) + 'px'
      anima = setTimeout(move, 20, direcao) // Aqui esta a recursividade, ele vai chamar a função move novamente;
    } else {
      clearTimeout(anima)
    }
  }else if(direcao < 0) {
    if(parseInt(carro.style.left) >= 0 ) {
      carro.style.left = parseInt(carro.style.left) + (10 * direcao) + 'px'
      anima = setTimeout(move, 20, direcao) // Aqui esta a recursividade, ele vai chamar a função move novamente;
    }else {
      clearTimeout(anima)
    }
  }
  console.log(tamMax)
}

btn_esquerda.addEventListener('click', () => {
  clearTimeout(anima)
  move(-1)
})

btn_direita.addEventListener('click', () => {
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