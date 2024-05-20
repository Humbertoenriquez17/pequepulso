'use client'
import React, { useState, useEffect } from 'react';
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import 'firebase/storage';
import styles from "../page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {  nombreUsuario } from '../../../lib/firebase/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';

let nombreU;
const firebaseConfig = {
    apiKey: "AIzaSyDtekOa7fDUer_k7CeUYK93NDkpYm642U0",
    authDomain: "pequepulso-d64fb.firebaseapp.com",
    databaseURL: "https://pequepulso-d64fb-default-rtdb.firebaseio.com",
    projectId: "pequepulso-d64fb",
    storageBucket: "pequepulso-d64fb.appspot.com",
    messagingSenderId: "246492891800",
    appId: "1:246492891800:web:2d0af2027be31f4e729eed",
    measurementId: "G-HGL2P05SLH"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); 
}

export default function MyComponent() {
  const [showMenu, setShowMenu] = useState(false);
  const [loading, setLoading] = useState(true);
  const [photoUrl, setPhotoUrl] = useState('');
  const SignOut = async () =>  {
    const isSignOut = await signOut();
    window.alert("Sesion cerrada");
  };

  useEffect(() => {
    const user = firebase.auth().currentUser;
    if (user) {
      const userRef = firebase.database().ref(`usuarios/${user.uid}`);
      const UseruidRef = firebase.database().ref(`Pulseras/Pulsera1`);
  UseruidRef.update({ Usuario: user.uid })
  .then(() => {
    console.log('Usuario actualizado exitosamente.');
  })
  .catch(error => {
    console.error('Error al actualizar el usuario:', error);
  });
      userRef.on('value', snapshot => {
        const data = snapshot.val();
        if (data) {
           // Fetch photo URL from Firebase Storage
           const photoUrl = data.padre.foto;
           console.log(photoUrl);
           setPhotoUrl(photoUrl);

           setLoading(false);
      
        }
      }, error => {
        console.error("Error al leer los datos: ", error);
      });
      return () => {
        userRef.off('value');
      };
    } else {
      console.log('Usuario no autenticado');
    }
  }, []);
  const [userName, setUserName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);


  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
    nombreUsuario().then(name => {
      setUserName(name);
    }).catch(error => {
      console.error(error);
    });
  });
  return () => unsubscribe();
  }, []);

  
  useEffect(() => {
    datosGuardados();
  }, []);

  const fechahoy = () => {
    const hoy = new Date();
    return hoy.toISOString().split("T")[0];
  };
  
  const router = useRouter()
    const [padre, setPadre] = useState({
        nombre: '',
        fechaNac: '',
        sexo: '',
        numPuls: '',
        direccion: '',  
        telefono: '',
    })

      const [bebe, setBebe] = useState({
        nombre: '',
        fechaNac: '',
        sexo: '',
        peso: '',
        estatura: '',  
        padPrev: '',
        antFam: '',


      })
      
 const datosGuardados = () => {
      
  const unsubscribe = firebase.auth().onAuthStateChanged(usuario => {
    
        if (usuario) {
          const docRef = firebase.database().ref('usuarios/' + usuario.uid);
    
          docRef.on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
              setPadre(data.padre || {});
              setBebe(data.bebe || {});
              const photoUrl = data.padre.foto;
              setPhotoUrl(photoUrl);
            }
          });
        }
      });
      return () => unsubscribe();
    };

    const uploadFile = async () => {
      if (selectedFile) {
        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(selectedFile.name);
        await fileRef.put(selectedFile);
        const fileUrl = await fileRef.getDownloadURL();
        return fileUrl;
      }
      else{
        const fileUrl = photoUrl;
        return fileUrl;
      }
      
    };

  const handleSubmit = async (event) => {

    event.preventDefault();
    const fileUrl = await uploadFile();
    
    // Check padre inputs
    if (!padre.nombre || !padre.fechaNac || !padre.sexo || !padre.numPuls || !padre.direccion || !padre.telefono) {
      console.error('Please fill in all padre fields');
      window.alert("Favor de llenar todos los campos");
      return;
  }

  // Check bebe inputs
  if (!bebe.nombre || !bebe.fechaNac || !bebe.sexo || !bebe.peso || !bebe.estatura || !bebe.padPrev || !bebe.antFam) {
      console.error('Please fill in all bebe fields');
      window.alert("Favor de llenar todos los campos");
      return;
  }
  if (isNaN(bebe.peso)) {
    console.error('Peso debe ser un numero');
    window.alert("El peso debe ser un numero");
    return;
  }
  if (isNaN(bebe.estatura)) {
    console.error('Estatura debe ser un numero');
    window.alert("La estatura debe ser un numero");
    return;
  }
  if (isNaN(padre.numPuls)) {
    console.error('El numero de pulsera debe ser un numero');
    window.alert("El numero de pulsera debe ser un numero");
    return;
  }
  if (isNaN(padre.telefono)) {
    console.error('Telefono debe ser un numero');
    window.alert("El telefono debe ser un numero");
    return;
  }

  const fechaNac = bebe.fechaNac;
  const [ano, mes, dia] = fechaNac.split('-').map(Number);
  console.log(`Day: ${dia}, Month: ${mes}, Year: ${ano}`);

    const usuario = firebase.auth().currentUser;
    firebase.database().ref('usuarios/'+usuario.uid+'/padre').set({nombre:padre.nombre, fechaNac:padre.fechaNac, sexo:padre.sexo, numPuls:padre.numPuls, direccion:padre.direccion, telefono:padre.telefono, foto: fileUrl })
      .then(() => {
        console.log('Data sent to Firebase successfully!');
        router.replace('/datosPersonalesFijos')
      })
      .catch((error) => {
        console.error('Error sending data to Firebase:', error);
      });
      firebase.database().ref('usuarios/'+usuario.uid+'/bebe').set({nombre:bebe.nombre, fechaNac:bebe.fechaNac, fechaNacSplit: {ano:ano, mes:mes, dia:dia}, sexo:bebe.sexo, peso:bebe.peso, estatura:bebe.estatura, padPrev:bebe.padPrev, antFam:bebe.antFam})
      //firebase.database().ref('usuarios/'+usuario.uid+'/bebe/fechaNacSplit').set({nombre:ano, mes:mes, dia:dia})
      .then(() => {
        console.log('Data sent to Firebase successfully!');

      })
      .catch((error) => {
        console.error('Error sending data to Firebase:', error);
        
      });
      

     
  };

  return (
    <main className="bg-gradient-pink">
      <div className= "bg-gradient-pink min-h-screen">
        <div className="flex justify-center bg-teal-700/50 top-0 size-full">
          <Link href="/tiempoReal">
            <div className="flex items-center mt-4 ml-4 text-white cursor-pointer" title="Volver a monitoreo">
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2 mb-2" />
            </div>
          </Link>

          <div className="flex object-center flex-col justify-center block px-4 py-2 text-gray-800 w-full object-left">
            <div className="flex justify-center">Hello {userName}</div>
            <div className="flex justify-center object-center rounded-full w-10 h-10 mx-auto my-auto"><img className='rounded-full' src={photoUrl}/></div>
          </div>

          <div className="mx-8 relative">
            <button
              type="submit"
              onClick={() => setShowMenu(!showMenu)}
              className="inline-block px-4 py-2 text-white" 
              style={{ whiteSpace: 'nowrap' }}
              ><FontAwesomeIcon icon={faUserCircle} className="mr-2 " />Mi perfil
            </button>
                
            {showMenu && (
              <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg right-0">
                <ul>
                  <li>
                    <Link href="/datosPersonalesFijos">
                      <button className="block px-4 py-2 text-gray-800 hover:bg-gray-300 w-full text-left">
                        Configuración de cuenta.
                      </button>
                    </Link>
                      <Link href="/Iniciosesion">
                      <button type="submit" className="block px-4 py-2 text-gray-800 hover:bg-gray-300 w-full text-left" onClick={SignOut}>Cerrar sesión.</button>
                    </Link>
                    
                  </li>
                  {/* Puedes agregar más opciones aquí si lo necesitas */}
                </ul>
              </div>
            )}
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-black text-center my-4">Rellena todos los campos</h1>
          <div className="flex flex-row">
            {/*BOTONES PADRES */}
            <div className='flex-auto w-64 bg-gray-100 mb-2 rounded-md pt-4 mx-4'>
              <img src="/papa.png" alt="Bebé" className="rounder-full w-24 h-24 object-cover mx-auto"/>
              <div className='flex flex-col'>
              <div className="flex flex-row">
                <div className='flex flex-col mx-3'>
              <div className='mx-2'>Nombre del padre</div>
              <div><input type="text" className={styles.inputField} placeholder="Nombre Padre" value={padre.nombre} onChange={(value) => { setPadre({ ...padre, ["nombre"]: value.target.value }) }}/></div>
              </div>
              
              <div className='flex flex-col'>
                <div className='mx-2'> Fecha de nacimiento</div>
              <div><input type="date" max={fechahoy()} className={styles.inputField} placeholder="Fecha de Nacimiento" value={padre.fechaNac} onChange={(value) => { setPadre({ ...padre, ["fechaNac"]: value.target.value }) }}/></div>
              </div>
              <div className='flex flex-col'>
                <div className='mx-2'>Sexo</div>
              <div><select className={styles.inputField} value={padre.sexo} onChange={(value) => { setPadre({ ...padre, ["sexo"]: value.target.value }) }}>
                <option value="">Select...</option>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
              </select></div>
              </div>
              </div>
              <div className="flex flex-row">
              <div className='flex flex-col mx-3'>
              <div className='mx-2'>Numero de Pulsera</div>
              <div><input type="text" className={styles.inputField} placeholder="Numero de Pulsera" value={padre.numPuls} onChange={(value) => { setPadre({ ...padre, ["numPuls"]: value.target.value }) }}/></div>
              </div>
              <div className='flex flex-col'>
              <div className='mx-2'>Direccion</div>
              <div><input type="text" className={styles.inputField} placeholder="Direccion" value={padre.direccion} onChange={(value) => { setPadre({ ...padre, ["direccion"]: value.target.value }) }}/></div>
              </div>
              <div className='flex flex-col'>
                <div className='mx-2'>Telefono</div>
              <div><input type="tel" className={styles.inputField} placeholder="Telefono (10 digitos)" value={padre.telefono} onChange={(value) => { setPadre({ ...padre, ["telefono"]: value.target.value }) }}/></div>
              </div>
              </div>

              <div className="flex flex-row">
              <div className='flex flex-col mx-3'>
              <div className='mx-2 my-2'>Fotografia</div>
              <div><input type="file" onChange={handleFileChange} /> {/* File input field */}</div>
              </div>
              </div>
            </div>
            </div>

            {/*BOTONES BEBE */}
            <div className='flex-auto w-64 bg-gray-100 mb-2 rounded-md pt-4 mx-4'>
              <img src="/bebe.png" alt="Bebé" className="rounder-full w-24 h-24 object-cover mx-auto"/>
            
            <div className="flex flex-col">
            <div className=" flex flex-row">
                 <div className='flex flex-col mx-3'>
                  <div className='mx-2'><label className="text-sm text-gray-600">Nombre Bebé</label> </div>
                  <div className='w-50'><input type="text" className={`${styles.inputField} mx-auto`} placeholder="Nombre bebé" value={bebe.nombre} onChange={(value) => { setBebe({ ...bebe, ["nombre"]: value.target.value }) }}/></div>
                  </div>
                <div className="flex flex-col">
                <div className='mx-2'><label className="text-sm text-gray-600">Fecha de Nacimiento</label></div>
                <div> <input type="date" max={fechahoy()} className={styles.inputField} placeholder="Fecha de Nacimiento" value={bebe.fechaNac} onChange={(value) => { setBebe({ ...bebe, ["fechaNac"]: value.target.value }) }}/></div>
                </div>
                <div className="flex flex-col">
                <div className='mx-2'><label className="text-sm text-gray-600">Sexo</label></div>
                <div><select className={styles.inputField} value={bebe.sexo} onChange={(value) => { setBebe({ ...bebe, ["sexo"]: value.target.value }) }}>
                <option value="">Select...</option>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
              </select></div>
                </div>
              </div>
              
              <div>
              <div className="flex flex-row mx-4">
                 <div>
                  <div className='mx-2'>Peso</div>
              <div className='w-10'><input type="text" className={styles.inputField} placeholder="Peso (kg)" value={bebe.peso} onChange={(value) => { setBebe({ ...bebe, ["peso"]: value.target.value }) }}/> </div>
              </div>
              <div className='mx-8'>
                <div className='mx-2'>Estatura</div>
              <div className='w-20'><input type="text" className={styles.inputField} placeholder="Estatura (cm)" value={bebe.estatura} onChange={(value) => { setBebe({ ...bebe, ["estatura"]: value.target.value }) }}/></div>
                </div>
                <div>
                <div className='mx-2'>Padecimientos previos</div>
              <div><input type="text" className={styles.inputField} placeholder="Padecimientos previos" value={bebe.padPrev} onChange={(value) => { setBebe({ ...bebe, ["padPrev"]: value.target.value }) }}/></div>
              </div>
              <div>
                <div className='mx-2'>Antecedentes familiares</div>
              <div><input type="text" className={styles.inputField} placeholder="Antecedentes familiares" value={bebe.antFam} onChange={(value) => { setBebe({ ...bebe, ["antFam"]: value.target.value }) }}/></div>
              </div>
              </div>
              </div>
          </div>
          </div>
            </div>

          <div className="flex justify-center">
            <button type="submit" className="flex justify-center inline-block mt-2 px-6 py-2 text-xs font-medium leading-6 text-center text-white  transition bg-pink-500 rounded-full shadow ripple hover:shadow-lg hover:bg-pink-600 focus:outline-none" >Guardar datos</button>
          </div>
          
        </form>
      </div>
    </main>
    

  );
}