import { useState } from "react";
import "./Formulario.css"
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";


const Formulario = (props) => {
    const [nombre, actualizarNombre]= useState("");
    const [puesto, actualizarPuesto]= useState("");
    const [foto, actualizarFoto]= useState("");
    const [equipo, actualizarEquipo]= useState("");
    const [nombreEquipo, actualizarNombreEquipo]= useState("");
    const [colorEquipo, actulizarColorEquipo]=useState("");
    
    const {registrarColaborador, crearEquipo}=props
    const sendForm = (e) =>{
        e.preventDefault();
        let datosAEnviar = {
            nombre,
            puesto : puesto,
            foto,
            equipo : equipo,
        }
        registrarColaborador(datosAEnviar);
       // console.log("SE ENVIO",e);

    }

    const controladorForm2 = (e) =>{
        e.preventDefault();
        crearEquipo({nombre:nombreEquipo, colorPrimario:colorEquipo});

    }
    
    return <section className="formulario">
        <form onSubmit={sendForm}>
            <h2>Rellena esta informacion para crear el colaborador</h2>
            <Campo texto="Nombre" 
            placeholder= "Ingrese Nombre" 
            required 
            valor={nombre} 
            actualizarValor ={actualizarNombre}/>
            <Campo texto="Puesto" 
            placeholder= "Ingrese Puesto"
            required
            valor={puesto} 
            actualizarValor={actualizarPuesto}
            />
            <Campo texto="Foto"   
            placeholder="Ingrese enlace de foto" 
            required
            valor={foto} 
            actualizarValor={actualizarFoto}
            />
            <ListaOpciones 
            valor={equipo} 
            actualizarValor={actualizarEquipo} 
            equipos = {props.equipos}
            ></ListaOpciones>
            <Boton texto="Crear"></Boton>

        </form>
        <form onSubmit={controladorForm2}>
            <h2>Rellena esta informacion para crear un nuevo equipo</h2>
            <Campo texto="Nombre del Equipo" 
            placeholder= "Ingrese nombre del equipo" 
            required 
            valor={nombreEquipo} 
            actualizarValor ={actualizarNombreEquipo}/>
            <Campo texto="Color" 
            placeholder= "Ingrese el color en hexadecimal"
            required
            valor={colorEquipo} 
            actualizarValor={actulizarColorEquipo}
            type = "color"
            />
            <Boton 
            texto="Registrar Equipo"
            ></Boton>
            </form>
    </section>


}

export default Formulario;