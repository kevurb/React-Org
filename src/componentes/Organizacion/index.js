import "./Organizacion.css"

//import  {boton} from  "../../../public/img/boton-form.png"

const Organizacion = (props) => {
    //estado -- hook
        //funcion useSatate() parametro initial value
        //console.log(useState);
        //estado-< const [nombreVariable, funcionQueActualiza] = useState(valirInicial)
        
        
    /*const eventoClickImagen = () =>{
        //console.log("entra click", !mostrar);
        props.cambiarMostrar();
        
    }*/
    return <section className="org-section">
        <h3 className="org-titulo"> Mi Organización</h3>
        <img src="img/boton-form.png" alt="hide-form" onClick={props.cambiarMostrar}></img>
    </section>
}
export default Organizacion