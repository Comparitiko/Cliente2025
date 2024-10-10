/*
  4. Hacer una función en JavaScript que recibe un número del mes (0 Ene, 11 Dic) y
devuelve el mes en letra en formato corto (Ene, Feb, ..., Dic)
Comprobar dicha función mediante la fecha actual con el día obtenido por getMonth()
*/

/*
  3. Hacer una función en JavaScript que recibe un número del mes (0 Enero, 11
  Diciembre) y devuelve el mes en letra en formato completo (Enero, Febrero, ...,
  Diciembre).
*/

const saberMes = (mesNum) => {
  switch (mesNum) {
    case 0:
      return "Ene"
    case 1:
      return "Feb"
    case 2:
      return "Mar"
    case 3:
      return "Abr"
    case 4:
      return "May"
    case 5:
      return "Jun"
    case 6:
      return "Jul"
    case 7:
      return "Ago"
    case 8:
      return "Sep"
    case 9:
      return "Oct"
    case 10:
      return "Nov"
    case 11:
      return "Dic"
    default:
      return "Has ingresado el numero mal"
  }
}

const hoy = new Date()

alert(`Estamos en el mes de ${saberMes(hoy.getMonth())}`)

