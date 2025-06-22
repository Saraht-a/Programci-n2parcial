let arreglo1 = [1, 2, 3, 4, 5, 6];
let arreglo2 = [4, 5, 6, 7, 8, 9];

let comunes = arreglo1.filter(elemento => arreglo2.includes(elemento));

console.log("Elementos comunes:", comunes); // Resultado: [4, 5, 6]