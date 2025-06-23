function filtrarMayores(personas) {
  return personas.filter(persona => persona.edad >= 18);
}
const personas = [
  { nombre: "Ana", edad: 17 },
  { nombre: "Luis", edad: 21 },
  { nombre: "Marta", edad: 18 },
  { nombre: "Diego", edad: 16 }
];

console.log(filtrarMayores(personas));