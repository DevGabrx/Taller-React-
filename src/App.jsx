// AUTOR : GABRIEL EMILIO PINO JAIMES 
import './App.css'
import TarjetaContacto from './components/TarjetaContacto'
import Imagen from '../src/assets/images/person.png'
import CatalogoPeliculas from './components/CatalagoPeliculas'
import ResultadoIMC from './components/ResultadoIMC' 

function App() {

  const peliculas = [
  {
    id: 1,
    titulo: "Star Wars: Episodio III - La venganza de los Sith",
    director: "George Lucas",
    anio: 2005,
    genero: "Ciencia ficción",
    calificacion: 8.0
  },
  {
    id: 2,
    titulo: "Cars",
    director: "John Lasseter",
    anio: 2006,
    genero: "Animación",
    calificacion: 7.2
  },
  {
    id: 3,
    titulo: "Misión de rescate",
    director: "Sam Hargrave",
    anio: 2020,
    genero: "Acción",
    calificacion: 6.8
  },
  {
    id: 4,
    titulo: "Papita, Maní, Tostón",
    director: "Luis Carlos Hueck",
    anio: 2013,
    genero: "Comedia",
    calificacion: 7.1
  },
  {
    id: 5,
    titulo: "Click",
    director: "Frank Coraci",
    anio: 2006,
    genero: "Comedia/Fantasía",
    calificacion: 3.7
  }
];

const personas = [ 
{ id: 1, nombre: 'Carlos Ruiz',   peso: 70, altura: 1.75 }, 
{ id: 2, nombre: 'Laura Torres',  peso: 55, altura: 1.62 }, 
{ id: 3, nombre: 'Jorge Perez',   peso: 95, altura: 1.70 }, 
{ id: 4, nombre: 'Sofia Medina',  peso: 48, altura: 1.68 }, 
];

  return (
    <>
    <div>
       <h1>Ejercicio 1 : Tarjetas de Contacto</h1>
        {/* tarjeta 1 */}
         <TarjetaContacto imagen={Imagen} nombre={"Gabriel Pino"} correo={"gabriel@gmail.com"} ciudad={"Maturin"} ocupacion={"Desarrollador Backend"} />

        <TarjetaContacto imagen={Imagen} nombre={"Maria"} correo={"Maria@gmail.com"} ciudad={"Barranquilla"} ocupacion={"Desarolladora Frontend"}/>

        <TarjetaContacto  imagen={Imagen} nombre={"Ted Mosby"} correo={"ted@gmail.com"} ciudad={"New York"} ocupacion={"Arquitecto"} />
    </div>

    <h1>Ejercicio 2 : Catalago de Peliculas</h1>
    <div>
    <CatalogoPeliculas peliculas={peliculas}></CatalogoPeliculas>
    </div>


    <h1>Ejercicio 3 : Resultados IMC</h1>
    <div>
      {personas.map((persona)=>(
         <ResultadoIMC  key={persona.id} nombre={persona.nombre} peso={persona.peso} altura={persona.altura} />
      ))}
    </div>
 
    </>
  )
}

export default App
