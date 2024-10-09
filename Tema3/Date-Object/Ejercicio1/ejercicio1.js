/*
1. Hacer una función en JavaScript que recibe un número del día de la semana (0
Domingo, 6 Sábado) y devuelve el día en letra en formato completo (Domingo, Lunes,
Martes, Miércoles, Jueves, Viernes, Sábado). Comprobar dicha función mediante la
fecha actual con el día obtenido por getDay().
*/

const dia = parseInt(prompt("Ingresa el numero de la semana del 0 al 6"))

const saberDia = (diaNum) => {
  switch (diaNum) {
    case 0:
      return "Domingo"
    case 1:
      return "Lunes"
    case 2:
      return "Martes"
    case 3:
      return "Miercoles"
    case 4:
      return "Jueves"
    case 5:
      return "Viernes"
    case 6:
      return "Sabado"
    default:
      return "Has ingresado el numero mal"
  }
}

alert(`El dia que pertenece al número ${dia} es el ${saberDia(dia)}`)
