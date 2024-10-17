// Realiza un programa que calcule cuántos números son a la vez primos y palíndromos desde el 1
// hasta 100000. Debe guardar todos ellos en un array y al finalizar el proceso imprimir dicho array.

const numeros = Array.from({length: 100000})

const numerosPrimosPalindromos = []

const esPrimo = (num) => {
  if (num === 1) return true
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) return false
  }
  return true
}

// Comprobar si es un numero palindromo dandole la vuelta al numero
const esPalindromo = (num) => {
  const numArr = num.toString().split("")
  return numArr.reverse().join("") === num.toString()
}

// Añadir al array los numeros que cumplen los requisitos
numeros.forEach((_, num) => {
  num += 1
  if (esPrimo(num) && esPalindromo(num)) numerosPrimosPalindromos.push(num)
})

// Pintarlos en el DOM
numerosPrimosPalindromos.forEach(num => {
  const h1 = document.createElement("h1")
  h1.innerText = num
  document.body.appendChild(h1)
})