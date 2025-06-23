function formatearTiempo(segundos) {
  const horas = Math.floor(segundos / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);
  const seg = segundos % 60;

  const hh = String(horas).padStart(2, '0');
  const mm = String(minutos).padStart(2, '0');
  const ss = String(seg).padStart(2, '0');

  return `${hh}:${mm}:${ss}`;
}
console.log(formatearTiempo(3661)); 
console.log(formatearTiempo(45));  
console.log(formatearTiempo(7320)); 