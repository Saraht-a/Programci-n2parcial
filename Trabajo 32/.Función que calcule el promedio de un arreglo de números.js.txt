function promedio(numeros) {
  if (numeros.length === 0) return 0; 
  const suma = numeros.reduce((acc, num) => acc + num, 0);
  return suma / numeros.length;
}
console.log(promedio([10, 20, 30]));      
console.log(promedio([5, 15, 25, 35]));   
console.log(promedio([]));               
