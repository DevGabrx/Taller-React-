// AUTOR : GABRIEL EMILIO PINO JAIMES 
function TarjetaContacto( {imagen,nombre,correo,ciudad,ocupacion}){
    return(
        <div className="tarjetaContacto">
            <h1>Tarjeta de Contacto</h1>
            <img src={imagen}/>
            <p>Nombre :{nombre}</p>
            <p>Correo : {correo}</p>
            <p>Ciudad : {ciudad}</p>
            <p>Ocupacion : {ocupacion}</p>
        </div>
    )
}

export default TarjetaContacto;