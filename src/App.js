import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import Publicar from './componentes/Publicar';
import Header from './componentes/Header';
import Login from './componentes/Login';

import Footer from './componentes/footer';
import {useState} from "react"
import { useEffect } from 'react';

function App(tuki) {
  const [logged, setLogged] = useState(false)
  useEffect( ()=> setLogged(localStorage.getItem('idUsers') === 'Juan')
  , [localStorage.getItem('idUsers')])

  function borrar(){
    localStorage.removeItem('idUsers')
  }
  const [personas, setPersonas] = useState([]);


  useEffect(()=>{
    fetch("../data/objetos.json")
    .then(res => res.json()
    .then(data => setPersonas(data)))
  }, [])

 
  return (
    <div className="App">
      <Header logged={logged} borrar={borrar}/>
      <main className="container py-5 position-relative ">
      {logged ?<> <Publicar publicacionesViejas={personas}/>

        <form>
        <button className='btn btn-secondary' onClick={borrar}>Cerrar sesion</button>
        </form>
        </> : 
        <Login  algo={tuki}/>}
      </main>
      <Footer />
    </div>
  );
}

export default App;
