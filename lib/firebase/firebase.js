// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);