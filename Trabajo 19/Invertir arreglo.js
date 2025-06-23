let original = [10, 20, 30, 40, 50]; 
let invertido = [];

let i = original.length - 1; 

while (i >= 0) {
  invertido.push(original[i]);
  i--;
}

console.log("Arreglo original:", original);
console.log("Arreglo invertido:", invertido);