import React from 'react'
import BotonPrimario from '../util.js/botones/botonPrimario'

export default function home() {
    const hola = ()=>{
        console.log("Hola")
    }
  return (
    <div>
        <h1>Home</h1>
        <BotonPrimario textoBoton="Prueba" onclick={hola}/>
    </div>
  )
}
