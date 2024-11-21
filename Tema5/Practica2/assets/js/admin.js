import {$} from './lib.js'

const nombreInp = $("#nombre")
const apellidoInp = $("#apellidos")
const passwordInp = $("#contrasenia")
const confPassInp = $("#rep-contrasenia")
const fechaNacInp = $("#fecha-nac")

const pasarAMayus = (e) => {
  let newStr = ""
  for (let i = 0; i < e.target.value.length; i++) {
    if (i === 0) newStr += e.target.value[i].toUpperCase()
    else newStr += e.target.value[i].toLowerCase()
  }

  e.target.value = newStr
}

const verificarNombre = () => {
  const p = $("#nombre-error")
  const pattern = /^[a-zA-Z]+$/;
  if (nombreInp.value.trim() === "" || !pattern.test(nombreInp.value.trim())) {
    p.innerText = "El nombre introducido no es valido, asegurese que tenga solo letras"
    nombreInp.classList.add("error")
    return false
  }
  p.innerText = ""
  nombreInp.classList.remove("error")
  return true
}

const verificarApellidos = () => {
  const p = $("#apellidos-error")
  const pattern = /^[a-zA-Z]+$/;
  if (apellidoInp.value.trim() === "" || !pattern.test(apellidoInp.value.trim())) {
    p.innerText = "Los apellidos introducidos no son validos asegurate que solo tenga letras"
    apellidoInp.classList.add("error")
    return false
  }
  p.innerText = ""
  apellidoInp.classList.remove("error")
  return true
}

const verificarPassword = () => {
  const p = $("#contrasenia-error")
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[;,.\\-])[a-zA-Z\d;,.\\-]+$/
  if (passwordInp.value === "" || !pattern.test(passwordInp.value)) {
    p.innerText = "La contraseña introducida no es segura, tiene que tener minimo un caracter" +
      " alfabético, una mayúscula, una minúscula, un digito decimal un caracter(punto y coma, coma, punto, guion)" +
      " Ninguno distinto a los anteriores"
    passwordInp.classList.add("error")
    return false
  }
  p.innerText = ""
  passwordInp.classList.remove("error")
  return true
}

const verifirRepPassword = () => {
  const p = $("#rep-contrasenia-error")
  if (confPassInp.value.trim() !== passwordInp.value.trim()) {
    p.innerText = "Las contraseñas tienen que ser iguales"
    confPassInp.classList.add("error")
    return false
  }
  p.innerText = ""
  confPassInp.classList.remove("error")
  return true
}

const verificarDate = () => {
  const p = $("#fecha-nac-error")
  const pattern = /^\d{2}\/\d{2}\/\d{4}$/
  if (fechaNacInp.value.trim() === "" || !pattern.test(fechaNacInp.value.trim())) {
    p.innerText = "La fecha tiene que tener el formato dd/mm/aaaa"
    fechaNacInp.classList.add("error")
    return false
  }
  p.innerText = ""
  fechaNacInp.classList.remove("error")
  return true
}

window.onload = () => {
  $("#admin-form").addEventListener("submit", (e) => {
    if (verificarNombre() && verificarApellidos() && verificarPassword() && verifirRepPassword() && verificarDate()) {
      alert("Confirmado")
    }
    e.preventDefault()
  })

  nombreInp.addEventListener("blur", pasarAMayus)
  apellidoInp.addEventListener("blur", pasarAMayus)
}