const createPoblacion = () => {
  const lista = document.querySelector("#lista")
  const li = document.createElement("li")
  li.innerText = prompt("Inserte la poblacion a añadir")
  lista.appendChild(li)
}

const borrarPoblacion = () => {
  const lista = document.querySelector("#lista")
  const index = parseInt(prompt("Ingrese el numero de la poblacion a borrar"))

  if (isNaN(index)) throw new Error("Error al insertar el indice")

  const liEls = lista.querySelectorAll("li")

  if (index < 1 || index > liEls.length) throw new Error("Error insertando un indice que no existe")

  lista.removeChild(liEls[index - 1])
}

window.onload = () => {
  document.querySelector("#create").addEventListener("click", createPoblacion)
  document.querySelector("#delete").addEventListener("click", borrarPoblacion)
}