import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Form/Formulario.js';
import Organizacion from './componentes/Organizacion/index.js'
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';
import { v4 as uuid } from 'uuid';

function App() {
  //estados
  const [mostrarFormulario,actulizarVista] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true,
    
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "/logo512.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: true,
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false,
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false,
    
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: true,
    
  }])
  const [equipos, actulizarEquipos] = useState([
    {
      id: uuid(),
      nombre: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"},
    {
      id: uuid(),
      nombre: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"},
    {
      id: uuid(),
      nombre: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"},
    {
      id: uuid(),
      nombre: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"},
    {
      id: uuid(),
      nombre: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"},
    {
      id: uuid(),
      nombre: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"},
    {
      id: uuid(),
      nombre: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },

])
 
//FUNCIONES DE ACTULIZAR ESTADOS 
  const cambiarMostrar =() =>{
    actulizarVista(!mostrarFormulario);
  }
// actualizar color de equipo
  const actulizarColor = (color, id) =>{
    const equiposActulizados = equipos.map((equipo)=>{
      if(equipo.id === id ){
        equipo.colorPrimario = color
      }
      return equipo
    })
      //console.log(id)
      actulizarEquipos(equiposActulizados);
  }
  const registrarColaborador= (colaborador)=>{
    //console.log("Nuevo Colab",colaborador)
    //Spread operator  ... -> copia elemento
    actualizarColaboradores([...colaboradores, colaborador])
  }
 const eliminarColaborador = (id) =>{

    const newColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(newColaboradores);
 }
 //crear equipo
 const crearEquipo = (nuevoEquipo) =>{
    actulizarEquipos([...equipos, {...nuevoEquipo, is: uuid()}]);
 }

 // funcion like 
 const like =(id)=>{
  console.log("Like", id);
  const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
       return colaborador
  })
    actualizarColaboradores(colaboradoresActualizados)
 }

  //ternario -> condicion ? (si) seMuestra : NoMuestra (no)
    return (
    <div className ="app">
      
      <Header/>
      { 
      mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo)=>equipo.nombre)}
        registrarColaborador= {registrarColaborador}
        crearEquipo={crearEquipo}
      />
      }
      <Organizacion cambiarMostrar={cambiarMostrar}/>

      {equipos.map((equipo)=> <Equipo 
      datos={equipo}
      key={equipo.nombre}
      colaboradores = {colaboradores.filter(colaborador => colaborador.equipo === equipo.nombre)}
      eliminarColaborador = {eliminarColaborador}
      actulizarColor = {actulizarColor}
      like = {like}
      />)}
       <Footer></Footer>
    </div>
   
  );
}

export default App;
