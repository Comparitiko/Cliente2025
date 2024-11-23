import {$, $$} from './lib.js'

const textInputs = $$(".form-control-preguntas > input[type=text]")
const radialInputs = $$(".form-control-preguntas > input[type=radio]")

const patternPregunta = /^¿[A-Z][a-zA-Z\s¡!¿?.,;]*(?:\.\s[a-zA-Z\s¡!¿?.,;]*)*\?$/

// Añadir evento keydown a los input tipo texto para que al escribir se marque la casilla de ru pregunta
textInputs.forEach((textInp, index) => {
  textInp.addEventListener("keydown", () => {
    radialInputs[index].checked = true
  })
})

const textArea = $("textarea#pregunta")
const preguntaDiv = $("#pregunta-div")
const p = document.createElement("p")
p.style.color = "red"
preguntaDiv.appendChild(p)

textArea.addEventListener("change", () => {
  if (!patternPregunta.test(textArea.value)) {
    p.innerText = "Escriba bien la pregunta, debe de empezar por ¿, tener una mayus despues del interrogante," +
      " despues de puntos un espacio y finalizar por ?"
  } else {
    p.innerText = ""
  }
})

$("#form-preguntas").addEventListener("submit", (e) => {
  const categoria = $("#categoria")
  const pregunta = textArea.value

  // Comprobar que la pregunta no este vacia y cumpla la regexp
  if (pregunta === "" && !patternPregunta.test(pregunta)) {
    alert("La pregunta no puede estar vacia y debe de ser valida")
    e.preventDefault()
    return
  }

  const respuestas = []

  let inputChecked = false

  textInputs.forEach((input, key) => {
    // Comprobar si las respuestas estan vacias
    if (input.value === "") {
      alert("Las respuestas no pueden estar vacias")
      e.preventDefault()
      return
    }

    // Comprobar si el input tipo radio ha sido marcado
    if (radialInputs[key].checked) inputChecked = true

    respuestas.push({value: input.value, correct: radialInputs[key].checked})
  })

  // Comprobar si hay alguno checkeado
  if (!inputChecked) {
    alert("Tiene que haber alguna respuesta como verdadera")
    e.preventDefault()
    return
  }

  alert(`
    Categoria: ${categoria.value}
    Pregunta: ${pregunta}
    Respuesta 1: ${respuestas[0].value} ${respuestas[0].correct ? "Correcta" : ""}
    Respuesta 2: ${respuestas[1].value} ${respuestas[1].correct ? "Correcta" : ""}
    Respuesta 3: ${respuestas[2].value} ${respuestas[2].correct ? "Correcta" : ""}
    Respuesta 4: ${respuestas[3].value} ${respuestas[3].correct ? "Correcta" : ""}
  `)
})



