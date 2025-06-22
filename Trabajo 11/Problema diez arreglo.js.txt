let palabras = ["ventana", "sol", "mariposa", "día", "universo", "pan"];
let contador = 0;

for (let i = 0; i < palabras.length; i++) {
  if (palabras[i].length > 5) {
    contador++;
  }
}

console.log("Palabras con más de 5 letras:", contador);