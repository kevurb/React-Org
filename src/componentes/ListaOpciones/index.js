import "./index.css"
const ListaOpciones = (props)=>{
    //metodo map para iterar en JSX
    /* arreglo.map( (equipo, index) =>{ 
            return <option></option>
    }) 
    NO SE PUEDE HACER A UN OBJETO
    */
   /* const equipos = [
        "Programacion",
        "Front End",
        "Data Science",
        "DevOps",
        "UX y Diseño",
        "Móvil",
        "Innovacion y Gestión"

    ]*/
     
    const capturaValor = (e) =>{
       props.actualizarValor(e.target.value);
    }
    return <div className="lista-opciones">
        <label >Equipos</label>
        <select value ={props.valor} onChange={capturaValor}>
                <option value=""disabled defaultValue="" hidden>Seleccionar Equipo</option>
                {props.equipos.map( (equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>

    </div>
}
export default ListaOpciones