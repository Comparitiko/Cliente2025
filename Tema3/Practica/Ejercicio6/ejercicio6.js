// Validar los datos introducidos en el formulario y pasarlos a otra ventana:
// ● El nombre que no esté vacío, si está vacío que te muestre un mensaje que te diga que
// tienes que rellenarlo.
// ● La edad que sea mayor de 18 años, si no es que te muestre un mensaje.
// ● Su afición también seleccionada, si está vacío que te muestre otro mensaje.
// ● Una vez que todo está ok pasar los datos a otra ventana de 500 X500 cuyo título de la
// ventana será Validación de formulario, y luego una cabecera con los datos que hemos
// pasado de tamaño H1 que nos diga por ejemplo: y además input color para poder cambiar
// el color de la nueva ventana.

const form = document.querySelector("#form")
const nombreInput = document.querySelector("#nombre")
const edadInput = document.querySelector("#edad")
const aficionesInput = document.querySelector("select")
const errores = document.querySelector("#errores")

// Pintar la ventana emergente
const pintarVentana = (nombre, edad, aficion) => {
  const ventana = window.open("", "Informacion del usuario", "width=500px,height=500px")

  const h1 = ventana.document.createElement("h1")
  h1.innerText = `Tu nombre es ${nombre}, tienes ${edad} años y tu aficion es ${aficion}`
  ventana.document.body.appendChild(h1)

  const inputColor = ventana.document.createElement("input")
  inputColor.type = "color"
  inputColor.addEventListener("change", () => {
    ventana.document.body.style.backgroundColor = inputColor.value
  })
  ventana.document.body.appendChild(inputColor)
}

// Añadir escuha del evento submit en formulario y comprobar los valores, una vez comprobados llamar al metodo para
// pinta la venta emergente
form.addEventListener("submit", (e) => {
  errores.innerText = ""
  e.preventDefault()
  const nombre = nombreInput.value
  const edad = edadInput.value
  const aficion = aficionesInput.value.toLowerCase()

  // Comprobar si existen los valores
  if (!nombre) return errores.innerText = "El nombre es obligatorio"
  if (!edad) return errores.innerText = "La edad es obligatoria"
  if (aficion === "elegir") return errores.innerText = "Seleccione una aficion"

  // Comprobar si la edad es mayor o igual que 18
  if (edad < 18) return errores.innerText = "La edad tiene que ser un numero mayor o igual que 18"

  pintarVentana(nombre, edad, aficion)
})
