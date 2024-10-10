// 11. Realizar la búsqueda de un string clave en un string fuente. Se deberá ingresar una
// frase o texto (fuente) y luego la clave a buscar. En caso de encontrarla, imprimir la
// posición, de lo contrario una leyenda.

const fuente = prompt("Ingrese un texto", "Lleva la tarara un vestido blanco lleno de cascabeles")
const clave = prompt("Inserte una clave a buscar en el texto", "tarara")

const index = fuente.indexOf(clave)

alert(`La clave empieza en la posición ${index}`)