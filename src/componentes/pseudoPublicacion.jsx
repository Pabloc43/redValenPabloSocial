import React from 'react'
import Comentario from './comentario';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'


export default function Publicacion(props) {
    let {imgSubio, imgUser, nombre, fecha, comentarios, idP, descripcion, titulo} = props
  return (
    <section className="hero" data-id={idP}>
    <div className="container">
     <div className="row">	
     
      <div className="col-lg-6 offset-lg-3">
       
       <div className="cardbox shadow-lg bg-white">
        
        <div className="cardbox-heading">

         <div className="media m-0">
          <div className="d-flex mr-3">
           <a href=""><img className="img-fluid rounded-circle" src={imgUser} alt="User"></img></a>
          </div>
          <div className="media-body">
           <p className="m-0">{nombre}</p>
          </div>
         </div>
        </div>
         
        <div className="cardbox-item">
         <img className="img-fluid" src={imgSubio} alt="Image"></img>
        </div>
        <div className="cardbox-base">
         <ul>
          <li><a><span><h3>{titulo}</h3></span></a></li><br/>
          <li><a><span><p>{descripcion}</p></span></a></li><br/>
          <li><a><span>{fecha}</span></a></li>
         </ul>			   
        </div>
         <details className="text-dark ">
          <summary className='list-style-none'>{comentarios.length} comentarios </summary>
          <ul>
            {comentarios.map((comentario, index) => {
              return (<Comentario key={index} usuarioComenta={comentario.userComent} contenido={comentario.contenido} imagen={comentario.IMGp} fecha={comentario.fecha}/>)})}
          </ul>
         </details>
         <input placeholder="Write a comment" type="text"></input>
          <button><FontAwesomeIcon icon={faCirclePlus} /></button>
        </div>		  
               
       </div>

      </div>
     </div>
   </section>
    )
}
