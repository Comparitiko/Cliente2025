/*
  3. Hacer una función en JavaScript que recibe un número del mes (0 Enero, 11
  Diciembre) y devuelve el mes en letra en formato completo (Enero, Febrero, ...,
  Diciembre).
*/

const saberMes = (mesNum) => {
  switch (mesNum) {
    case 0:
      return "Enero"
    case 1:
      return "Febrero"
    case 2:
      return "Marzo"
    case 3:
      return "Abril"
    case 4:
      return "Mayo"
    case 5:
      return "Junio"
    case 6:
      return "Julio"
    case 7:
      return "Agosto"
    case 8:
      return "Septiembre"
    case 9:
      return "Octubre"
    case 10:
      return "Noviembre"
    case 11:
      return "Diciembre"
    default:
      return "Has ingresado el numero mal"
  }
}

const hoy = new Date()

alert(`Estamos en el mes de ${saberMes(hoy.getMonth())}`)

