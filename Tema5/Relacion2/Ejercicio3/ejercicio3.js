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

const lienzos = $$(".lienzo")

let ultimoImgTocado = ""

lienzos.forEach(lienzo => {
  lienzo.addEventListener("click", () => {
    if (lienzo.innerHTML === "" && !ultimoImgTocado.src) return

    if (!ultimoImgTocado.src) {
      console.log("No image guardada")
      ultimoImgTocado = $(`#${lienzo.id} > img`)
      console.log({ultimoImgTocado})
    } else {
      console.log("Si imagen guardada")
      const imageEl = $(`#${lienzo.id} > img`)
      if (imageEl) {
        console.log("Con imagen en div")
        const newImageSrc = imageEl.src
        imageEl.src = ultimoImgTocado.src
        ultimoImgTocado.src = newImageSrc
      } else {
        console.log("Sin imagen en div")
        const img = document.createElement("img")
        img.src = ultimoImgTocado.src
        lienzo.appendChild(img)
        ultimoImgTocado = img.src
        ultimoImgTocado.innerHTML = ""
      }
    }
  })
})