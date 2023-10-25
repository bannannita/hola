import React, { useState } from 'react'
import { db } from './firebase';
import { addDoc, collection } from 'firebase/firestore';


const AppForm = () => {

    ////////////////GUARDAR O ACTUALIZAR//////////////////
    const composRegistro = {Nombre:"", Edad:"",Genero:""}
    const[objeto, setObjeto] = useState(composRegistro);
    const handleSubmit= (e) => {
        e.preventDefault();

        try {
            if (db){
                addDoc(collection(db,'persona'), objeto);
                console.log("Se guardo con éxito");
            }
        } catch (error) {
            console.error();
        }

    }     

    return (
        <div style={{background:"orange",padding:"10px",textAlign:"center"}}>
            <form onSubmit={handleSubmit}>
                <h1>AppForm.js</h1>
                <input type='text' placeholder='Nombre...'/>
                <input type='text' placeholder='Apellidos...'/>
                <select>
                    <option value="">Seleccione...</option>
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                    <option value="N">No binario</option>
                 
                </select>
                <button>
                    Guardar / Actualizar
                </button>
            </form>
        </div>
    )
}

export default AppForm