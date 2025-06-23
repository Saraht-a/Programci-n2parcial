function esPalindromo(palabra) {
  const limpia = palabra.toLowerCase().replace(/[\W_]/g, '');
  const invertida = limpia.split('').reverse().join('');
  return limpia === invertida;
}
console.log(esPalindromo("Radar"));         
console.log(esPalindromo("Anita lava la tina")); 
console.log(esPalindromo("JavaScript"));  