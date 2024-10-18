// EJERCICIO: u4e2_arrays
// • Vamos a gestionar una lista de países haciendo uso de Arrays. Para ello necesitarás
// crear un archivo arrays.js que incluya las siguientes funciones:
// • Mostrar el número de elementos del array.
// • Mostrar todos los elementos del array.
// • Muestra los elementos del array en sentido inverso.
// • Muestra los elementos del array ordenados alfabéticamente (pero no los ordena).
// • Añadir un elemento al principio del array.
// • Añadir un elemento al final del array.
// • Borrar un elemento al principio del array (y decir cuál se ha borrado).
// • Borrar un elemento al final del array (y decir cuál se ha borrado).
// • Muestra el elemento que se encuentra en una posición que el usuario indica.
// • Muestra la posición en la que se encuentra un elemento que le indica el usuario.
// • Muestra los elementos que se encuentran en un intervalo que el usuario indica.

const array = [
  "Argentina",
  "Brasil",
  "Chile",
  "Colombia",
  "Ecuador",
  "Perú",
  "Uruguay",
  "Venezuela",
  "España",
  "México",
  "Australia",
]

// Muestra el número de elementos del array.
document.write(`El array tiene ${array.length} elementos.`)

// Muestra todos los elementos del array.
document.write(`<br>Los elementos del array son: ${array.join(", ")}.`)

// Muestra los elementos del array en sentido inverso.
document.write(`<br>Los elementos del array en sentido inverso son: ${array.reverse().join(", ")}.`)

// Muestra los elementos del array ordenados alfabéticamente (pero no los ordena).
document.write(`<br>Los elementos del array ordenados alfabéticamente son: ${array.sort().join(", ")}.`)

// Añadir un elemento al principio del array.
array.unshift("México")
document.write(`<br>Añadido el elemento ${array[0]} al principio del array.`)

// Añadir un elemento al final del array.
array.push("Australia")
document.write(`<br>Añadido el elemento ${array[array.length - 1]} al final del array.`)

// Borrar un elemento al principio del array (y decir cuál se ha borrado).
const elementoBorradoShift = array.shift()
document.write(`<br>Borrado el elemento ${elementoBorradoShift} al principio del array.`)

// Borrar un elemento al final del array (y decir cuál se ha borrado).
elementoBorrado = array.pop()
document.write(`<br>Borrado el elemento ${elementoBorrado} al final del array.`)

// Muestra el elemento que se encuentra en una posición que el usuario indica.
const posicion = prompt("Escribe la posición del elemento que desea ver:")
document.write(`<br>El elemento en la posición ${posicion} es: ${array[posicion]}.`)

// Muestra la posición en la que se encuentra un elemento que le indica el usuario.
const elemento = prompt("Escribe el elemento que desea buscar:")
const posicionBusqueda = array.indexOf(elemento)
document.write(`<br>La posición del elemento ${elemento} es: ${posicionBusqueda}.`)

// Muestra los elementos que se encuentran en un intervalo que el usuario indica.
const intervalo = prompt("Escribe el intervalo de elementos que desea ver, escribelos juntos es decir 12:")
const elementos = array.slice(intervalo[0], intervalo[1])
document.write(`<br>Los elementos del intervalo ${intervalo[0]}, ${intervalo[1]} son: ${elementos.join(", ")}.`)