// 1. Vamos a crear un array donde aparezcan los primeros 15 número
// primos de forma descendente. O sea, de mayor a menor.
// (13,11,7,5,3,2,1). Además, deberéis introducir los elementos de tal
// forma que no se tengan que ordenar estos números. O sea, que
// deberéis meter el 1; después sería (2,1) y a continuación (3,2,1) y etc.

// 1. Además crearéis una función que se
// llame invertirArray(arrayInvertir) que lo que haga sea invertir
// el array en un nuevo array que será el valor que se devuelva
// con return. Está prohibido utilizar esta función para introducir
// los elementos en el momento de la creación. Para llamarla
// podemos utilizar:
//  var nuevoArrayInvertido = InvertirArray(arrayPrimos);

// 2. Crear una función llamada VisualizarArray(arrayVisualizar) que
// muestre cualquier array de números.

const numsPrimos = []

/**
 * Funcion que devuelve si el número es primo o no
 * @param num {number} Número a evaluar
 * @returns {boolean} Verdadero si el número es primo, falso en caso contrario
 */
const esPrimo = (num) => {
  if (num < 1) return false
  if (num === 1) return true
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false
  }
  return true
}

/**
 * Genera los primeros 15 números primos
 */
const generarPrimos = () => {
  let num = 1;
  while (numsPrimos.length < 15) {
    if (esPrimo(num)) {
      numsPrimos.unshift(num)
    }
    num++
  }
}

/**
 * Invertir un array
 * @param arrayInvertir {Array[number]} Array a invertir
 */
const invertirArray = (arrayInvertir) => {
  return arrayInvertir.toReversed()
}

/**
 * Visualizar un array
 * @param arrayVisualizar {Array[number]} Array a visualizar
 */
const visualizarArray = (arrayVisualizar) => {
  document.write(`${arrayVisualizar.join(', ')} <br>`)
}


generarPrimos()

const arrayInvertido = invertirArray(numsPrimos)

document.write("Primos de menor a mayor: ")
visualizarArray(arrayInvertido)

document.write("Primos de mayor a menor: ")
visualizarArray(numsPrimos)


