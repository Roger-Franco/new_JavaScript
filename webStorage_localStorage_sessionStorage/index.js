const f_texto = document.querySelector('#f_texto')
const p_texto = document.querySelector('#p_texto')
const btn_texto = document.querySelector('#btn_texto')

btn_texto.addEventListener("click", (evt) => {

})

let num = 12
// window.localStorage.setItem("numero", num)
// localStorage.setItem("numero", num)
// localStorage.setItem("numero2", 20)
// localStorage.setItem("numero3", 30)

// alert(localStorage.length)
// alert(localStorage.getItem(localStorage.key(0)))
// alert(localStorage.getItem('numero'))
// alert(localStorage.getItem('numero2'))

localStorage.clear()

sessionStorage.setItem("numero", num)
sessionStorage.setItem("numero2", 20)
sessionStorage.setItem("numero3", 30)