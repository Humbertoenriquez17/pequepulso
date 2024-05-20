
import "firebase/auth";


let firebase;
let auth;

if (typeof window !== 'undefined') {
  firebase = require('firebase/app');
  auth = firebase.auth();
}
// Initialize Firebase
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

if (firebase && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}



export const signInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const createUserWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    throw error;
  }
};

export const sendConfirmationEmail = async () => {
  const user = auth.currentUser;
  if (user) {
    await user.sendEmailVerification()
      .then(() => {
        console.log('Confirmation email sent');
        return user;
      })
      .catch((error) => {
        console.error('Error sending confirmation email: ', error);
      });
  } else {
    console.log('No user is signed in');
    return null;
  }
};


export const emailVerified = async () => {
  const user = auth.currentUser;
  if (user) {
    await user.reload();
    return user.emailVerified;
  } else {
    console.log('No user is signed in');
    return false;
  }
};
/*
export const nombreUsuario = () => {
      
  const usuario = firebase.auth().currentUser;

  if (usuario) {
    const docRef = firebase.database().ref('usuarios/' + usuario.uid);

    docRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        let nombreU = data.padre.nombre || {};
        console.log(nombreU);
        
      }
    });
  }
  
};
*/
export const nombreUsuario = () => {
  return new Promise((resolve, reject) => {
    const usuario = firebase.auth().currentUser;

    if (usuario) {
      const docRef = firebase.database().ref('usuarios/' + usuario.uid);

      docRef.on('value', (snapshot) => {
        const data = snapshot.val();
        if (data && data.padre && data.padre.nombre) {
          const nombreU = data.padre.nombre;
          console.log(nombreU);
          resolve(nombreU);
        } else {
          reject('No data found');
        }
      });
    } else {
      reject('No user found');
    }
  });
};