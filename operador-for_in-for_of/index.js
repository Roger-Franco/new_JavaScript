let num = [10, 20, 30, 40, 50]

for(let i=0; i<num.length; i++){
  console.log(i + ' - ' + num[i]);
}
// 0 - 10
// 1 - 20
// 2 - 30
// 3 - 40
// 4 - 50

for (n in num) { // posições
  console.log(n);
  console.log(num[n]);
  console.log(num);
}
// 0
// 10
// [ 10, 20, 30, 40, 50 ]
// 1
// 20
// [ 10, 20, 30, 40, 50 ]
// 2
// 30
// [ 10, 20, 30, 40, 50 ]
// 3
// 40
// [ 10, 20, 30, 40, 50 ]
// 4
// 50
// [ 10, 20, 30, 40, 50 ]

for (n of num) { // elementos
  console.log(n);
}
// 10
// 20
// 30
// 40
// 50