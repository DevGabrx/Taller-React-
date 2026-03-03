// AUTOR : GABRIEL EMILIO PINO JAIMES

function TarjetaPelicula({ titulo, director, anio, calificacion }) {
  if (calificacion >= 4.5) {
    calificacion = "Excelente ⭐⭐⭐";
  } else if (calificacion >= 3.5) {
    calificacion = "Buena ⭐⭐" ;
  } else {
    calificacion = "Regular ⭐";
  }
  console.log(calificacion);

  return (
    <div className="TarjetaPelicula">
      <p>Titulo : {titulo}</p>
      <p>Director : {director}</p>
      <p>Año : {anio}</p>
      <p>Calificacion : {calificacion}</p>
    </div>
  );
}

export default TarjetaPelicula;
