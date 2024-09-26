// Practica 1
// const num1 = parseInt(prompt("Ingrese el primer numero", 5));
// const num2 = parseInt(prompt("Ingrese el segundo numero", 5));

// alert(`
// 	El resultado de sumar ${num1} y ${num2} es ${num1 + num2}.
// 	Gracias por usar este programa
// `);

// // Ponte a prueba 1
// /*
// 	1. ¿Se genera algun tipo de error?
// 		- Si, la j esta declarada como let y se esta intentando usar en el global scope

// 	2. En el caso de que no se genere error, ¿qué resultado se mostrara en la consola?
// 		- Solo genera error al imprimir j lo demas se imprime correctamente
// */

// /*
// 	2.32. Hacer una página JavaScript que contenga una función pirámide que
// 	recibe 2 parámetros, un carácter (que puede ser cualquiera) y un número, la
// 	función debe mostrar por pantalla una pirámide invertida con el carácter
// 	recibido (tantas filas y columnas como indique el numero, y de ahí
// 	descendiendo hasta 1).
// */

// const piramide = document.querySelector("#piramide");

// /**
//  *
//  * @param {string} caracter caracter que se pintara en la linea
//  * @param {number} numero numero de veces que se pintara
//  */
// const pintarLineaPiramide = (caracter, numero) => {
//   const linea = document.createElement("h2");

//   for (let i = numero; i !== 0; i--) {
//     linea.innerText += caracter;
//   }
//   piramide.appendChild(linea);
// };

// /**
//  *
//  * @param {string} caracter
//  * @param {number} numero
//  */
// const pintarPiramide = (caracter, numero) => {
//   if (isNaN(numero))
//     throw new Error("El segundo parametro debe de ser un numero");

//   for (let i = numero; i !== 0; i--) {
//     pintarLineaPiramide(caracter, i);
//   }
// };

// const caracter = prompt("Ingrese el caracter a pintar en la piramide", "@");
// const numeroLineas = parseInt(
//   prompt("Ingrese el numero de lineas que se pintaran en la piramide", 7)
// );

// pintarPiramide(caracter, numeroLineas);

// let tabla;

// while (!tabla || tabla < 1 || tabla > 10) {
//   tabla = parseInt(prompt("Ingrese una tabla del 1 al 10", 5));
//   if (!tabla || tabla < 1 || tabla > 10) {
//     alert("Ingrese un valor del 1 al 10");
//   }
// }

// const tbody = document.querySelector("#table-body");

// for (let i = 1; i <= 10; i++) {
//   const tr = document.createElement("tr");

//   const celdaTabla = document.createElement("td");
//   const celdaNumeroMultiplicador = document.createElement("td");
//   const celdaResultado = document.createElement("td");

//   celdaTabla.innerText = tabla;
//   celdaNumeroMultiplicador.innerText = i;
//   celdaResultado.innerText = tabla * i;

//   tr.appendChild(celdaTabla);
//   tr.appendChild(celdaNumeroMultiplicador);
//   tr.appendChild(celdaResultado);

//   tbody.appendChild(tr);
// }

// document.querySelector("#hidden-table").classList.remove("oculto");

const tiempos = {
  SOL: "SOL",
  NUBLADO: "NUBLADO",
  LLUVIA: "LLUVIA",
};

const predicciones = {
  SOLSOL: "SOL",
  NUBLADONUBLADO: "NUBLADO",
  LLUVIALLUVIA: "LLUVIA",
  SOLNUBLADO: "NUBLADO",
  NUBLADOSOL: "SOL",
  SOLLLUVIA: "NUBLADO",
  LLUVIASOL: "NUBLADO",
  NUBLADOLLUVIA: "LLUVIA",
  LLUVIANUBLADO: "NUBLADO",
};

const tiempo = (ayer, hoy) => {
  if ((!ayer, !hoy))
    throw new Error(
      "Introduce el tiempo que hizo ayer y el que esta haciendo hoy"
    );

  const tiempoAyer = tiempos[ayer.toUpperCase()];
  const tiempoHoy = tiempos[hoy.toUpperCase()];

  if (!tiempoAyer || !tiempoHoy)
    throw new Error("Introduce los valores correctamente");

  const tiempoAyerHoy = `${tiempoAyer}${tiempoHoy}`;

  const prediccion = predicciones[tiempoAyerHoy];

  alert(`El tiempo para mañana sera de ${prediccion}`);
};

const ayer = prompt("Ingrese el tiempo de ayer", "nublado");
const hoy = prompt("Ingrese el tiempo de hoy", "nublado");

console.log(tiempos[ayer]);

tiempo(ayer, hoy);
