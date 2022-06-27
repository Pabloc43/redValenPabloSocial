import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import styles from '../componentes/Login.css'

export default function Login() {
  const [tuki, setTuki] = useState('')
  function inputCambio1 (event) {
      setTuki (event.target.value)
  }


  function guardar(event){
    localStorage.setItem('idUsers', tuki) 
  }

return (
    <Form className='m-5 p-5' onSubmit={guardar}>
        <Form.Group className="mb-3" controlId="email">
            <Form.Label className='text-light fw-bolder'>Correo Electronico</Form.Label>
            <Form.Control className='form-control border-danger' type="text" placeholder="Ingrese su Email" name="User" value={tuki.User} onChange={inputCambio1}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="contraseña">
            <Form.Label className='text-light fw-bolder'>Contraseña</Form.Label>
            <Form.Control className='form-control border-danger' type="password" placeholder="Ingrese su contraseña" name="contraseña" value={tuki.contraseña}/>
            <Form.Text className="text-light fw-lighter">
            No compartas tus contraseñas con terceros 
            </Form.Text>
        </Form.Group>
        <Button variant="secondary" type="submit" onClick={guardar}>
            Iniciar
        </Button>
    </Form>  
)
}
