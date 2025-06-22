let numeros = [3, -1, 0, 7, -4, 0, 5, -9, 2, 0]; 
let i = 0;
let positivos = 0;
let negativos = 0;
let ceros = 0;

while (i < numeros.length) {
  if (numeros[i] > 0) {
    positivos++;
  } else if (numeros[i] < 0) {
    negativos++;
  } else {
    ceros++;
  }
  i++;
}

console.log("Cantidad de positivos:", positivos);
console.log("Cantidad de negativos:", negativos);
console.log("Cantidad de ceros:", ceros);