// AUTOR  : GABRIEL EMILIO PINO JAIMES

import TarjetaPelicula from  "./TarjetaPelicula";

function CatalogoPeliculas({peliculas}){
    return(
        <div>
            {peliculas.map((pelicula) => (
                <TarjetaPelicula  key={pelicula.id} titulo={pelicula.titulo} director={pelicula.director} anio={pelicula.anio} calificacion={pelicula.calificacion}/>
            ))}
        </div>
    )
}

export default CatalogoPeliculas;