'use client'

import { useState } from "react";
import Link from "next/link";
import { getAuth, createUserWithEmailAndPassword, sendConfirmationEmail, emailVerified } from "../../../lib/firebase/api";
import { auth } from "../../../lib/firebase/api";
import { useRouter } from "next/navigation";
import styles from "../page.module.css";

export function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '1em',
        width: '80%',
        maxWidth: '400px',
      }}>
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    setIsModalOpen(true);
  }, []);
  const router= useRouter()
  const estilo1 = "w-full p-1 border border-cyan-500 mt-2"
  const [credenciales, setCredenciales] = useState({
    email: '',
    password: ''
  })
 
  const checkEmailVerification = async () => {
    try {
      const isEmailVerified = await emailVerified();
      if (isEmailVerified){
        router.replace('/datosPersonales')
      } else {
        console.log('No ha verificado el Email');
      }
    } catch (error) {
      console.error('Error checking email verification:', error);
    }
  }
  
const sendEmail = async () => {
  try{
    await sendConfirmationEmail();
  } catch (error) {
    console.error('Error signing up:', error);
  }
}

  const SignUp = async () => {
    try {
      const { password } = credenciales;
  
      const hasMinimumLength = password.length >= 6;
      const hasLowerCase = /[a-z]/.test(password);
      const hasUpperCase = /[A-Z]/.test(password);
      const hasNumber = /\d/.test(password);
      const hasSpecialChar = /[@!_%]/.test(password);
  
      if (
        !hasMinimumLength ||
        !hasLowerCase ||
        !hasUpperCase ||
        !hasNumber ||
        !hasSpecialChar
      ) {
        let errorMessage = 'La contraseña debe cumplir con los siguientes requisitos:\n';
    
        if (!hasMinimumLength) errorMessage += '- Debe tener al menos 6 caracteres\n';
        if (!hasLowerCase) errorMessage += '- Debe contener al menos una letra minúscula\n';
        if (!hasUpperCase) errorMessage += '- Debe contener al menos una letra mayúscula\n';
        if (!hasNumber) errorMessage += '- Debe contener al menos un número\n';
        if (!hasSpecialChar) errorMessage += '- Debe contener al menos un carácter especial (@, !, _, %, etc.)\n';
    
        window.alert(errorMessage);
        return;
      }
  
      const user = await createUserWithEmailAndPassword(credenciales.email, credenciales.password);
      
      if (user) {
        sendEmail();
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  }
  return (
    <div>
    
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <div className="flex flex-col">
        
        <div>
          <input
            type="email"
            className={styles.inputField}
            placeholder="Correo electrónico"
            value={credenciales.email} onChange={(value) => { setCredenciales({ ...credenciales, ["email"]: value.target.value }) }}
          />
        </div>
        <div>
          <input
            type="password"
            className={styles.inputField}
            placeholder="Contraseña"
            value={credenciales.password} onChange={(value) => { setCredenciales({ ...credenciales, ["password"]: value.target.value }) }}
          />
        </div>
        <div>
          <button className="h=5 w=15 bg-sky-500 justify-center my-5 mx-auto rounded-lg" onClick={SignUp}>Registrarse</button>
          <button className="h=5 w=15 bg-sky-500 justify-center my-5 mx-auto rounded-lg" onClick={checkEmailVerification}>He verificado el correo</button>
        </div>  
      </div>
  
      </Modal>
    </div>
  );
}