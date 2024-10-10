// 9. Ingresar una serie de nombres por teclado hasta que se cargue la palabra Fin, y
// mostrar cuántos nombres se ingresaron

const nombres = []

let cad

do {
  cad = prompt("Ingrese un nombre o ingrese Fin")
  if (cad !== "Fin") nombres.push(cad)
} while (cad !== "Fin")

alert(`Se han insertado ${nombres.length} nombres`)