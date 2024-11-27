let colorSeleccionado = "black"

const colores = ["red", "green", "blue", "yellow", "orange", "purple", "black", "white", "#3f3f3f", "#7f7f7f", "#bfbfbf", "#ffffff", "#39f", "darkblue", "darkcyan", "cyan"]

const crearRejilla = () => {
  const filas = document.querySelector("#filas").value
  const columnas = document.querySelector("#columnas").value
  const tamPunto = document.querySelector("#tampunto").value

  const rejilla = document.querySelector("#rejilla")

  rejilla.innerHTML = ""

  for (let fila = 0; fila < filas; fila++) {
    for (let columna = 0; columna < columnas; columna++) {
      const punto = document.createElement("div")
      punto.classList.add("punto")
      punto.style.width = `${tamPunto}px`
      punto.style.height = `${tamPunto}px`
      punto.addEventListener("click", pintarPunto)
      rejilla.appendChild(punto)
    }
  }
}

const crearPaleta = (paleta) => {
  colores.forEach(color => {
    const divColor = document.createElement("div")
    divColor.classList.add("color")
    divColor.style.backgroundColor = color
    paleta.appendChild(divColor)

    divColor.addEventListener("click", () => {
      colorSeleccionado = divColor.style.backgroundColor
    })
  })
}

const pintarPunto = (e) => {
  e.target.style.backgroundColor = colorSeleccionado

  const pintarBordes = document.querySelector("#bordes").checked

  if (pintarBordes) {
    e.target.style.borderColor = colorSeleccionado
  }
}


window.onload = () => {
  crearPaleta(document.querySelector("#paleta"))
  crearRejilla()

  document.querySelector("#boton").addEventListener("click", crearRejilla)
}