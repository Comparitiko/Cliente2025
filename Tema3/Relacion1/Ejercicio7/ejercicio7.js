// 7. Hacer un generador de quinielas en JavaScript, hay que generar 15 resultados 1, X o 2

const randomCeroADos = () => Math.floor(Math.random() * 3)

const saber1X2 = (num) => {
  switch (num) {
    case 0:
      return "1"
    case 1:
      return "X"
    case 2: return "2"
  }
}

for (let i = 0; i < 15; i++) {
  alert(`El numero ${i + 1} de la quiniela esta marcado como ${saber1X2(randomCeroADos())}`)
}