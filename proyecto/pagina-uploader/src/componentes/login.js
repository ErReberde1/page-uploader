import React, { useEffect, useState } from 'react'
import ModalForm from '../util.js/Modales/modalform'
import Box from './box'


export default function Login() {

  
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")

    
   
    const onChangeNombre = (event)=>{
        const val1 = event.target.value
        
        setUser(val1)
        
        console.log(user)
    }

    const onChangePassword = async (event)=>{
      const val2 = await event.target.value
      setPassword(val2)
      console.log(password)
  }

    const [inputs ,setInputs] = useState([{ "type":"text",
                                            "name": "Usuario",
                                            "onchange": onChangeNombre},
                                            { "type":"password",
                                            "name": "Contraseña",
                                            "onchange": onChangePassword}])
  return (
    <Box>
        <ModalForm 
          title="Logeate" 
          textoBoton="Login" 
          inputs={inputs}
          />  
    </Box>
  )
}
