import { useState } from "react";
import "./Formulario.css"
import CampoTexto from "../CampoTexto/";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";


const Formulario = (props) => {
    const [nombre, actualizarNombre]= useState("");
    const [puesto, actualizarPuesto]= useState("");
    const [foto, actualizarFoto]= useState("");
    const [equipo, actualizarEquipo]= useState("");
    const {registrarColaborador}=props
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
    
    return <section className="formulario">
        <form onSubmit={sendForm}>
            <h2>Rellena esta informacion para crear el colaborador</h2>
            <CampoTexto texto="Nombre" 
            placeholder= "Ingrese Nombre" 
            required 
            valor={nombre} 
            actualizarValor ={actualizarNombre}/>
            <CampoTexto texto="Puesto" 
            placeholder= "Ingrese Puesto"
            required
            valor={puesto} 
            actualizarValor={actualizarPuesto}
            />
            <CampoTexto texto="Foto"   
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

    </section>


}

export default Formulario;