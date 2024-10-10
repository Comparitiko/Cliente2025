// 13. Realizar un programa que permita cargar una dirección de mail e implementar una
// función que verifique si el String tiene cargado el carácter @.

const email = prompt("Ingrese el email")

const index = email.indexOf("@")

if (index < 0) alert("No has puesto un @")
else alert("Has puesto el @")