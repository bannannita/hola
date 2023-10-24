import React from 'react'

const AppForm = () => {
  const handleSubmit = (e) =>{ 
    e.preventDefault();
    try {
      if(db){
        console.log("Se guardo exitosamente");
      }

  } catch (error) {
    console.error();
  }

  }
  return (
    <div style={{background:"orange", padding:"10px", textAlign:"center"}}>
    <form onSubmit={handleSubmit}>
      <h1>AppForm.js</h1>
      <input type='texto' placeholder='Nombre.....'/>
      <input type='texto' placeholder='Nombre.....'/>
      <select>
      <option value="">Seleccione</option>
      <option value="M">Masculino</option>
      <option value="F">Femenino</option>
      <option value="N">No Binario</option>
      </select>
      <button>
        Guardar/Actualizar
      </button>
    </form>
    </div>
  )
}

export default AppForm
