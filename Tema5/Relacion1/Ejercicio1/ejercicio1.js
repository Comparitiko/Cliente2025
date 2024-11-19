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

const seleccionarTodosInput = $("#todos")
const deseleccionarTodosInput = $("#ninguno")

const itemsInputs = $$("input[type=checkbox][name=item]")

seleccionarTodosInput.addEventListener("click", () => {
  if (deseleccionarTodosInput.checked) deseleccionarTodosInput.checked = false
  itemsInputs.forEach(item => item.checked = true)
})

deseleccionarTodosInput.addEventListener("click", () => {
  // Comprobar si el checkbox de seleccionar todos está marcado para desmarcarlos
  if (seleccionarTodosInput.checked) seleccionarTodosInput.checked = false
  itemsInputs.forEach(item => item.checked = false)
})