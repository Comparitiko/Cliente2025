// 2. Cree una clase llamada Identidad. Esta clase tendrá los siguientes
// métodos:

// 1. El constructor será nulo, ya que esta clase es más bien una
// agrupación de métodos relacionados y no una clase auténtica.

// 2. GenerarLetra que recibe como entrada un DNI sin letra y
// obtienes una cadena DNI con esa letra.

// 3. ComprobarDNI. Comprueba si el número del DNI es correcto o
// no lo es. Devuelve true si es correcto y devuelve false si no lo
// es.

// Nota: El DNI se considera que siempre debe tener letra. La
// letra es un dígito de control. Podéis buscar el algoritmo
// en: https://es.wikipedia.org/wiki/N%C3%BAmero_de_identificaci
// %C3%B3n_fiscal

class Identidad {
  static #letras = [
    "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J",
    "Z", "S", "Q", "V", "H", "L", "C", "K", "E"
  ]

  /**
   * Generar letra para un DNI que no tiene
   * @param dniSinLetra {string} DNI sin letra
   * return{string} DNI con su letra
   */
  static generarLetra(dniSinLetra) {
    const numDNIArr = dniSinLetra.split("")

    const letra = this.#calularLetra(numDNIArr)

    return `${dniSinLetra}${letra}`
  }

  /**
   * Comprobar si un DNI es correcto
   * @param dni {string} DNI a comprobar
   * @returns {boolean} Verdadero si es correcto, falso en caso contrario
   */
  static comprobarDNI(dni) {
    const dniSinLetra = dni.slice(0, dni.length - 1)

    const letra = this.#calularLetra(dniSinLetra.split(""))

    return dni.slice(dni.length - 1) === letra
  }

  /**
   * Numero del DNI
   * @param numDNI {string[]} Array con el número con tipo string del DNI
   * @returns {string} Letra del DNI
   */
  static #calularLetra(numDNI) {

    const numsDNI = numDNI.map(num => parseInt(num))

    const sumaNums = numsDNI.reduce((prev, curr) => prev + curr)

    console.log(sumaNums)

    return this.#letras[sumaNums > 23 ? sumaNums % 23 : sumaNums]
  }
}

// const dniSinLetra = prompt("Introduce tu DNI sin letra")
const dniSinLetra = "24461117"
const dniConLetra = Identidad.generarLetra(dniSinLetra)

const isCorrect = Identidad.comprobarDNI(dniConLetra)

document.write(`Tu DNI sin letra es: ${dniSinLetra}<br>`)
document.write(`Tu DNI con letra es: ${dniConLetra}<br>`)
document.write(`¿Tu DNI es correcto?: ${isCorrect}<br>`)