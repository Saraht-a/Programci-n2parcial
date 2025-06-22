let Nosotros = [5, -3, 0, 12, -7, 0, 8, -1, 6, 0, -4, 15, -9, 2, 0, -6, 10, 0, -2, 3];

let positivos = 0;
let negativos = 0;
let ceros = 0;

for (let i = 0; i < Nosotros.length; i++) {
  if (Nosotros[i] > 0) {
    positivos++;
  } else if (Nosotros[i] < 0) {
    negativos++;
  } else {
    ceros++;
  }
}

console.log("Cantidad de positivos:", positivos);
console.log("Cantidad de negativos:", negativos);
console.log("Cantidad de ceros:", ceros);