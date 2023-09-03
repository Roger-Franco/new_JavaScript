const converterInt = (e) => parseInt(e)
let num = ['1', '2', '3', '4', '5']
// let num = ['1', '2', '3', '4', '5'].map(converterInt)

const converterNum = num.map((item) => {
  return converterInt(item)
})

console.log(num)
console.log(converterNum)





//const el = document.getElementsByTagName('div')
// const val = Array.prototype.map.call(el, ({innerHTML})=> innerHTML)
// console.log(val)



// el=[...el]

// el.map((e,i) => {
//   console.log(e);
//   e.innerHTML = 'Curso Frank'
// })
// console.log(el);