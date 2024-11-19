const image = (number) => `./images/img0${number}.jpg`

const imagen = document.querySelector("#foto")

const prev = document.querySelector("#atras")
const next = document.querySelector("#avance")

let numImage = 1

prev.addEventListener("click", () => {
  if (numImage <= 1) {
    numImage = 6
  } else numImage--

  imagen.src = image(numImage)
})

next.addEventListener("click", () => {
  if (numImage >= 6) {
    numImage = 1
  } else numImage++

  imagen.src = image(numImage)

  console.log(imagen.src)
})