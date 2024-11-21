import {$, $$} from './lib.js'

const textInputs = $$(".form-control-preguntas > input[type=text]")
const radialInputs = $$(".form-control-preguntas > input[type=radio]")

// Añadir evento keydown a los input tipo texto para que al escribir se marque la casilla de ru pregunta
textInputs.forEach((textInp, index) => {
  textInp.addEventListener("keydown", () => {
    radialInputs[index].checked = true
  })
})

const textArea = $("texarea#pregunta")


