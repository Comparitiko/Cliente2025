const Fichas = {
  PeonB: "&#9817;",
  CaballoB: "&#9816;",
  AlfilB: "&#9815;",
  TorreB: "&#9814;",
  ReinaB: "&#9813;",
  ReyB: "&#9812;",
  PeonN: "&#9823;",
  CaballoN: "&#9822;",
  AlfilN: "&#9821;",
  TorreN: "&#9820;",
  ReinaN: "&#9819;",
  ReyN: "&#9818;"
}

const crearTablero = (tablero) => {
  const filas = 8
  const columnas = 8

  for (let fila = 0; fila < filas; fila++) {
    for (let columna = 0; columna < columnas; columna++) {
      const celda = document.createElement("div")
      celda.classList.add("celda")
      tablero.appendChild(celda)

      if ((fila % 2 === 0 && columna % 2 === 0) || (fila % 2 === 1 && columna % 2 === 1)) {
        celda.style.backgroundColor = "#5f5f5f"
      }

      // Poner fichas Negras
      if (fila === 0 || fila === 1) {
        if (fila === 1) {
          celda.innerHTML = Fichas.PeonN
        } else if (columna === 0 || columna === 7) {
          celda.innerHTML = Fichas.TorreN
        } else if (columna === 1 || columna === 6) {
          celda.innerHTML = Fichas.CaballoN
        } else if (columna === 2 || columna === 5) {
          celda.innerHTML = Fichas.AlfilN
        } else if (columna === 3) {
          celda.innerHTML = Fichas.ReinaN
        } else if (columna === 4) {
          celda.innerHTML = Fichas.ReyN
        }
      } else if (fila === 6 || fila === 7) {
        if (fila === 6) {
          celda.innerHTML = Fichas.PeonB
        } else if (columna === 0 || columna === 7) {
          celda.innerHTML = Fichas.TorreB
        } else if (columna === 1 || columna === 6) {
          celda.innerHTML = Fichas.CaballoB
        } else if (columna === 2 || columna === 5) {
          celda.innerHTML = Fichas.AlfilB
        } else if (columna === 3) {
          celda.innerHTML = Fichas.ReinaB
        } else if (columna === 4) {
          celda.innerHTML = Fichas.ReyB
        }
      }


    }
  }
}

window.onload = () => {
  const tablero = document.querySelector("#tablero")
  crearTablero(tablero)

}