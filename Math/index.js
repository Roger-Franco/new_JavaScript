const olhos = [...document.getElementsByClassName('olho')]
console.log(olhos[0])

let posx_mouse = 0
let posy_mouse = 0

window.addEventListener("mousemove", (evt) => {
  posx_mouse = evt.clientX
  posy_mouse = evt.clientY
  // console.log(posx_mouse, posy_mouse)

  // const rot = 90
  const rot = Math.atan2(posy_mouse, posx_mouse) * 180/Math.PI // Arco tangente de dois coeficientes
  console.log(rot, 'rot')
  olhos.forEach((o) => {
    o.style.transform = "rotate(" + rot + "deg)"
  })
})

// olhos[0].style.transform = "rotate(" + 180 + "deg)"
// olhos[1].style.transform = "rotate(" + 180 + "deg)"