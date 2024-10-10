/*2. Hacer una función en JavaScript que recibe un número del día de la semana (0 Dom, 6
Sab) y devuelve el día en letra en formato corto (Dom, Lun, Mar, Mie, Jue, Vie,
Sab)Comprobar dicha función mediante la fecha actual con el día obtenido por
getDay()*/

const saberDia = (diaNum) => {
  switch (diaNum) {
    case 0:
      return "Dom"
    case 1:
      return "Lun"
    case 2:
      return "Mar"
    case 3:
      return "Mie"
    case 4:
      return "Jue"
    case 5:
      return "Vie"
    case 6:
      return "Sab"
    default:
      return "Has ingresado el numero mal"
  }
}

const hoy = new Date()

alert(`Hoy es ${saberDia(hoy.getDay())}`)

