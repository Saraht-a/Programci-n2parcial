let arreglo = [23, 88, 51, 12, 97, 30, 65];
let contador = 0;

for (let i = 0; i < arreglo.length; i++) {
  if (arreglo[i] > 50) {
    contador++;
  }
}

console.log("Cantidad de elementos mayores a 50:", contador);