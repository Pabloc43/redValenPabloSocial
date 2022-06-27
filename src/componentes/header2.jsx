import React from 'react'
import Logo from '../logo192.jpg'

export default function header2(props) {
  let {borrar} = props;
  return (
    <header className="position-sticky top-0 ">
        <nav className="navbar navbar-expand-lg navbar-red navbar-dark d-flex justify-content-center">
        <div className="wrapper">
          
        </div>
  <div className="container-fluid all-show justify-content-center d-flex">
    <a className="navbar-brand d-none d-md-block" href="#"><img className='logo' src={Logo}></img> Tuki-Social </a>

    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Amigos</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Perfil</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">contact</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#"><i className="fa fa-search"></i></a>
        </li>
        
        
      </ul>
    </div>
    <form>
        <button className='btn btn-secondary' onClick={borrar}>Cerrar sesion</button>
        </form>
  </div>

</nav>

    </header>
  )
}
