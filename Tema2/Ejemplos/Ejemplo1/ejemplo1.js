document.getElementById("main-title").innerText =
  "Hola Mundo con document.getElementById"; // Escribe en el elemento con id main-title
document.write("<h1>Hola Mundo con document.write</h1>"); // Escribe en el HTML
console.log("Hola Mundo");

const nombre = prompt("Introduce tu nombre", "Gabriel");
document.write(`<h1>Hola ${nombre}</h1>`); // Escribe en el HTML

const number = parseInt(prompt("Introduce un número entero", 2));
document.write(
  `<h2>El numero introducido sumandole 100 es ${number + 100}</h2> `
);

console.log(number);

const res = confirm("¿Te gusta el futbol?");

const message = res ? "Te gusta el futbol" : "No te gusta el futbol";

alert(message);
