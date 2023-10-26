import { useState } from 'react';
import AppForm from './componets/AppForm';
import logo from './logo.svg';
//import './App.css';
import C01componente from './pagina/C01componente';
import { db } from './componets/firebase';
import { deleteDoc, doc, onSnapshot } from 'firebase/firestore';

function App() {

  const [docBD, setdocBD] = useState([]);

  const fnRead = () =>{
    try{
      const xColeccionConQuery = query(collection(db,"persona"));
      const unsubscripe = onSnapshot(xColeccionConQuery, (xDatosBD) =>{
        const xDoc =[];
        xDatosBD.forEach((doc)=>
        {
          xDoc.push({id: doc.id, ...doc.data()});
        });
        setDocsBD(xDoc);
      });
    } catch (error){
      console.error(error);
    }

  }
  userEffect(()=>{
    fnRead();
  },[]);

  const [docActual, setIdActual] =useState("");
  const fnDelete =async (xId) =>{
    if(window.confirm("confirme para eliminar")){
      await deleteDoc(doc(db,'persona', xId));
      console.log("se elimino..."+xId);
    }
  }
  return (
    <div style={{width:"350px", background:"greenyellow", padding:"10px"}}>
      <h1>sitiocopia(App.js)</h1>
      <h2>READ/DELETE</h2>
      <AppForm{...{idActual,setIdActual,fnRead}}/>
      {
        docsBd.map((p) =>
        <p key={p.id}>
          N°.1 {p.nombre}....
          <span onClick={()=>fnDelete(p.id)}> X </span>
          ...
          <span onClick={()=>setIdActual(p.id)}> A </span>
        </p>
        )
      }
    </div>
  );
}

export default App;
