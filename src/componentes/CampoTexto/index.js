import "./CampoTexto.css"
//aimport {useState} from 'react'
const CampoTexto = (props) =>{
   //console.log("datos",props);
   //const [valor,actValor] = useState("");
   const cambiosEnInput =(e)=>{
      //Sconsole.log(e.target.value)
      props.actualizarValor(e.target.value); //llena el valor gracias al evento
    }
    return <div className="campo-texto">
       <label>{props.texto}</label>
       <input placeholder={props.placeholder}
        required={props.required}
        value={props.valor}
        onChange={cambiosEnInput}
        
        ></input>
    </div>
}
export default CampoTexto