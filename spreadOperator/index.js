const obj1 = document.getElementsByTagName('div')
const obj2 = [...document.getElementsByTagName('div')]


// obj1.forEach(el => {
//   console.log(el);
// })
obj2.forEach(el => {
  console.log(el);
  el.innerHTML = 'curso'
})

console.log(obj1)
console.log(obj2)