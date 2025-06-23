let numeros = [23, 89, 12, 45, 67, 450, 34, 78]; // Puedes modificar o generar tu propio arreglo

let maximo = numeros[0]; // Inicializamos con el primer valor

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maximo) {
    maximo = numeros[i];
  }
}

console.log("El número más grande es:", maximo);