let arreglo = [3, -2, 5, -8, 0, 7, -1];

let reemplazados = arreglo.map(num => num < 0 ? 0 : num);

console.log("Arreglo con negativos reemplazados por 0:", reemplazados);