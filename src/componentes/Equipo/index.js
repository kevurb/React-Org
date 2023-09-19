import "./Equipo.css"
import "../Colaborador/index"
import Colaborador from "../Colaborador/index"
const Equipo = (props) =>{
    //destructuracion
    const {colorPrimario, colorSecundario, nombre } = props.datos
    const {colaboradores, eliminarColaborador} =props 
    const obj ={
        backgroundColor : colorSecundario
    }
    const estiloTitulo ={borderColor : colorPrimario}
    return <>
    { colaboradores.length >0 && <section className="equipo" style={obj}>
        <h3 style={estiloTitulo}>{nombre}</h3>
        <div className="colaboradores">
            {
                colaboradores.map((colaborador,index)=><Colaborador 
                datos={colaborador}
                key={index} 
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                />
                )}
        </div>
    </section>
    }</>
    
}
export default Equipo