const cambiarTexto = (e) => {
  const texto = prompt("Inserte el texto por el que quieres cambiar");

  if (!texto) {
    return;
  }

  e.target.innerText = texto;
}

const resaltarElemento = (e) => {
  if (e.type === "mouseover") {
    e.target.classList.add("resaltado");
  } else {
    e.target.classList.remove("resaltado");
  }
}

const contarParrafos = () => {
  alert("El numero de parrafos es: " + document.querySelectorAll("p").length)
}

const manejadorEventos = (e) => {
  if (e.type === "click" && e.target.tagName === "P") {
    cambiarTexto(e);
  } else if (e.type === "mouseover" && e.target.tagName === "P") {
    resaltarElemento(e);
  } else if (e.type === "mouseout" && e.target.tagName === "P") {
    resaltarElemento(e);
  } else if (e.type === "click" && e.target.tagName === "BUTTON") {
    contarParrafos();
  }
}

window.onload = () => {
  const parrafos = document.querySelectorAll("#parrafos");
  parrafos.forEach(p => {
    p.addEventListener("click", manejadorEventos);
    p.addEventListener("mouseover", manejadorEventos);
    p.addEventListener("mouseout", manejadorEventos);
  });

  document.querySelector("#contar").addEventListener("click", manejadorEventos);
}