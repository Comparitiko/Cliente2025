/**
 * Recupera un elemento de la página web.
 * @param selector {string} Selector de elemento.
 * @returns {HTMLElement}
 */
const $ = (selector) => document.querySelector(selector)

const resDiv = $("#resultado")
const divisa = $("#divisa")
const cantidad = $("#cantidad")

const conversorForm = $("#conversor")

conversorForm.addEventListener("submit", (e) => {
  // Prevenir acciones por defecto
  e.preventDefault()

  // Recuperar valores de los inputs
  const cantidadEuros = cantidad.value
  const cambioDivisa = divisa[divisa.selectedIndex]

  // Comprobar si los valores estan mal insertados
  if (!cantidadEuros || cantidadEuros <= 0) return
  if (!cambioDivisa || cambioDivisa.value === 0) return;

  // Calcular cambio de divisa
  const resultado = cantidadEuros * cambioDivisa.value

  // Pintar resultado
  resDiv.innerText = `${cantidadEuros}€ son ${resultado} de ${cambioDivisa.text}`
})
