'use client'
import Link from "next/link";
import { signInWithEmailAndPassword } from "../../../lib/firebase/api";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../page.module.css";



export default function RegisterForm(){
  const router= useRouter()
  const [authError, setAuthError] = useState('');
  const [credenciales, setCredenciales] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
 
  const SignIn = async () => {
    if (!credenciales.email && !credenciales.password) {
      setErrors({ password: 'Campos obligatorios para inicio de sesión*.' });
      return;
    }
    if (!credenciales.email) {
      setErrors({ ...errors, email: 'Campo obligatorio para inicio de sesión.*' });
      return;
    }

    if (!credenciales.password) {
      setErrors({ ...errors, password: 'Campo obligatorio para inicio de sesión.*' });
      return;
    }

    try {
      const user = await signInWithEmailAndPassword(credenciales.email, credenciales.password);
      if (user) {
        router.replace('/tiempoReal')
      }
    } catch (error) {
      console.error('Error signing in:', error);
      setAuthError('Usuario o contraseña incorrecto.')
    }
  } 
  
  return (
    <main className="bg-white min-h-screen">
      <div className="bg-white min-h-screen">
        
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
              <div><input
              type="email"
              className={`w-full p-2 border mt-2 focus:border-[#7267BB] ${errors.password || (errors.email && errors.password) ? 'border-red-500' : 'border-[#73718a]'} outline-none rounded-md text-[#7267BB]`}
              placeholder="Correo electrónico"
              value={credenciales.email} 
              onChange={(value) => { 
                setCredenciales({ ...credenciales, ["email"]: value.target.value });
                setErrors({ ...errors, email: '' });
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  SignIn();
                }
              }}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div>
            <input
              type="password"
              className={`w-full p-2 border mt-2 focus:border-[#7267BB] ${errors.password || (errors.email && errors.password) ? 'border-red-500' : 'border-[#73718a]'} outline-none rounded-md text-[#7267BB]`}
              placeholder="Contraseña"
              value={credenciales.password} 
              onChange={(value) => { 
                setCredenciales({ ...credenciales, ["password"]: value.target.value });
                setErrors({ ...errors, password: '' });
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  SignIn();
                }
              }}
            />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </div>
          <div>
            {authError && <p className="text-red-500">{authError}</p>}
          </div>    
          <div>
            <button className="inline-block mt-2 px-6 py-2 text-xs font-medium leading-6 text-center text-white  transition bg-pink-500 rounded-full shadow ripple hover:shadow-lg hover:bg-pink-600 focus:outline-none" onClick={SignIn}>Iniciar sesión</button>
          </div>

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
    </main>
  );
}
