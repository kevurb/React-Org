import "./Campo.css"
//aimport {useState} from 'react'
const Campo = (props) =>{
   //console.log("datos",props);
   //const [valor,actValor] = useState("");
   const cambiosEnInput =(e)=>{
      //Sconsole.log(e.target.value)
      props.actualizarValor(e.target.value); //llena el valor gracias al evento
    }
    const { type= "texto" } = props
    return <div className={`campo campo-${type}`}>
       <label>{props.texto}</label>
       <input placeholder={props.placeholder}
        required={props.required}
        value={props.valor}
        onChange={cambiosEnInput}
        type={type}
        
        ></input>
    </div>
}
export default Campo