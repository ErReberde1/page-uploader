import React from 'react'

export default function BotonPrimario({textoBoton, onclick}) {
  return (
    
        <button onClick={onclick}>
            {textoBoton}
        </button>
    
  )
}
