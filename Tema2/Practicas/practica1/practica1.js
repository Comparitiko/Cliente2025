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

// // Ejercicio 33

// const tiempos = {
//   SOL: "SOL",
//   NUBLADO: "NUBLADO",
//   LLUVIA: "LLUVIA",
// };

// const predicciones = {
//   SOLSOL: "SOL",
//   NUBLADONUBLADO: "NUBLADO",
//   LLUVIALLUVIA: "LLUVIA",
//   SOLNUBLADO: "NUBLADO",
//   NUBLADOSOL: "SOL",
//   SOLLLUVIA: "NUBLADO",
//   LLUVIASOL: "NUBLADO",
//   NUBLADOLLUVIA: "LLUVIA",
//   LLUVIANUBLADO: "NUBLADO",
// };

// const tiempo = (ayer, hoy) => {
//   if ((!ayer, !hoy))
//     throw new Error(
//       "Introduce el tiempo que hizo ayer y el que esta haciendo hoy"
//     );

//   const tiempoAyer = tiempos[ayer.toUpperCase()];
//   const tiempoHoy = tiempos[hoy.toUpperCase()];

//   if (!tiempoAyer || !tiempoHoy)
//     throw new Error("Introduce los valores correctamente");

//   const tiempoAyerHoy = `${tiempoAyer}${tiempoHoy}`;

//   const prediccion = predicciones[tiempoAyerHoy];

//   alert(`El tiempo para mañana sera de ${prediccion}`);
// };

// const ayer = prompt("Ingrese el tiempo de ayer", "nublado");
// const hoy = prompt("Ingrese el tiempo de hoy", "nublado");

// console.log(tiempos[ayer]);

// tiempo(ayer, hoy);

// // Ejercicio 39

// const reqNum = () => {
//   let num;
//   do {
//     num = parseInt(prompt("Ingrese un numero"));
//   } while (isNaN(num));
//   return num;
// };

// const isPerfectNumber = (numero) => {
//   let divisores = [];

//   for (let i = 1; i <= numero / 2; i++) {
//     if (numero % i === 0) divisores.push(i);
//   }

//   const suma = divisores.reduce((prev, curr) => prev + curr);

//   return suma === numero;
// };

// const num = reqNum();

// const isPerfect = isPerfectNumber(num);

// alert(
//   isPerfect ? `El numero ${num} es perfecto` : `El numero ${num} no es perfecto`
// );

// // Ejercicio 3 relacion 2
// for (let i = 1; i <= 300; i++) {
//   const num = document.createElement("p");

//   num.innerText = i;

//   if (i % 2 === 0 && i % 3 === 0) {
//     num.classList.add("multiplo-2-3");
//   } else if (i % 2 === 0) {
//     num.classList.add("multiplo-2");
//   } else if (i % 3 === 0) {
//     num.classList.add("multiplo-3");
//   }

//   document.body.appendChild(num);
// }

// // Ejercicio 1 relacion 2

// const generarTabla = (filas, columnas) => {
//   const table = document.createElement("table");

//   for (let i = 1; i <= filas; i++) {
//     const tr = document.createElement("tr");
//     for (let j = 1; j <= columnas; j++) {
//       const td = document.createElement("td");

//       td.innerText = `${i}, ${j}`;

//       if (j % 2 === 0) td.classList.add("primo");

//       tr.appendChild(td);
//     }
//     table.appendChild(tr);
//   }

//   document.body.appendChild(table);
// };

// generarTabla(10, 20);

// Ejercicio 2 relacion 2
const numInput = document.querySelector("#num-dni");
const letraInput = document.querySelector("#letra-dni");

const letras = {
  0: "T",
  1: "R",
  2: "W",
  3: "A",
  4: "G",
  5: "M",
  6: "Y",
  7: "F",
  8: "P",
  9: "D",
  10: "X",
  11: "B",
  12: "N",
  13: "J",
  14: "Z",
  15: "S",
  16: "Q",
  17: "V",
  18: "H",
  19: "L",
  20: "C",
  21: "K",
  22: "E",
};

numInput.addEventListener("keyup", (e) => {
  if (isNaN(parseInt(e.key))) {
    if (e.key === "Backspace") {
      letraInput.value = "";
      return;
    }
    const numArr = numInput.value.split("");
    numArr[numArr.length - 1] = "";
    numInput.value = numArr.join("");
  }

  const num = numInput.value;

  if (num.length < 8) {
    letraInput.value = "";
    return;
  }

  const numArr = num.split("");

  const sumaNums = numArr.reduce((prev, curr) => {
    return prev + parseInt(curr);
  });

  const letra = letras[sumaNums % 23];

  letraInput.value = letra;
});
