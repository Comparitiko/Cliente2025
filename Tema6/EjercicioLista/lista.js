const createElement = () => {
  const lista = document.querySelector("#lista")
  const li = document.createElement("li")
  li.innerText = prompt("Inserte el texto a añadir", "texto")
  lista.appendChild(li)
}

const borrarPrimerLi = () => {
  const lista = document.querySelector("#lista")
  lista.removeChild(lista.firstChild)
}

const borrarUltimoLi = () => {
  const lista = document.querySelector("#lista")
  lista.removeChild(lista.lastChild)
}

window.onload = () => {
  document.querySelector("#create").addEventListener("click", createElement)
  document.querySelector("#deleteFirst").addEventListener("click", borrarPrimerLi)
  document.querySelector("#deleteLast").addEventListener("click", borrarUltimoLi)
}