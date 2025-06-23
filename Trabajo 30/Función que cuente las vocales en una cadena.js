function contarVocales(texto) {
  const vocales = texto.match(/[aeiouáéíóúü]/gi);
  return vocales ? vocales.length : 0;
}
console.log(contarVocales("Sarita"));          
console.log(contarVocales("Hola mundo"));      
console.log(contarVocales("Criptografía"));    