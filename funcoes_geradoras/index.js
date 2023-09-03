function* cores(){
  yield "Vermelho"
  yield "Verde"
  yield "Azul"
}

// console.log(cores().next().value);
// console.log(cores().next().value);
// console.log(cores().next().value);

// const iteratorCores = cores()
// console.log(iteratorCores.next().value);
// console.log(iteratorCores.next().value);
// console.log(iteratorCores.next().value);


function* perguntas(){
  const nome = yield 'Qual é o seu nome?'
  const esporte = yield 'Qual é o seu esporte favorito?'
  return "Seu nome é " + nome + ', seu esporte favorito é ' + esporte
}

const itp = perguntas()
console.log(itp.next().value);
console.log(itp.next("Roger").value);
console.log(itp.next("Corrida").value);
