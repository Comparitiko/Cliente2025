// Realiza un programa que cada 20 segundos (mediante setInterval) solicite un DNI hasta que
// alguien le escriba la cadena “-1”.
// En ese momento, el programa debe mostrar seguidas las letras de todos los DNIs introducidos.
// Aquí un enlace para saber como calcular la letra de DNI:

/**
 * Funcion para pedir los numeros de un DNI
 * @returns {string}
 */
const pedirDNI = (numero) => {
  let dni

  do {
    dni = prompt(`Introduce tu DNI numero ${numero}`)
  } while ((dni.length !== 8 || isNaN(parseInt(dni))) && dni !== "-1")

  return dni
}

/**
 * Funcion para calcular la letra de un DNI
 * @returns {*}
 */
const calcularLetra = (dni) => {

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

  const numArr = dni.split("");

  const sumaNums = numArr.reduce((prev, curr) => prev + parseInt(curr));

  return letras[sumaNums % 23];
}

const dnis = []
let dniesPedidos = 1

const myInterval = setInterval(() => {
  const dni = pedirDNI(dniesPedidos)
  // Si dni es -1 terminar el interval y pintar las letras de cada dni
  if (dni === "-1") {
    clearInterval(myInterval)
    const h1 = document.createElement("h1")

    dnis.forEach(dni => {
      const letra = calcularLetra(dni)
      h1.innerText += `${letra} ,`
    })

    document.body.appendChild(h1)
    return
  }
  dniesPedidos++
  dnis.push(dni)
}, 20000)

