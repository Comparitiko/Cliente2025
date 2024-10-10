/*Hacer una función en JavaScript que recibe 4 números. Utilizando las propiedades de
Math, mostrar
a) El máximo de los números pasados
b) El mínimo de los números pasados*/

const getMaxAndMin = (...nums) => {
  alert(`El numero mas grande es ${Math.max(...nums)}`)
  alert(`El numero mas pequeño es ${Math.min(...nums)}`)
}

getMaxAndMin(5, 3, 10, 6)