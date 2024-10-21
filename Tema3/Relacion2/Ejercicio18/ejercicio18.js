const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

window.addEventListener("DOMContentLoaded" ,() => {
  const enlaces = $$("a")

  const penultimoEnlace = enlaces[enlaces.length -2]

  const enlacesAPrueba = Array.from(enlaces).filter((enlace) => enlace.href.includes("http://prueba"))

  const enlaces3Parrafo = $$("p:nth-of-type(3) a")

  alert(`La pagina tiene ${enlaces.length} enlaces`)

  alert(`El penultimo enlace de la pagina apunta a ${penultimoEnlace.href}`)

  console.log(enlaces3Parrafo.length)

  alert(`En el tercer parrafo hay ${enlaces3Parrafo.length} enlaces`)

  if (enlacesAPrueba.length === 0) alert(`No hay enlaces que sean http://prueba`);
  else alert(`Hay un total de ${enlacesAPrueba.length} enlaces que lleven a http://prueba`);
})
