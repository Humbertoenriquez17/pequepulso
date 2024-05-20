'use client';

import React, { useState, useEffect, useRef } from 'react';
import firebase from "firebase/app";
import "firebase/database";
import styles from "../page.module.css";
import Link from "next/link";
import { signOut, nombreUsuario } from '../../../lib/firebase/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';


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

export default function MyMonitoring() {

/*
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
*/
  const [data, setData] = useState([]); 
  const [historialData, setHistorialData] = useState([]);// para almacenar los datos obtenidos
  const [showMenu, setShowMenu] = useState(false);
  const [loading, setLoading] = useState(true);
  const [photoUrl, setPhotoUrl] = useState('');
  const [parentData, setParentData] = useState({});
  const [babyData, setBabyData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const prevWatchDog = useRef(null);
  const prevBandRemoved = useRef(null);
  const prevAlarmTemp = useRef(null);
  const [isPageLoaded, setPageLoaded] = useState(true);
const wasDisconnected = useRef(false);
   const SignOut = async () =>  {
      const isSignOut = await signOut();
      window.alert("Sesion cerrada");
    };

    const [userName, setUserName] = useState('');
    useEffect(() => {
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
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
            setParentData(data.padre || {});
            setBabyData(data.bebe || {});
  
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
    });

    return () => unsubscribe();
    }, []);
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


    const [notificationPermission, setNotificationPermission] = useState(Notification.permission);

  useEffect(() => {
    if (Notification.permission === 'default') {
      Notification.requestPermission().then(permission => {
        setNotificationPermission(permission);
      });
    }
  }, []);
    
    function showNotification(title, body, icon, sound) {
      console.log(notificationPermission);
      if (notificationPermission === 'granted' /*&& navigator.serviceWorker */) {
        //navigator.serviceWorker.ready.then(registration => {
          registration.showNotification(title, { body: body, icon: icon  });
          console.log("Notification sent");
          var audio = new Audio(sound);
          audio.play().catch(error => {
            console.error("Error playing sound: ", error);
          });
        //});
      }
    }
    


  useEffect(() => { // función para obtener los datos
    const dbRef = firebase.database().ref('Pulseras/Pulsera1');
    dbRef.on('value', (snapshot) => {
      const dbData = snapshot.val();
      console.log("Datos recibidos de Firebase", dbData);

      if (dbData.VALID_VAL==0 ) {
        setData({
          TEMP: dbData.TEMP || '',
          BPM: dbData.BPM || '',
        });

        if(dbData.AlarmTemp !== prevAlarmTemp.current){
          if(dbData.AlarmTemp == 1){
            showNotification("Alert", "Exceso Temperatura", "/error.png");
            console.log("Notificacion enviada");
          }
          else{
            showNotification("Alert", "Temperatura nromal", "/correct.png");
            console.log("Notificacion enviada");
          }
        }
    
        prevAlarmTemp.current = dbData.AlarmTemp;

      }
      else{
        setData({
          TEMP: 'No hay datos',
          BPM: 'No hay datos',
        });
      }


    }, (error) => {
      console.error("Error al leer los datos: ", error);
    });

    // función de limpieza para desconectarse de firebase
    return () => {
      dbRef.off('value');
    };
  }, []);
/*
  useEffect(() => { //funcion para alerta de desconexion
    const dbRef = firebase.database().ref('Pulseras/Pulsera1');
  
    const intervalId = setInterval(() => {
      dbRef.on('value', (snapshot) => {
        const dbData = snapshot.val();
        console.log("Datos recibidos de Firebase", dbData);
  
        const currentDate = new Date();
        const dateObject = new Date(dbData.WATCH_DOG);
  
        const diffMilliseconds = currentDate - dateObject;
        const diffMinutes = diffMilliseconds /1000/ 60;
        console.log(diffMinutes);
        console.log(dateObject);
        console.log(currentDate);
        console.log(dbData.WATCH_DOG);

        
          if(diffMinutes >= 2){
            showNotification("Alert", "Desconexion", "/error.png");
            console.log("Notificacion enviada");
            wasDisconnected.current = true;
          }
          else if (isPageLoaded || wasDisconnected.current){
            showNotification("Alert", "Conexion", "/correct.png");
            console.log("Notificacion enviada");
            setPageLoaded(false); // Set isPageLoaded to false after the first execution
            wasDisconnected.current = false;
          }
        
      });
    }, 5000); // Checar cada 20 segundos
  
    // Clean up function
    return () => {
      clearInterval(intervalId);
      dbRef.off('value');
    };
  }, [isPageLoaded]);

*/



useEffect(() => { //Pulsera quitada
  const dbRef = firebase.database().ref('Pulseras/Pulsera1');
  

  dbRef.on('value', (snapshot) => {
    const dbData = snapshot.val();
    console.log("Datos recibidos de Firebase", dbData);

    if(dbData.BandRemoved !== prevBandRemoved.current){
      if(dbData.BandRemoved == 1){
        showNotification("Alert", "Pulsera removida", "/error.png", "/alarm.mp3");
        console.log("Notificacion enviada");
      }
      else{
        showNotification("Alert", "Pulsera puesta", "/correct.png");
        console.log("Notificacion enviada");
      }
    }

    prevBandRemoved.current = dbData.BandRemoved;

    // ... rest of your code ...
  }, (error) => {
    console.error("Error al leer los datos: ", error);
  });

  return () => {
    dbRef.off('value');
  };
}, []);

  useEffect(() => { // función para obtener los datos
    const dbalert = firebase.database().ref('Pulseras/Pulsera1/Historial');
    const datasH = () => {
    dbalert.on('value', (snapshot) => {
      const dbDataalert = snapshot.val();
      console.log("Datos recibidos de Firebase", dbDataalert);
      const historialValues = Object.values(dbDataalert);
                setHistorialData(historialValues);
    }, (error) => {
      console.error("Error al leer los datos: ", error);
    });
    };
    datasH ();
    // función de limpieza para desconectarse de firebase
    return () => {
      dbalert.off('value');
    };
  }, []);
  return (
    <main>
      <div className="bg-gradient-to-t from-gray-300 to-white scroll-smooth min-h-screen">
        <div className="flex justify-center flex-col">
        <div className="flex items-center justify-center bg-teal-700/50 top-0 w-full h-full">
        <div className="flex flex-col items-center justify-center px-4 py-2 text-gray-800 w-full">
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
                        <button className="block px-4 py-2 text-gray-800 hover:bg-gray-300 hover:rounded-lg w-full text-left">
                          Información de usuario.
                        </button>
                      </Link>
                        <Link href="/Iniciosesion">
                        <button type="submit" className="block px-4 py-2 text-gray-800 hover:bg-gray-300 hover:rounded-lg w-full text-left" onClick={SignOut}>Cerrar sesión.</button>
                       </Link>
                      
                    </li>
                    {/* Puedes agregar más opciones aquí si lo necesitas */}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center flex-col">
            <div className="flex justify-center my-5"><p className="font-bold text-7xl font-mono">Datos obtenidos</p></div>
            <div className="flex justify-center w-full my-10">
              {data && (data.TEMP ||data.BPM) ? (
                <div className="flex flex-row w-full justify-center">
                  <div className="flex flex-col w-1/3 justify-center">
                    <div className="flex h-40 w-20 mx-auto my-auto justify-center"><img src='/temp.gif'></img></div>
                    <div className="flex justify-center"><p className="font-bold text-3xl">Temperatura: {data.TEMP} °C</p></div>
                  </div>
                  
                  <div className="flex flex-col w-1/3 justify-center">
                    <div className="flex size-40 mx-auto my-auto justify-center"><img src='/Corazon .gif'></img></div>
                    <div className="flex justify-center"><p className="font-bold text-3xl">Rítmo cardíaco: {data.BPM} BPM</p></div>
                  </div>
                </div>
              ) : (
                <p>No se encontraron datos</p>
              )}
            </div>
            <div className="text-center mb-2">
              <p className='text-black'>Historial de alertas</p>
          </div>
            <div className='mt-8 mb-8 w-full flex justify-center'>
    <table className="mt-8 mb-8 w-full md:w-3/4 lg:w-2/3 border-collapse border border-gray-300 text-left">
        <thead>
            <tr>
                <td className="border border-gray-300 bg-[#A19BCB] px-4 py-1 text-white text-center font-bold">Fecha</td>
                <td className="border border-gray-300 bg-[#A19BCB] px-4 py-1 text-white text-center font-bold">Tipo de alerta</td>
                <td className="border border-gray-300 bg-[#A19BCB] px-4 py-1 text-white text-center font-bold">Valor obtenido</td>
            </tr>
        </thead>
        <tbody>
            {historialData.map((item, index) => (
                <tr key={index}>
                    <td className="border border-gray-300 px-4 py-1 text-black">{item.Fecha}</td>
                    <td className="border border-gray-300 px-4 py-1 text-black">{item.Tipo}</td>
                    <td className="border border-gray-300 px-4 py-1 text-black">{item.Valor}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

          </div>
        </div>
      </div>
    </main>
  );
}
