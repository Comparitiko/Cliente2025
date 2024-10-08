/**
 *
 * @param {HTMLElement} selector
 * @returns
 */
const $ = (selector) => document.querySelector(selector);

const subrayadoBtn = $("#subrayado");
const fondoBtn = $("#fondo");
const textoBtn = $("#texto");
const tamanioBtn = $("#tamanio");
const texto = $("#parrafo");

subrayadoBtn.addEventListener("click", () =>
  texto.classList.toggle("subrayado")
);

const colors = ["red", "blue", "yellow"];

const colorsFondo = [...colors, "white"];
let cambiosFondo = 0;
fondoBtn.addEventListener("click", () => {
  const color = colorsFondo[cambiosFondo < 4 ? cambiosFondo : cambiosFondo % 4];
  cambiosFondo++;
  texto.style.backgroundColor = color;
});

const colorsTexto = [...colors, "black"];
let cambiosTexto = 0;
textoBtn.addEventListener("click", () => {
  const color = colorsTexto[cambiosTexto < 4 ? cambiosTexto : cambiosTexto % 4];
  cambiosTexto++;
  texto.style.color = color;
});

let tamanios = ["x-large", "xx-large", "medium"];
let cambiosTamanio = 0;
tamanioBtn.addEventListener("click", () => {
  const tamanio =
    tamanios[cambiosTamanio < 3 ? cambiosTamanio : cambiosTamanio % 3];
  cambiosTamanio++;
  texto.style.fontSize = tamanio;
});
