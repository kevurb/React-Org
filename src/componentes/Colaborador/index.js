import "./Colaborador.css"
import { TiDelete } from "react-icons/ti"
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai"


const Colaborador = (props) =>{
    const {nombre, puesto, foto, id , fav}= props.datos
    const {colorPrimario, eliminarColaborador, like} = props
    //console.log("los datos del colab",nombre,puesto)
    //Arrow fn para eliminar colaborador () => eliminarColaborador(id)
    // condicion ?  true : false
    return <div className="colaborador">
        < TiDelete className="eliminar"onClick={() => eliminarColaborador(id)} />
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img src={foto} alt="photoPerson"></img>
        </div>
        <div className="informacion">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        {fav ? <AiFillHeart color="red" onClick={()=>like(id)}/> : <AiOutlineHeart onClick={()=>like(id)}/>}
        
        
        </div>
    </div>

}
export default Colaborador