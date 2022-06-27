import React from 'react'

export default function Comentario(props) {
    let {usuarioComenta, contenido, imagen, fecha} = props
  return (
            <div className="people-nearby">
              
              <div className="nearby-user">
                <div className="row">
                  <div className="col-md-2 col-sm-2">
                    <img src={imagen} alt="user" className="profile-photo-lg"></img>
                  </div>
                  <div className="col-md-7 col-sm-7">
                    <h5><a href="#" className="profile-link">{usuarioComenta}</a></h5>
                    <p>{contenido}</p>
                    <p className="text-muted">{fecha}</p>
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <button className="btn btn-primary pull-right">Add Friend</button>
                  </div>
                </div>
              </div>
            </div>
  )
}
