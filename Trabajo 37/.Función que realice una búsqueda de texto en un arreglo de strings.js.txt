function buscarTexto(lista, termino) {
  const terminoMin = termino.toLowerCase();
  return lista.filter(item => item.toLowerCase().includes(terminoMin));
}
const frutas = ["Manzana", "Banano", "Sandía", "Mango", "Mandarina"];

console.log(buscarTexto(frutas, "man")); 


console.log(buscarTexto(frutas, "ía"));  


console.log(buscarTexto(frutas, "pera")); 