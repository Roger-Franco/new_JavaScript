// let a, b, c, d

// // [a, b, c, d] = [10, 30, 50, 20]

// ({a, b, c, d} = {a: 'verde', b: 'amarelo', c: 'azul', d: 'branco'})

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// let a = 10;
// let b = 20;

// [a, b] = [b, a]

// let numeros = () => {
//   return [10, 20, 30, 40]
// }

// let [a, b, c, d] = numeros()

let numeros = [10, 20, 30, 40, 50, 60, 70, 80]

let [a, b, c, ...d] = numeros

console.log(a)
console.log(b)
console.log(c)
console.log(d)

let obj = { nome: "Roger", idade: 43}
let {nome, idade} = obj

console.log(nome)
console.log(idade)

let texto = "Curso de javascript"

let texto1 = texto.split(' ')
console.log(texto1)

let [t] = texto1
console.log(t)
let [...t1] = texto1
console.log(t1)