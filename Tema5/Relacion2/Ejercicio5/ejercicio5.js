const textoArea = document.querySelector("#texto")
const inputTam = document.querySelector("#tam")
const searchBtn = document.querySelector("#buscar")
const resultDiv = document.querySelector("#result")

searchBtn.addEventListener("click", () =>{
  resultDiv.innerHTML = ''
  const texto = textoArea.value
  const textArr = texto.split(" ")

  const tamanio = parseInt(inputTam.value)

  const filteredArr = textArr.filter(item => item.length === tamanio)

  filteredArr.forEach(item => {
    const h2 = document.createElement("h2")
    h2.innerText = item
    resultDiv.appendChild(h2)
  })
})