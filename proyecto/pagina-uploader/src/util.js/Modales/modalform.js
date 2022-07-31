import React, {useState} from 'react'
import { ReactDOM } from 'react-dom'
import BotonPrimario from '../botones/botonPrimario'
import Box from '../../componentes/box'
import Login from '../../componentes/login'


export default function ModalForm({title, textoBoton, inputs}) {

  let valueInputs = [...inputs]
  

  
  return (

    <div>
        <h1>{title}</h1>
        <form id="form">
          {valueInputs.map(e => React.createElement("input", {type: e.type,
                                                              placeholder: e.name,
                                                              onChange: e.onchange}))}
          <BotonPrimario textoBoton={textoBoton} />
          
        </form>
    </div>
    
  )
  }
