let numeros = [12, 7, 5, 8, 20, 33, 2, 9, 14, 0]; // Puedes cambiar o ampliar este arreglo
let pares = 0;
let impares = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

console.log("Cantidad de números pares:", pares);
console.log("Cantidad de números impares:", impares);