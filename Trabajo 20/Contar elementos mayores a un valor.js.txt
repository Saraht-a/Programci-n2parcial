let numeros = [5, 12, 9, 21, 3, 15, 7]; 
let i = 0;
let contador = 0;

while (i < numeros.length) {
  if (numeros[i] > 10) {
    contador++;
  }
  i++;
}

console.log("Cantidad de elementos mayores a 10:", contador);