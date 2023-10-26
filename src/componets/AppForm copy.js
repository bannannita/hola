import { collection,doc,getDoc,addDoc,updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from './firebase';
import { addDoc, collection } from 'firebase/firestore';

const AppForm = (props) => {
    ////GUARDAR / ACTUALIZAR ////
    const camposRegistro = {nombre:"",edad:"",genero:""}
    const [objeto, setObjeto] = useState(camposRegistro);
  

  const handleSubmit =async(e) =>{ 
    try {
      e.preventDefault();
      
      if(props.idActual===""){
        if(validarForm()){
          addDoc(collection(db, 'persona'), objeto);
          console.log('se guardo..');
        }
      }else{
        await updateDoc(doc(collection(db, "persona"), props.idActual),objeto);
        console.log("Se actualizo...");
        props.setIdActual('');
        }
      setObjeto(camposRegistro)
  } catch (error) {
    console.error("Error en crear o Update", error);
  }

  }

  useEffect(()=>{
    if(props.idActual===""){
      setObjeto({...camposRegistro});
    }else{
      obtenerDatosPorId(props.idActual);
    }
  }, [props.idActual]);
  const obtenerDatosPorId=async (xId) =>{
    const objPorId = doc(db,"persona",xId);
    const docPorId = await getDoc(objPorId);
    if (docPorId.exists()){
      setObjeto(docPorId.data());
    }else{ console.log("No hay doc...")}
  }

//llaves y corchetes [] {}
  //Manejador de estado de cambios 
  const handleStatusChange =  (e) => {
    const {name, value} = e.target;
    setObjeto({...objeto, [name] :value});
    //console.log({name, value});

  }
//validacion 

const validarForm = () => {
  if (objeto.nombre ===''){
    alert("escriba nombre...");
    return false;
  }
}

  return (
    <div style={{background:"orange", padding:"10px", textAlign:"center"}}>
    <form onSubmit={handleSubmit}>
      <h1>AppForm.js</h1>

      <input onChange={handleStatusChange}
      value={objeto.nombre} name='nombre'
      type='text' placeholder='Nombre.....'/> <br/>

      <input onChange={handleStatusChange}
      value={objeto.edad} name='edad'
      type='number' placeholder='edad.....'/> <br/>

      <select onChange={handleStatusChange}
      name='genero' > 
      <option value="">Seleccione genero</option>
      <option value="M">Masculino</option>
      <option value="F">Femenino</option>
      </select> <br />
      <button>Guardar/Actualizar</button>
    </form>
    </div>
  )
}

export default AppForm