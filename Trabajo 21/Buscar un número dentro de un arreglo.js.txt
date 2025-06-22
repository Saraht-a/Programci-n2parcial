et numeros = [12, 7, 34, 5, 89, 23];
let buscado = 12; 
let encontrado = false;

let i = 0;
while (i < numeros.length && !encontrado) {
  if (numeros[i] === buscado) {
    encontrado = true;
  }
  i++;
}

if (encontrado) {
  console.log(`El número ${buscado} sí se encuentra en el arreglo.`);
} else {
  console.log(`El número ${buscado} NO se encuentra en el arreglo.`);