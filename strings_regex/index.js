// let nome = new String('Roger Franco')
// let nome1 = new String('Roger Francoa')
// // let nome = 'roger'

// let canal = new String("Frank Cursos")


// console.log(nome)
// console.log(nome.charAt(2))
// console.log(nome.charCodeAt(0))
// // nome = nome.concat(canal)
// // console.log(nome)
// console.log(nome.concat(canal))
// console.log(nome.indexOf('r'))
// console.log(nome.lastIndexOf('r'))
// console.log(nome.localeCompare(nome1))
// console.log(nome.replace('o', 'i'))
// console.log(nome.search('o'))
// console.log(nome.slice(6, 10))

// let arr_nome = nome.split("r")
// let arr_nome1 = nome.split(" ")
// console.log(arr_nome)
// console.log(arr_nome1)

// let parte2 = nome.substring(6, 12)
// let parte3 = nome.substr(6, 5)
// let parte4 = nome.toUpperCase()
// let parte5 = nome.toLowerCase()

// console.log(parte2)
// console.log(parte3)
// console.log(parte4)
// console.log(parte5)

/* ----------- Novas funções -------------*/


// let nome = new String("Roger Franco Correia")

// console.log(nome.startsWith('Rog'))
// console.log(nome.endsWith('a'))
// console.log(nome.includes('i'))
// console.log(nome.repeat(3))
// nome = nome.repeat(5)

// console.log(nome.valueOf())


// console.log(nome.charCodeAt('r'))
// console.log(String.fromCodePoint(82))
// console.log(String.fromCharCode())

/* ----------- Regex -------------*/

let nome = new String("Rooooger Franco Correia 1980")

console.log(nome)

console.log(nome.search(/franco/i))
console.log(nome.match('o'))
console.log(nome.match(/o/g))
console.log(nome.match(/R/gi))
console.log(nome.matchAll('o'))
console.log(nome.replace(/o/ig, 'h'))


console.log(nome.match(/[og]/ig))
console.log(nome.match(/[g-o]/ig))
console.log(nome.match(/[g-o|0-5]/ig))

// Metacaracteres
console.log(nome.match(/\d/ig)) // apenas digitos numericos
console.log(nome.match(/\s/ig)) // apenas espaços
console.log(nome.match(/\bf/ig)) // apenas letras

// Quantificadores
console.log(nome.match(/o/ig))
console.log(nome.match(/o+/ig))
console.log(nome.match(/ra*/ig))
console.log(nome.match(/ra?/ig))
