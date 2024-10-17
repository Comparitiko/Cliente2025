// Realiza un programa que reciba una cadena con el siguiente formato:
// “nombre:apellidos:telefono:email:codigopostal”
// Tras recibir la cadena, debe desglosar y mostrar la siguiente información:
  // ● Código postal.
  // ● Apellidos.
  // ● Email.
  // ● Suponiendo un formato de email “direccion@servidor” debe mostrar el nombre del
  // servidor asociado.

const informacion = prompt("Ingrese la informacion con este formato 'nombre:apellidos:telefono:email:codigopostal'")

// Pintar la informacion separando los valores por los dos puntos
const pintarInformacion = () => {
  const infoArr = informacion.split(":")
  const ul = document.createElement("ul")

  const liCP = document.createElement("li")
  const liApellidos = document.createElement("li")
  const liEmail = document.createElement("li")
  const liServidorEmail = document.createElement("li")

  liCP.innerText = infoArr[infoArr.length - 1]
  liApellidos.innerText = infoArr[1]
  liEmail.innerText = infoArr[3]
  liServidorEmail.innerText = infoArr[3].split("@")[1]

  ul.appendChild(liCP)
  ul.appendChild(liApellidos)
  ul.appendChild(liEmail)
  ul.appendChild(liServidorEmail)

  document.body.appendChild(ul)
}

pintarInformacion()