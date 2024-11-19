import { frases } from './citas.js'

/**
 * Recupera un elemento de la página web.
 * @param selector {string} Selector de elemento.
 * @returns {HTMLElement}
 */
const $ = (selector) => document.querySelector(selector)

window.onload = () => {
  const frase = frases[Math.floor(Math.random() * frases.length)]
  const p = document.createElement("p")
  const div = $("#frase")

  p.innerText = frase

  div.appendChild(p)
}