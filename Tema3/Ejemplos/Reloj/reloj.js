const iniciarReloj = () => {
  const timeEl = document.querySelector("#time")
  setInterval(() => {
    const now = new Date()
    const actualHours = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours()
    const actualMinutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes()
    const actualSeconds = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds()
    timeEl.innerText = `${actualHours}:${actualMinutes}:${actualSeconds}`
  }, 1000)
}

const crearElemento = () => {
  const time = document.createElement("h1")
  time.id = "time"

  document.body.appendChild(time)
  iniciarReloj()
}

window.onload = crearElemento