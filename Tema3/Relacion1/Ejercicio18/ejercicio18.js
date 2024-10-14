// 18. Hacer una página web que redireccione a otra automáticamente al entrar
// previo a la muestra de un mensaje (alert) para advertirnos que nuestra
// página web ha cambiado de dirección y ahora es la nueva la que estamos
// cargando con replaceh

const cambiarPagina = () => {
  alert('Seras redirigido a otra página ya que se ha cambiado la página')
  location.replace("https://google.es")
}

window.onload = cambiarPagina