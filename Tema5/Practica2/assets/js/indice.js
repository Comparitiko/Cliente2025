import {$, getCookie, setCookie} from './lib.js'

const webCookie = isNaN(parseInt(getCookie("visitas")))
  ? 1
  : parseInt(getCookie("visitas"))

/**
 * Manejar evento de click en el boton de indice
 */
const handleIndiceButton = () => {
  window.location.replace("./indice.html")
}

/**
 * Manejar evento de click en el boton de admin
 */
const handleAdminButton = () => {
  window.location.replace("./admin.html")
}

/**
 * Manejar evento de click en el boton de preguntas
 */
const handlePreguntasButton = () => {
  window.location.replace("./preguntas.html")
}

window.onload = () => {
  const $visitasWeb = $("#visitas-web")
  setCookie("visitas", (webCookie + 1).toString(), 10)

  $visitasWeb.innerText = webCookie.toString()

  $("#indice-btn").addEventListener("click", handleIndiceButton)
  $("#admin-btn").addEventListener("click", handleAdminButton)
  $("#preguntas-btn").addEventListener("click", handlePreguntasButton)
}