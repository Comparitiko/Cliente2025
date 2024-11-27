const crearButaca = (fila, columna) => {
  const butaca = document.createElement("div")
  butaca.classList.add("butaca")
  butaca.id = `${fila},${columna}`
  return butaca
}

const crearSala = (sala) => {
  const filas = 18
  const columnas = 12

  for (let fila = 0; fila < filas; fila++) {
    for (let columna = 0; columna < columnas; columna++) {
      const butaca = crearButaca(fila, columna)
      if (fila < 4 && columna === 0) {
        butaca.classList.add("nobutaca")
      } else if ((fila < 3 && (columna === 1 || columna === 11))) {
        butaca.classList.add("nobutaca")
      } else if ((fila < 2 && columna === 2)) {
        butaca.classList.add("nobutaca")
      } else if ((fila < 1 && columna === 3)) {
        butaca.classList.add("nobutaca")
      } else if (columna === 9 || columna === 10) {
        butaca.classList.add("nobutaca")
      } else {
        butaca.classList.add("libre")
        // Asignar evento de click al boton cuando la butaca está libre
      }

      sala.appendChild(butaca)
    }
  }
}

window.onload = () => {
  const sala = document.querySelector("#sala")

  crearSala(sala)
  const butacasLibres = document.querySelectorAll(".libre")

  butacasLibres.forEach(butaca => {
    butaca.addEventListener("click", () => {
      butaca.classList.toggle("seleccion")
    })
  })

  const reservaBtn = document.querySelector("#reservar")
  const reservaText = document.querySelector("#reservas")

  reservaBtn.addEventListener("click", () => {

    reservaText.innerText = ""

    const butacasSeleccionadas = document.querySelectorAll(".seleccion")

    let idsSeleccionadas = ""

    butacasSeleccionadas.forEach(butaca => {
      butaca.classList.remove("seleccion")
      butaca.classList.remove("libre")
      butaca.classList.add("ocupada")
      idsSeleccionadas += `{${butaca.id}}, `
    })

    reservaText.innerText = `Butacas Reservadas: ${idsSeleccionadas}`
  })

}