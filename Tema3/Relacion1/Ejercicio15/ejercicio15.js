// 15. Codifique un programa que permita cargar una oración por teclado, luego mostrar
// cada palabra ingresada en una línea distinta

const frase = prompt("Ingrese una frase")

const arrFrase = frase.split(" ");

arrFrase.forEach(palabra => {
  const h1 = document.createElement("h1")
  h1.innerText = palabra
  document.body.appendChild(h1)
})