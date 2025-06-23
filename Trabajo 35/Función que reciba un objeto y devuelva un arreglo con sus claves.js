function obtenerClaves(objeto) {
  return Object.keys(objeto);
}
const persona = {
  nombre: "Sarita",
  edad: 25,
  ciudad: "Tegucigalpa"
};

console.log(obtenerClaves(persona)); 