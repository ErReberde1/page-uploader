import React from 'react'
import {Link} from "react-router-dom"
import '../App.css'


export default function Navegation() {
  return (
    <div className='container-nav'>
        <li><Link className='enlace' to="/">Home</Link></li>
        <li><Link className='enlace' to="/subir-imagen">Subir imagen</Link></li>
        <li><Link className='enlace' to="/conocenos">Qué es ""</Link></li>
        <li><Link className='enlace' to="/login">Login</Link></li>
    </div>
  )
}
