import Link from 'next/link';
import { App } from './pruebaModal/page.js';
import styles from './page.module.css'; 


export default function Home() {
  
  return (
    
      
    <main>
      
      <div className="bg-white">
        <div className="relative">
          <div className={`${styles.topBar} flex justify-center bg-teal-700/50`}>
            <div className="mx-8"><Link href="/"><button type="submit">Home</button></Link></div>
            <div className="mx-8"><Link href="/productos"><button type="submit">Productos</button></Link></div>
            <div className="mx-8"><Link href="/acerca"><button type="submit">Nosotros</button></Link></div>
            <div className="mx-8"><Link href="/Iniciosesion"><button type="submit">Iniciar sesión</button></Link></div>
            <Link href="/registro"><button type="submit">Registro</button></Link>
          </div>
        </div>
        
        <div className="flex flex-row bg-gradient-to-r from-white to-pink-500/50">
          <div className="w-1/2 size-full flex flex-col">
            <div className="mx-20 my-8">
              <div className="my-8"><p className="text-black font-bold text-2xl">Sabemos que es lo más importante para ti,</p></div>
              <div className="my-8"><p className="text-black font-bold text-2xl">disfruta de una completa tranquilidad con</p></div>
              <div className="my-8"><p className="text-black font-bold text-2xl">Pequepulso </p></div>
              <div className="flex-auto flex space-x-4">
                <Link href="/productos"><button className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-pink-500 rounded-full shadow ripple hover:shadow-lg hover:bg-pink-600 focus:outline-none">
                  Productos
                </button></Link>
              </div>
            </div>
          </div>
          <div className="w-1/2 size-full"><img src="/bebe.jpg" alt="bebe"></img></div>
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
