import "./Equipo.css"
import "../Colaborador/index"
import Colaborador from "../Colaborador/index"
import hexToRgba from "hex-to-rgba"

const Equipo = (props) =>{
    //destructuracion
    const {colorPrimario, nombre, id } = props.datos
    const {colaboradores, eliminarColaborador, actulizarColor, like} =props 
    const obj ={
        backgroundColor : hexToRgba(colorPrimario, 0.5)
    }
    const estiloTitulo ={borderColor : colorPrimario}
    //console.log(hexToRgba(colorPrimario, 0.5))
    return <>
    { colaboradores.length >0 && 
    <section className="equipo" style={obj}>
        <input
         type='color'
         className="input-color"
         value={colorPrimario} 
         onChange={(e)=>{
            actulizarColor(e.target.value, id);
            //console.log("Actualizar color", id);
        }}
         />
            
    
        <h3 style={estiloTitulo}>{nombre}</h3>
        <div className="colaboradores">
            {
                colaboradores.map((colaborador,index)=><Colaborador 
                datos={colaborador}
                key={index} 
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
                />
                )}
        </div>
    </section>
    }</>
    
}
export default Equipo