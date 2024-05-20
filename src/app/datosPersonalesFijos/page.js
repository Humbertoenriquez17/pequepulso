'use client'
import React, { useState, useEffect } from 'react';
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import Link from "next/link";
import { signOut, nombreUsuario } from '../../../lib/firebase/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import "firebase/storage";


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

export default function PinData () {
  const [showMenu, setShowMenu] = useState(false);
  const [parentData, setParentData] = useState({});
  const [babyData, setBabyData] = useState({});
  const [userName, setUserName] = useState('');
  const [currentSection, setCurrentSection] = useState('userInfo');
  const [loading, setLoading] = useState(true);
  const [photoUrl, setPhotoUrl] = useState('');

  const SignOut = async () =>  {
    const isSignOut = await signOut();
    window.alert("Sesion cerrada");
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
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const userRef = firebase.database().ref(`usuarios/${user.uid}`);
        userRef.on('value', snapshot => {
          const data = snapshot.val();
          if (data) {
            setParentData(data.padre || {});
            setBabyData(data.bebe || {});
            
            /*const fechaNac = data.bebe.fechaNac;
          const [ano, mes, dia] = fechaNac.split('-');
          console.log(`Day: ${dia}, Month: ${mes}, Year: ${ano}`);
*/
            // Fetch photo URL from Firebase Storage
            const photoUrl = data.padre.foto;
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
      
    });

    return () => unsubscribe();
  }, []);

 

  return (
    <main className="bg-gradient-pink min-h-screen">
      {/*Menú del lado izquierdo */}
      <div className="flex flex-col">
      <div className="flex items-center justify-center bg-teal-700/50 top-0 w-full h-full">
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
      {/* Contenido principal */}
      <div>
        {currentSection === 'userInfo' && (
          <div className="mx-6 pt-6">
            {/* Contenido de Información de usuario */}
            <div className="flex flex-row">
              <div className='flex-auto w-64 bg-gray-100 mb-2 rounded-md pt-4'>
                <div className="flex flex-row">
                  <h1 className="font-sans text-3xl">Información del Padre</h1>
                  <img src="/papa.png" alt="Bebé" className="rounder-full w-24 h-24 object-cover mx-auto"/>
                </div>
                <p className="font-sans text-xl">Nombre: {parentData.nombre}</p>
                <p className="font-sans text-xl">Fecha de Nacimiento: {parentData.fechaNac}</p>
                <p className="font-sans text-xl">Dirección: {parentData.direccion}</p>
                <p className="font-sans text-xl">Teléfono: {parentData.telefono}</p>
              </div>
              <div className='flex-auto w-64 bg-gray-100 mb-2 rounded-md pt-4 mx-4'>
                <div className="flex flex-row">
                  <h1 className="font-sans text-3xl">Información del Bebé</h1>
                  <img src="/bebe.png" alt="Bebé" className="rounder-full w-24 h-24 object-cover mx-auto"/>
                </div>
                <p className="font-sans text-xl">Nombre: {babyData.nombre}</p>
                <p className="font-sans text-xl">Fecha de Nacimiento: {babyData.fechaNac}</p>
                <p className="font-sans text-xl">Peso: {babyData.peso}</p>
                <p className="font-sans text-xl">Estatura: {babyData.estatura}</p>
              </div>
            </div>

            <div className='flex justify-center'>
              <Link href='/datosPersonales'><button type='submit' className="inline-block mt-2 px-6 py-2 text-xs font-medium leading-6 text-center text-white  transition bg-pink-500 rounded-full shadow ripple hover:shadow-lg hover:bg-pink-600 focus:outline-none">Editar datos</button></Link>
            </div>
          </div>
        )}
        
        {currentSection === 'userEdit' && (
          <div>
            {/* Contenido de Información de usuario */}
            <div className="block px-4 py-2 text-gray-800 hover:bg-gray-300 w-full text-left">
              <label>{userName}</label>
            </div>
            <h1>Información del Padre</h1>
            <div className='bg-gray-100 mb-2 rounded-md inline-block p-4 mx-auto'>
              <p>Nombre:<input  type='text' ></input></p>
              <p>Fecha de Nacimiento: {parentData.fechaNac}</p>
              <p>Dirección: {parentData.direccion}</p>
              <p>Teléfono: {parentData.telefono}</p>
            </div>
            <h1>Información del Bebé</h1>
            <div className='bg-gray-100 mb-2 rounded-md inline-block p-4 mx-auto'>
              <p>Nombre: {babyData.nombre}</p>
              <p>Fecha de Nacimiento: {babyData.fechaNac}</p>
              <p>Peso: {babyData.peso}</p>
              <p>Estatura: {babyData.estatura}</p>
              
            </div>
            <div className='flex justify-center'>
            <button type='submit' className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white  transition bg-[#98CEC3] 
            rounded-full shadow ripple hover:shadow-lg hover:bg-[#5FBBA8] focus:outline-none"  onClick={() => setCurrentSection('userEdit')}>
              Editar datos</button>
            </div>
            
          </div>
        )}
        {currentSection === 'userNotif' && (
          <div>
            <h1 className="text-xl font-bold">Hola</h1>
          </div>
        )}
  {/* Puedes agregar más secciones aquí basadas en el valor de `currentSection` */}
  
</div>
</div>

    </main>
  );
}