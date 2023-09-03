let res = 0
function soma(...valores){
  // return console.log(valores.length)
  // for (let i=0; i < valores.length; i++) {
  //   res += valores[i]
  // }
  // for (let v of valores) {
  //   res += v
  // }
  for (let i in valores) {
    res += valores[i]
  }
  // valores.map((item) => res += item)
  return res
}

console.log(soma(1,2, 7, 17))