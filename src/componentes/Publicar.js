import {useState} from 'react';
import Publicacion from './pseudoPublicacion';


export default function Publicar(props) {
    let {publicacionesViejas} = props
    let [publiNuevas, setPubliNuevas] = useState([]);
    let [titulo, setTitulo] = useState("");
    let [ruta, setRuta] = useState("");
    let [descripcion, setDescripcion] = useState("");

    let id = localStorage.getItem("idUsers");
    let usuario = {}
    function usuarioPorId(id){
        try {
            return usuario = {
                "nameUser": id,
                "imgP": publiNuevas[publiNuevas.length - 1].imgS
            }
        } catch (error) {
            console.log('Buenos dias')
        }

        
    }
    function onTitulo(event){

        setTitulo(event.target.value);
    };

    function onRuta(event){
        setRuta(event.target.value)
    };
    function onDescripcion(event){
        setDescripcion(event.target.value)
    };

    function objetosPublicacion(id, usuario, imgS, titulo, descripcion, fecha, comentarios){
        return {
            "id": id,
            "nameUser": usuario.nameUser,
            "imgS": imgS,
            "imgP": usuario.imgP,
            "titulo": titulo,
            "descripcion": descripcion,
            "fecha": fecha,
            "comentarios": comentarios
        }
    }


    function agregar(){
        usuarioPorId(id)
        let fecha = new Date;
        let objetoPublicacion = objetosPublicacion(id, usuario, ruta, titulo, descripcion, fecha.toISOString().split('T')[0], []);
        setPubliNuevas([objetoPublicacion, ...publiNuevas]);
    }
    console.log(publiNuevas)

    
    return (
    <>
        <div className="container booking-form hero">
            <div className='row justify-content-center'>
                <div className="col-md-8">
                    <div className="form-group flex-wrap">
                        <label htmlFor="titulo" className="form-label me-2">Titulo</label>
                        <input id='titulo' onChange={onTitulo} className="form-control" type="text" placeholder="Ingresa un titulo" required/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group flex-wrap">
                        <label htmlFor="ruta" className="form-label me-2">Ruta</label>
                        <input type="text" className='form-control' id="ruta" placeholder="Ingrese ruta" required onChange={onRuta}/>
                    </div>
                </div>
                <div className="col-md-8 form-group flex-wrap">
                    <label htmlFor="descripcion" className="form-label me-2">Descripcion</label>
                    <textarea className='w-100 form-control ' id="descripcion" placeholder='Ingrese una descripcion' required onChange={onDescripcion}></textarea>
                </div>
                <div className="col-md-4 divMolesto">
                    <div className="form-btn">
                        <button className="submit-btn" onClick={agregar}>Publicar</button>
                    </div>
                </div>
            </div>
        </div>
        
        {publiNuevas.map((publicacion, index) => {
        return <Publicacion key={index} imgSubio={publicacion.imgS} imgUser={publicacion.imgP} nombre={publicacion.nameUser} 
        fecha={publicacion.fecha} comentarios={publicacion.comentarios} idP={publicacion.id} 
        descripcion={publicacion.descripcion} titulo={publicacion.titulo}/>
      })}
        
        {publicacionesViejas.map((persona) => {
        return persona.publicaciones.map((publicacion, index) => 
        <Publicacion key={index} imgSubio={publicacion.imgS} imgUser={publicacion.imgP} nombre={publicacion.nameUser} 
        fecha={publicacion.fecha} comentarios={publicacion.comentarios} idP={persona.idUsers} 
        descripcion={publicacion.descripcion} titulo={publicacion.titulo} />)
      })}
    </>
  )
}
