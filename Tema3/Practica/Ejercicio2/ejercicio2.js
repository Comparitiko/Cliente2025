// Realiza un programa que pasados 20 segundos, nos muestre una sola vez la fecha actual del
// sistema.

/**
 * Espera 20 segundos y muestra la fecha actual
 */
setTimeout(() => {
  const fechaActual = new Date()
  const year = fechaActual.getFullYear()
  const month = fechaActual.getMonth() + 1
  const day = fechaActual.getDate() < 10 ? `0${fechaActual.getDate()}` : fechaActual.getDate()
  alert(`La fecha actual es ${day}-${month}-${year}`)
}, 2000)