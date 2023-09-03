
// const caixa = document.getElementById('caixa')

// let cores = ['vermelho', 'verde', 'azul']
// let cursos = ["HTML", "CSS", "Javascript", cores]
// cursos[0]= "React"
// cursos.push("Node")// add final
// cursos.push("Express")
// cursos.unshift('Redux') // add inicio
// cursos.pop() // retira ultimo
// cursos.shift() // retira inicio

// console.log(cursos[3][2]) // azul

// cursos.map((el) => {
//   let p = document.createElement('p')
//   p.innerHTML = el
//   caixa.appendChild(p)
// })

/* ====== Minha solução =============== */
// const caixa = document.querySelector("#caixa")

// let resultado = 2+2

// const valor1 = document.createElement('label')
// valor1.innerHTML='Valor 1:'
// const input1 = document.createElement('input')
// input1.setAttribute('class', 'inputCalc')

// const valor2 = document.createElement('label')
// valor2.innerHTML='Valor 2:'
// const input2 = document.createElement('input')
// input2.setAttribute('class', 'inputCalc')

// const result = document.createElement('label')
// result.innerHTML='Resultado:'
// const pResult = document.createElement('p')
// pResult.setAttribute('class', 'inputCalc')
// // pResult.innerHTML=resultado

// const caixa1 = document.createElement('div')
// caixa1.setAttribute("id", "caixa1")

// const buttonOperadorSoma = document.createElement('button')
// buttonOperadorSoma.setAttribute("class", "buttonOperator")
// buttonOperadorSoma.innerHTML='+'

// const buttonOperadorDiminue = document.createElement('button')
// buttonOperadorDiminue.setAttribute("class", "buttonOperator")
// buttonOperadorDiminue.innerHTML='-'

// caixa.appendChild(valor1)
// caixa.appendChild(input1)
// caixa.appendChild(valor2)
// caixa.appendChild(input2)
// caixa.appendChild(result)
// caixa.appendChild(pResult)
// caixa.appendChild(caixa1)
// caixa1.appendChild(buttonOperadorSoma)
// caixa1.appendChild(buttonOperadorDiminue)


// buttonOperadorSoma.addEventListener('click', (e) => {
//   const num1 = Number(input1.value)
//   const num2 = Number(input2.value)
//   console.log(num1 + num2)
//   resultado = num1 + num2
//   pResult.innerHTML=resultado
//   return resultado
// })

// buttonOperadorDiminue.addEventListener('click', (e) => {
//   const num1 = Number(input1.value)
//   const num2 = Number(input2.value)
//   console.log(num1 - num2)
//   resultado = num1 - num2
//   pResult.innerHTML=resultado
//   return resultado
// })
/* ===================== */

// let valores = [1,2, 3, 4 ,5 ]
// const op = [
  //   (val) => {
    //     let res = 0
    //     for(v of val){
      //       res += v
      //     }
//     return res
//   },
//   (val) => {
//     let res = 1
//     for(v of val){
//       res *= v
//     }
//     return res
//   },
//   (val) => {
//     for(v of val){
//       console.log(v)
//     }
//   },
// ]

// console.log(op[1](valores))
// op[2](valores)

/* ======================== */

const btn_soma = document.querySelector('#btn_soma')
const btn_subtracao = document.querySelector('#btn_subtracao')
const btn_multiplicacao = document.querySelector('#btn_multiplicacao')
const btn_divisao = document.querySelector('#btn_divisao')
const res = document.querySelector('#res')

const op = [
  () => {
    const val = [document.getElementById("valor1").value, document.getElementById("valor2").value]
    res.value = Number(val[0]) + Number(val[1])
  },
  () => {
    const val = [document.getElementById("valor1").value, document.getElementById("valor2").value]
    res.value = Number(val[0]) - Number(val[1])
  },
  () => {
    const val = [document.getElementById("valor1").value, document.getElementById("valor2").value]
    res.value = Number(val[0]) * Number(val[1])
  },
  () => {
    const val = [document.getElementById("valor1").value, document.getElementById("valor2").value]
    res.value = Number(val[0]) / Number(val[1])
  },
]

const input1 = document.getElementById("valor1")

btn_soma.addEventListener('click', () => { 
  op[0]()
})
btn_subtracao.addEventListener('click', op[1])
btn_multiplicacao.addEventListener('click', op[2])
btn_divisao.addEventListener('click', op[3])