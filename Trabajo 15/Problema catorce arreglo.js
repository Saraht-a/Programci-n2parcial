let edades = [18, 22, 35, 41, 27, 30];

let suma = edades.reduce((acumulador, edad) => acumulador + edad, 0);
let promedio = suma / edades.length;

console.log("Edad promedio:", promedio.toFixed(2));