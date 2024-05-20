import dynamic from 'next/dynamic';
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../page.module.css";

const FirebaseAPI = dynamic(
  () => import('../../../lib/firebase/api'),
  { ssr: false } // This will load the module only on client side
);

export default function RegisterForm(){
  const router = useRouter()
  const estilo1 = "w-full p-1 border border-cyan-500 mt-2"
  const [credenciales, setCredenciales] = useState({
    email: '',
    password: ''
  })

  const checkEmailVerification = async () => {
    const { emailVerified } = await FirebaseAPI();
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
    const { sendConfirmationEmail } = await FirebaseAPI();
    try{
      await sendConfirmationEmail();
      window.alert('Se ha enviado un correo de verificación. Revisa tu bandeja de entrada.')
    } catch (error) {
      console.error('Error signing up:', error);
    }
  }

  const SignUp = async () => {
    const { createUserWithEmailAndPassword } = await FirebaseAPI();
    try {
      const { email, password } = credenciales;

      if (!email.trim() || !password.trim()){
        window.alert('Rellene todos los campos.');
        return;
      }
  
      const hasMinimumLength = password.length >= 6;
      const hasLowerCase = /[a-z]/.test(password);
      const hasUpperCase = /[A-Z]/.test(password);
      const hasNumber = /\d/.test(password);
      const hasSpecialChar = /[@!_%-]/.test(password);
  
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
  
      const user = await createUserWithEmailAndPassword(email, password);
      
      if (user) {
        sendEmail();
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  }
 
 

  return (
    <main>
      <div className="bg-gradient-to-t from-pink-300 to-white scroll-smooth min-h-screen">
      
      <div className={`${styles.topBar} flex justify-center bg-teal-700/50`}>
           <div className= "mx-8"><Link href="/"><button type="submit">Home</button></Link></div>
           <div className= "mx-8"><Link href="/productos"><button type="submit">Productos</button></Link></div>
           <div className= "mx-8"><Link href="/acerca"><button type="submit">Nosotros</button></Link></div>
           <div className= "mx-8"><Link href="/Iniciosesion"><button type="submit">Iniciar sesión</button></Link></div>
           <div className= "mx-8"><Link href="/registro"><button type="submit">Registro</button></Link></div>
      
    </div>
      <div className="flex justify-center my-10" >
      <div >
        <div className="flex flex-col">
        
          <div className="">
            <input
              type="email"
              className={styles.inputField}
              placeholder="Correo electrónico"
              value={credenciales.email} onChange={(value) => { setCredenciales({ ...credenciales, ["email"]: value.target.value }) }}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  SignUp();
                }
              }}
            />
            </div>
            <div>
            <input
              type="password"
              className={styles.inputField}
              placeholder="Contraseña"
              value={credenciales.password} onChange={(value) => { setCredenciales({ ...credenciales, ["password"]: value.target.value }) }}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  SignUp();
                }
              }}
            />
            </div>
              <div>
              <button className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-pink-500 rounded-full shadow ripple hover:shadow-lg hover:bg-pink-600 focus:outline-none" onClick={SignUp}>Registrarse</button>
              <button className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-pink-500 rounded-full shadow ripple hover:shadow-lg hover:bg-pink-600 focus:outline-none" onClick={checkEmailVerification}>He verificado el correo</button>
              </div>
          </div>
     </div>
     </div>
     <div className="text-center">
          <a href="#" className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900">
            <img src="/logo.png" className="h-12 mr-3 sm:h-9" alt="PequePulso Logo" />
            PequePulso
          </a>
          <span className="block text-sm text-center text-gray-500">© 2022-2024 PequePulso™. All Rights Reserved. 
          </span>
          <ul className="flex justify-center mt-5 space-x-5">
          </ul>
        </div>
     </div>
    </main>
  );
}
