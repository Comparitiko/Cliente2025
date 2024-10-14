// 16. Hacer una página en JavaScript que incluya 2 funciones, una llamada abreventana y
// otra llamada cierraventana.
// - abreventana -> abre una nueva ventana de tamaño 200x100
// - cierraventana -> cierra una ventana que hemos abierto con abreventana

let ventana

// Abrir solo una ventana
const abreVentana = () => {
  if (!ventana || ventana.closed) {
    ventana = window.open("http://localhost:63342", "Pagina de google", "width=200,height=100")
  }
}

// Cerrar la ventana si esta abierta
const cierraVentana = () => {
  console.log(ventana.closed)
  if (ventana && !ventana.closed) {
    ventana.close()
  }

}