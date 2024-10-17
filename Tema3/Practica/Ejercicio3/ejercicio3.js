// Realiza un programa que pregunte una letra de la A a la Z. Tras ello el programa indicará cuántos
// DNIs de 3 cifras (del 001 al 999) tienen esa letra y tras ello te mostrará “de golpe” el listado de
// todos los DNIs que tienen esa letra.

const letras = {
  0: "T",
  1: "R",
  2: "W",
  3: "A",
  4: "G",
  5: "M",
  6: "Y",
  7: "F",
  8: "P",
  9: "D",
  10: "X",
  11: "B",
  12: "N",
  13: "J",
  14: "Z",
  15: "S",
  16: "Q",
  17: "V",
  18: "H",
  19: "L",
  20: "C",
  21: "K",
  22: "E",
};

const dnis = []

// Generar el numero del dni y comprobar si son la misma letra que la buscada
const generarDNISPorLetra = (letraBuscada) => {
  for (let centenas = 0; centenas < 10; centenas++) {
    for (let decenas = 0; decenas < 10; decenas++) {
      for (let unidades = 0; unidades < 10; unidades++) {
        const numDni = `${centenas}${decenas}${unidades}`
        const sumaNumDni = numDni.split("").reduce((prev, curr) => parseInt(prev) + parseInt(curr))
        const letra = letras[sumaNumDni < 23 ? sumaNumDni : sumaNumDni % 23]
        if (letra === letraBuscada) dnis.push(`${numDni}${letra}`)
      }
    }
  }
}

const letraABuscar = prompt("Ingrese la letra de la A a la Z").toUpperCase()

generarDNISPorLetra(letraABuscar)

dnis.forEach(dni => {
  const h2 = document.createElement("h2")
  h2.innerText = dni
  document.body.appendChild(h2)
})

