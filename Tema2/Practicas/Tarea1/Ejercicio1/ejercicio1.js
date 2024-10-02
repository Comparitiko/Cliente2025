/**
 *
 * @param {HTMLElement} selector
 * @returns
 */
const $ = (selector) => document.querySelector(selector);

const subrayadoBtn = $("#subrayado");
const fondoBtn = $("#fondo");
const textoBtn = $("#texto");
const tamnioBtn = $("#tamanio");

subrayadoBtn.addEventListener("click", () =>
  subrayadoBtn.classList.toggle("subrayado")
);

const colors = ["red", "blue", "yellow"];

const colorsFondo = [...colors, "white"];
let cambiosFondo = 0;
fondoBtn.addEventListener("click", () => {
  const color = colorsFondo[cambiosFondo < 4 ? cambiosFondo : cambiosFondo % 4];
  cambiosFondo++;
  fondoBtn.style.backgroundColor = color;
});

const colorsTexto = [...colors, "black"];
let cambiosTexto = 0;
textoBtn.addEventListener("click", () => {
  const color = colorsTexto[cambiosTexto < 4 ? cambiosTexto : cambiosTexto % 4];
  cambiosTexto++;
  textoBtn.style.color = color;
});

let tamanios = ["x-large", "xx-large", "medium"];
let cambiosTamanio = 0;
tamnioBtn.addEventListener("click", () => {
  const tamanio =
    tamanios[cambiosTamanio < 3 ? cambiosTamanio : cambiosTamanio % 3];
  cambiosTamanio++;
  tamnioBtn.style.fontSize = tamanio;
});
