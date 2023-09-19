import "./Colaborador.css"
import { TiDelete } from "react-icons/ti"
const Colaborador = (props) =>{
    const {nombre, puesto, foto}= props.datos
    const {colorPrimario, eliminarColaborador} = props
    //console.log("los datos del colab",nombre,puesto)
    return <div className="colaborador">
        < TiDelete className="eliminar"onClick={eliminarColaborador} />
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img src={foto}alt="kevurb"></img>
        </div>
        <div className="informacion">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>

}
export default Colaborador