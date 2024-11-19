// Dado los siguientes arrays:
//
// poblaciones =['Localidad', 'Enero', 'Febrero', 'Marzo', 'Abril']
//
// temperaturas = [['Cuevas del Alamanzora',12,13,15,18],['Granada', 4.5, 8, 9, 15], ['Madrid', 4, 5.8, 8, 13], ['Soria', 0, 1,6,10]]
//
// Se pide:
//
// ·         Calcular la media de  Temperatura por cada población.
//
// ·         Calcula la temperatura más alta en Marzo y a que población corresponde.
//
// ·         Calcula la media de la temperatura en el mes de abril.
//
// ·         Mostrar la población  con peor media de temperatura.
//
// ·         Añade la población: ['Málaga', 14, 16.7, 18.4,20.3]
//
//  Para ello construye una tabla donde muestres los resultados.

const temperaturas = [
  ["Cuevas del Alamanzora", 12, 13, 15, 18],
  ["Granada", 4.5, 8, 9, 15],
  ["Madrid", 4, 5.8, 8, 13],
  ["Soria", 0, 1, 6, 10],
]

// Añadir Málaga
temperaturas.push(['Málaga', 14, 16.7, 18.4,20.3])

// 1. Calcular la media de  Temperatura por cada población.
const calcularMedias = () => {
  const medias = []

  for (let i = 0; i < temperaturas.length; i++) {
    let suma = 0
    for (let j = 1; j < temperaturas[i].length; j++) {
      suma += temperaturas[i][j]
    }
    const mediaPueblo = [temperaturas[i][0], suma / (temperaturas[i].length - 1)]
    medias.push(mediaPueblo)
  }

  return medias
}

// 2. Calcula la temperatura más alta en Marzo y a que población corresponde.
const temperaturaMasAltaMarzoConPoblacion = () => {
  const tmpAltaMarzo = []
  const indiceMarzo = 3

  for (let i = 0; i < temperaturas.length; i++) {
    if (temperaturas[i][indiceMarzo] > tmpAltaMarzo[1] || tmpAltaMarzo.length === 0) {
      tmpAltaMarzo[0] = temperaturas[i][0]
      tmpAltaMarzo[1] = temperaturas[i][indiceMarzo]
    }
  }

  return tmpAltaMarzo
}

// 3. Calcula la media de la temperatura en el mes de abril.
const mediaTemperaturaEnAbril = () => {
  let suma = 0
  const indiceAbril = 4

  for (let i = 0; i < temperaturas.length; i++) {
    suma += temperaturas[i][indiceAbril]
  }

  return suma / temperaturas.length
}

// 4. Mostrar la población  con peor media de temperatura.
const poblacionConMediaMenor = () => {
  const medias = calcularMedias()

  medias.sort((a, b) => a[1] - b[1])
  return medias[0]
}

window.addEventListener('DOMContentLoaded', () => {
  const tablaTemperaturas = document.getElementById('tabla-temps')
  const tmpAltaMarzo = document.getElementById('tmp-alta-marzo')
  const tmpMediaAbril = document.getElementById('tmp-media-abril')
  const poblacionMenor = document.getElementById('poblacion-media-menor')

  const medias = calcularMedias()
  const temperaturaMasAltaMarzo = temperaturaMasAltaMarzoConPoblacion()
  const mediaTemperaturaAbril = mediaTemperaturaEnAbril()
  const poblacionMediaMenor = poblacionConMediaMenor()

  for (let i = 0; i < temperaturas.length; i++) {
    const tr = document.createElement("tr")

    for (let j = 0; j < temperaturas[i].length; j++) {
      const td = document.createElement("td")
      td.innerText = temperaturas[i][j]
      tr.appendChild(td)
    }

    const tdMedia = document.createElement("td")
    tdMedia.innerText = medias[i][1]
    tr.appendChild(tdMedia)

    tablaTemperaturas.appendChild(tr)
  }

  tmpAltaMarzo.innerText = `La temperatura mas alta en Marzo ha sido: ${temperaturaMasAltaMarzo[1]}°C en la población ${temperaturaMasAltaMarzo[0]}`

  tmpMediaAbril.innerText = `La temperatura media en Abril ha sido: ${mediaTemperaturaAbril}°C`

  poblacionMenor.innerText = `La población con menor media de temperatura ha sido: ${poblacionMediaMenor[0]}`
})
