// 12. Ingresar una palabra o texto por teclado y determinar si es o no una palabra
// palíndromo. (Palabra que se lee de igual manera de adelante hacia atrás, que de atrás
// hacia delante)

const palabra = prompt("Inserta una palabra y te digo si es un palindromo")

const palabraReversed = palabra.split("").toReversed().join("")

const message = palabra === palabraReversed ? `La palabra ${palabra} es un palindromo` : `La palabra ${palabra} no es un palindromo`

alert(message)