const url = document.getElementById('url')
const btn_url = document.getElementById('btn_url')

btn_url.addEventListener('click', (evt) => {
  // window.location = "/Math/index.html"
  // window.location = "https://google.com"
  // window.location.replace("https://google.com") // Deleta a URL corrente do histórico
  // window.location.assign("http://127.0.0.1:5500/Math/index.html") // Não deleta a URL corrente do histórico
  // window.location.reload() // Atualiza a página
  // window.history.back() // Atualiza a página
  // window.history.forward() // Atualiza a página
  // window.history.go(-3) // Atualiza a página
  // console.log(window.history.length)
  window.location = url.value
})