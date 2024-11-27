const addTr = (e) => {
  const actualTr = e.target.parentNode.parentNode

  const newTr = createTr()

  // Insertar antes del tr pulsado
  actualTr.parentNode.insertBefore(newTr, actualTr)

  // Volver a escuchar eventos con los nuevos botones
  asignEvents()
}

const deleteTr = (e) => {
  const tr = e.target.parentNode.parentNode
  tr.parentNode.removeChild(tr)
}

const createTr = () => {
  const tr = document.createElement("tr")

  const numCelda1 = document.querySelector("#celda1").value
  const numCelda2 = document.querySelector("#celda2").value
  const numCelda3 = document.querySelector("#celda3").value

  const td1 = document.createElement("td")
  const td2 = document.createElement("td")
  const td3 = document.createElement("td")
  const td4 = document.createElement("td")

  td1.innerText = numCelda1
  td2.innerText = numCelda2
  td3.innerText = numCelda3

  // Añadir botones de acción

  const boton1 = document.createElement("button")
  boton1.name = "add"
  boton1.innerText = "+"
  boton1.addEventListener("click", addTr)

  const boton2 = document.createElement("button")
  boton2.name = "remove"
  boton2.innerText = "-"
  boton2.addEventListener("click", deleteTr)

  td4.appendChild(boton1)
  td4.appendChild(boton2)

  td4.innerHTML = `
    <button name="add">+</button>
    <button name="remove">-</button>
  `

  tr.appendChild(td1)
  tr.appendChild(td2)
  tr.appendChild(td3)
  tr.appendChild(td4)

  return tr
}

const asignEvents = () => {
  document.querySelector("button[name=add]").addEventListener("click", addTr)

  document.querySelector("button[name=remove]").addEventListener("click", deleteTr)
}

window.onload = () => {
  asignEvents()
}