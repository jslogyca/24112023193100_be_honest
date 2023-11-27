import React, {useState} from 'react'

export const PrimerComponente = () => {
  //let nombre = 'Juan';
  let edad = '30'

  let [nombre, setNombre] = useState("Juan")
  
  let cambiarNombre = (nuevoNombre) => {
    setNombre(nuevoNombre);
  }

  return (
    <div>
        <p>be honest;</p>
        <p>nombre: <strong 
        className={nombre.length >= 4 ? 'verde' : 'rojo'}>{nombre}</strong></p>
        <p>edad: {edad}</p>
        <input type="text" onChange={ e => setNombre(e.target.value)} placeholder="Escribe tu nombre"/>
        <button onClick={ e => cambiarNombre("JUANSE!")}>Cambiar nombre</button>
    </div>
  )
}


