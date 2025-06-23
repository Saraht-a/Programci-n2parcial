function eliminarDuplicados(arr) {
  return [...new Set(arr)];
}
console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4, 5]));  
console.log(eliminarDuplicados(["a", "b", "a", "c"]));  
console.log(eliminarDuplicados([34, 5, 34, 56]));                    