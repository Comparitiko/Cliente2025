window.onload = () => {
  document.querySelector("#enviar").addEventListener("click", e => {
    if (validarNombre() && validarApellido() && validarEdad() && validarMatricula() && validarProvincia() && confirmEnviar()) {
      let intentos = parseInt(getCookie("intentos"))

      if (!intentos) intentos = 0

      intentos++

      setCookie("intentos", intentos)

      alert(`Has enviado el formulario ${intentos} veces`)
    }

    e.preventDefault()
    return false
  })
}

function validarNombre() {
  const nombre = document.querySelector("#nombre")
  if (nombre.value === "") {
    nombre.focus()
    nombre.className = "error";
    alert("El nombre no debe estar vacio")
    return false;
  }

  nombre.value = nombre.value.toUpperCase()
  nombre.className = ""
  return true;
}

function validarApellido() {
  const apellido = document.querySelector("#apellido")
  if (apellido.value === "") {
    apellido.focus()
    apellido.className = "error";
    alert("El apellido no debe estar vacio")
    return false;
  }

  apellido.value = apellido.value.toUpperCase()
  apellido.className = ""
  return true;
}

function validarEdad() {
  const edad = document.querySelector("#edad")
  if (edad.value === "" || isNaN(parseInt(edad.value))) {
    edad.focus()
    edad.className = "error";
    alert("La edad no debe estar vacia")
    return false;
  }

  if (parseInt(edad.value) < 18) {
    edad.focus()
    edad.className = "error";
    alert("La edad debe ser mayor igual que 18")
    return false;
  }
  edad.className = ""
  return true;
}

function validarMatricula() {
  const matricula = document.querySelector("#matricula")
  const regex = /^\d{4}\s?[A-Z]{3}$/
  if (matricula.value === "" || !regex.test(matricula.value)) {
    matricula.focus()
    matricula.className = "error";
    alert("La matricula no debe estar vacia y debe de seguir el patron")
    return false;
  }
  matricula.className = ""
  return true;
}

function validarProvincia() {
  const provincia = document.querySelector("select")
  if (provincia.selectedIndex === 0) {
    provincia.focus()
    provincia.className = "error"
    alert("La provincia no debe estar vacia")
    return false;
  }

  provincia.className = ""
  return true;
}

function confirmEnviar() {
  return confirm("Quiere enviar el formulario")
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + ";path=/";
}