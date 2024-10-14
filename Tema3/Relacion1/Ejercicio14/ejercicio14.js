// 14. Cargar un String por teclado e implementar las siguientes funciones:
// a) Imprimir la primera mitad de los caracteres de la cadena.
// b) Imprimir el último carácter.
// c) Imprimirlo en forma inversa.
// d) Imprimir cada carácter del String separado con un guion.
// e) Imprimir la cantidad de vocales almacenadas

const string = prompt("Ingrese el texto que quiera")

const imprimirPrimeraMitad = () => {
  alert(`La mitad de la palabra ${string} es ${string.split("", string.length / 2).join("")}`)
}

const imprimirUltimoCaracter = () => {
  alert(`El ultimo caracter es ${string[string.length - 1]}`)
}

const imprimirInverso = () => {
  const inverso = string.split("").toReversed().join("")
  alert(`La cadena invertida es ${inverso}`)
}

const imprimirSeparadoPorGuion = () => {
  const separGuion = string.split("").join("-")
  alert(`La cadena separada por guiones es ${separGuion}`)
}

const imprimirNumeroVocales = () => {
  let numVocales = 0
  const stringMinus = string.toLowerCase()
  for (let i = 0; i < stringMinus.length; i++) {
    if (stringMinus[i] === "a" || stringMinus[i] === "e" || stringMinus[i] === "i" || stringMinus[i] === "o" || stringMinus[i] === "u") numVocales++
  }
  alert(`El numero de vocales es ${numVocales}`)
}

imprimirPrimeraMitad()
imprimirUltimoCaracter()
imprimirInverso()
imprimirSeparadoPorGuion()
imprimirNumeroVocales()