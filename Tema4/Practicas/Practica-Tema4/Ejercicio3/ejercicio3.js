// 3. Vamos a crear una clase llamada Diputado. Con varios diputados
// haremos un array llamado arrayParlamento.

// 1. La clase Diputado va a estar compuesta por las siguientes
// propiedades.

// 1. Nombre. El nombre de pila.
// 2. Apellidos. Los apellidos.
// 3. DNI. El DNI. Debe ser correcto y para comprobarlo
// 4. Edad. Debe ser mayor que 0 y menor de 200.
// 5. Partido. Siglas del partido al que pertenece.

// 2. El constructor deberá ser algo similar a: Diputado (nombre,
// apellidos, dni, edad, partido)

// 3. Diputado debe disponer de diversos métodos. Unos
// serán get que devolverán el valor indicado, y otros
// serán set que establecerán un nuevo valor en la propiedad a la
// que se refieren. Estos serán los métodos:
// 1. getNombre() -> Devuelve el nombre
// 2. setNombre(nuevoNombre)
// 3. getApellidos() -> Devuelve los apellidos.
// 4. setApellidos(nuevosApellidos)
// 5. getDNI()
// 6. setDNI(NuevoDNI) -> Devuelve false si no se ha
// podido cambiar, true si se ha podido cambiar
// porque no es correcto ese DNI)
// 7. getEdad() -> Devuelve la edad.
// 8. setEdad()
// 9. setPartido()
// 10.getPartido() -> Devuelve el partido.
// 11. toString() -> Mostrar todos las propiedades de Diputado.

// 4. Añada los siguientes elementos al array y ordénelos por edad.
// "Herminio","Cabezas",12349,30,"Verde"
// "Manolo","López",12349,20,"Azul"
// 4. "Jacobo","Sánchez",12349,53,"Amarillo"

// Clase para comprobar si un DNI es correcto o generar letra
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

    return this.#letras[sumaNums > 23 ? sumaNums % 23 : sumaNums]
  }
}

class Diputado {
  #nombre
  #apellidos
  #dni
  #edad
  #partido

  // Constructor
  constructor(nombre, apellidos, dni, edad, partido) {
    this.#nombre = nombre
    this.#apellidos = apellidos
    this.#dni = dni
    this.#edad = edad
    this.#partido = partido
  }

  // Getters y setters
  getNombre() {
    return this.#nombre
  }

  setNombre(nuevoNombre) {
    this.#nombre = nuevoNombre
  }

  getApellidos() {
    return this.#apellidos
  }

  setApellidos(nuevosApellidos) {
    this.#apellidos = nuevosApellidos
  }

  getDNI() {
    return this.#dni
  }

  setDNI(nuevoDNI) {
    if (Identidad.comprobarDNI(nuevoDNI)) {
      this.#dni = nuevoDNI
      return true
    }
    return false
  }

  getEdad() {
    return this.#edad
  }

  setEdad(nuevaEdad) {
    this.#edad = nuevaEdad
  }

  getPartido() {
    return this.#partido
  }

  setPartido(nuevoPartido) {
    this.#partido = nuevoPartido
  }

  // ToString
  toString() {
    return `${this.#nombre} ${this.#apellidos} con dni ${this.#dni},
     tiene ${this.#edad} años y su partidos es: ${this.#partido}`
  }
}

const diputados = [
  new Diputado("Herminio", "Cabezas", "12349", 30, "Verde"),
  new Diputado("Manolo", "López", "12349", 20, "Azul"),
  new Diputado("Jacobo", "Sánchez", "12349", 53, "Amarillo"),
]

const diputadosOrdenadosPorEdad = diputados.toSorted((dip1, dip2) => dip1.getEdad() - dip2.getEdad())

document.write("Los diputados ordenados por edad de menor a mayor son:<br>")
diputadosOrdenadosPorEdad.forEach(dip => document.write(`${dip}<br>`))