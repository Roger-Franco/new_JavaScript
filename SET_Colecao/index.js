const caixa = document.querySelector('#caixa')

let musicas = new Set(["musica1", "musica boa", "musica10"]) // aqui vc pode inicializar no inicio

musicas.add("musica top")
musicas.add("musica 1")
musicas.add("musica 1")
musicas.add("musica10")
// musicas.delete("musica10")
// musicas.clear()

musicas.forEach((el) => {
  caixa.innerHTML += el + ","
})

for(let m of musicas){
  caixa.innerHTML += m + "<br/>"
}

console.log(musicas)
