/**
 * Recupera un elemento de la página web.
 * @param selector {string} Selector de elemento.
 * @returns {HTMLElement}
 */
const $ = (selector) => document.querySelector(selector)

/**
 * Recupera varios elementos de la página web.
 * @param selector {string} Selector de elementos.
 * @returns {NodeList<HTMLElement>}
 */
const $$ = (selector) => document.querySelectorAll(selector)

const personas = []
const seleccionarTodosInput = $('#todos')
const deseleccionarTodosInput = $('#ninguno')

const itemsInputs = $$('input[name=item]')

const submitBtn = $('input[type=button]')

const nombresTextArea = $("#nombresText")

seleccionarTodosInput.addEventListener('click', () => {
  if (deseleccionarTodosInput.checked) deseleccionarTodosInput.checked = false
  itemsInputs.forEach(item => item.checked = true)
})

deseleccionarTodosInput.addEventListener('click', () => {
  // Comprobar si el checkbox de seleccionar todos está marcado para desmarcarlos
  if (seleccionarTodosInput.checked) seleccionarTodosInput.checked = false
  itemsInputs.forEach(item => item.checked = false)
})

window.onload =  () => {
  // Cargar personas en el array
  personas.push('pepe', 'lola', 'juan', 'lucas', 'lorena', 'asunta', 'gabriel');

  // Modificar los inputs con los nombres de las personas
  itemsInputs.forEach((item, index) => {
    item.value = personas[index]
  })

  submitBtn.addEventListener('click', () => {
    // Obtener los valores de los inputs que esten checked
    const personasSeleccionadas = []

    itemsInputs.forEach((item) => {
      if (item.checked) personasSeleccionadas.push(item.value)
    })

    nombresTextArea.innerText = personasSeleccionadas.join(", ")

  })
}