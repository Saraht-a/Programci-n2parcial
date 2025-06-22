let numeros = [1, 89, 12, 45, 67, 101, 34, 78]; // Puedes modificar o ampliar este arreglo

let minimo = numeros[0]; // Comenzamos con el primer valor como mínimo

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] < minimo) {
    minimo = numeros[i];
  }
}

console.log("El número más pequeño es:", minimo);