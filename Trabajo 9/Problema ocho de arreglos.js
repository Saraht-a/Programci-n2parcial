// Crear un arreglo del 1 al 100
let numeros = Array.from({ length: 100 }, (_, i) => i + 1);

// Filtrar los que no sean múltiplos de 5
let sinMultiplosDe5 = numeros.filter(num => num % 5 !== 0);

console.log(sinMultiplosDe5);