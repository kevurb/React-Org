import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Form/Formulario.js';
import Organizacion from './componentes/Organizacion/index.js'
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';


function App() {
  const [mostrarFormulario,actulizarVista] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    nombre:'Kevin urbina',
    puesto: 'DevOps',
    foto:'/logo192.png',
    equipo:'Programacion'

  }])


  const cambiarMostrar =() =>{
    actulizarVista(!mostrarFormulario);
  }
  //lista equipos
  const equipos = [
    {
    nombre: "Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"},
    {nombre: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"},
    {nombre: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"},
    {nombre: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"},
    {nombre: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"},
    {nombre: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"},
    {nombre: "Innovacion y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },

]
  const registrarColaborador= (colaborador)=>{
    console.log("Nuevo Colab",colaborador)
    //Spread operator  ... -> copia elemento
    actualizarColaboradores([...colaboradores, colaborador])
  }
 const eliminarColaborador = () =>{
    console.log("COLAB ELIMINADO");
 }
  
  //ternario -> condicion ? (si) seMuestra : NoMuestra (no)
    return (
    <div className ="app">
      
      <Header/>
      { 
      mostrarFormulario && <Formulario 
      equipos={equipos.map((equipo)=>equipo.nombre)}
      registrarColaborador= {registrarColaborador}
      />
      }
      <Organizacion cambiarMostrar={cambiarMostrar}/>

      {equipos.map((equipo)=> <Equipo 
      datos={equipo}
      key={equipo.nombre}
      colaboradores = {colaboradores.filter(colaborador => colaborador.equipo === equipo.nombre)}
      eliminarColaborador = {eliminarColaborador}
      />)}
       <Footer></Footer>
    </div>
   
  );
}

export default App;
