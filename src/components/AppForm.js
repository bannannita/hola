import React from 'react';
import { db } from './firebase';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';


const AppForm = () => {
  
  ///////////// GUARDAR / ACTUALIZAR ////////
  const camposRegistro = { nombre:"", edad:"", genero:""}
  const [objeto, setObjeto] = useState(camposRegistro);

  const handleSubmit = (e) => {   //manejador de submit
    e.preventDefault();
    try {
      if(db){
        addDoc(collection(db, 'persona'), objeto);
        console.log("Se guardo con exito");
      }
    } catch (error) {
      console.error();
    }
  }

  //Manejedor del estado de cambios
  const handleStatusChange = (e) => {
    
  }

  return (
    <div style={{background:"orange", padding:"10px", textAlign:"center"}}>
      <form onSubmit={handleSubmit}>
        <h1>AppForm.js</h1>

        <input onChange={handleStatusChange}
         value={objeto.nombre} name='nombre' 
         type='text' placeholder='Nombre...' /> <br/>


        <input type='text' placeholder='Edada...' /> <br />
        <select> 
          <option value="">Seleccione genero...</option>
          <option value="M"> Masculino </option>
          <option value="F"> Femenino </option>
        </select> <br />
        <button>
          Guardar / Actualizar
        </button>
      </form>
    </div>
  )
}

export default AppForm
