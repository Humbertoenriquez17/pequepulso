'use client'

import Image from "next/image";
import styles from "../page.module.css";
import{ useState } from "react";
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {

  const team =[
    {key:'1', nombre: 'Abril Anayansi Ibarra Caballero', puesto:'Backend-Frontend', image:"/abril.jpg"},
    {key:'2', nombre: 'Jessica Anahi Gonzalez Espino', puesto: 'Frontend-Marketing', image:"/Jess.jpg"},
    {key:'3', nombre: 'Hector Emilio Guevara Faudoa', puesto: 'Backend-Frontend', image:"/Hector.jpg"},
    {key:'4', nombre: 'Sofia Paulina Medina Dominguez', puesto: 'Frontend', image:"/sofi.jpg"},
    {key:'5', nombre: 'Humberto Alexander Enriquez Lopez', puesto: 'Backend-Frontend',image:"/humbe.jpg"},
    {key:'6', nombre: 'Jesus Gael Granados Gonzalez', puesto: 'Backend-Frontend',image:"/gael.jpg"},
  ]
  const MemberStyles = [
    {className:"styleA", classNameText:"hA"},
    {className:"styleJ", classNameText:"hJ"},
    {className:"styleH", classNameText:"hH"},
    {className:"styleS", classNameText:"hS"},
    {className:"styleHu", classNameText:"hHu"},
    {className:"styleG", classNameText:"hG"},
  ]
  
  const [CurrentMemberi, setCurrentMemberi] = useState(0)

  const [CurrentStyle,setCurrentStyle] = useState(MemberStyles[0].className);

  const [CurrentText,setCurrentText] = useState(MemberStyles[0].classNameText);

  const prevMember = () =>{
    setCurrentMemberi((prevIndex) =>{
      const newIndex = (prevIndex - 1 + team.length) % team.length;
      setCurrentStyle(MemberStyles[newIndex].className);
      setCurrentText(MemberStyles[newIndex].classNameText);
      return newIndex;
    });
  };

  const nextMember = ()=>{
    setCurrentMemberi((prevIndex) =>{
      const newIndex = (prevIndex + 1) % team.length;
      setCurrentStyle(MemberStyles[newIndex].className);
      setCurrentText(MemberStyles[newIndex].classNameText);
      return newIndex;
    });
  };

  const Box =({item, styleclassName, styleclassNameText})=>
    <div className={styles[styleclassName]}>
      <div>
        <h2 className={styles[styleclassNameText]}> Nombre: {item.nombre}</h2>
        <h2 className={styles[styleclassNameText]}> Puesto: {item.puesto}</h2>
      </div>
      <div className={styles.column}>
          {team[CurrentMemberi].image && <img src={team[CurrentMemberi].image} alt={team[CurrentMemberi].nombre} className={styles.imgResponsive} />}
      </div>
      <div className={styles.triangleL} onClick={prevMember}></div>
      <div className={styles.triangle} onClick={nextMember}></div>
    </div>

  return (
   
    <main>

      <div className="bg-gradient-to-t from-pink-300 to-white scroll-smooth min-h-screen">
      
      <div className={`${styles.topBar} flex justify-center bg-teal-700/50`}>
        <Link href="/"><button type="submit">Home</button></Link>
        <Link href="/productos"><button type="submit">Productos</button></Link>
        <Link href="/acerca"><button type="submit">Nosotros</button></Link>
        <Link href="/Iniciosesion"><button type="submit">Iniciar sesión</button></Link>
        <Link href="/registro"><button type="submit">Registro</button></Link>
  
      </div>
      <div>
          <div>
          <div>
            <h1 align="center" className={styles.h1}><strong>PequePulso team</strong></h1>
          </div>
         <div className="box-content w-1/2 justify-center mr-auto ml-auto">
            <Box item ={team[CurrentMemberi]} styleclassName={CurrentStyle} styleclassNameText={CurrentText}/> 
          </div>
          </div>
          <div className="flex justify-center">
            <Link href="/">
            <button className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-pink-500 rounded-full shadow ripple hover:shadow-lg hover:bg-pink-600 focus:outline-none">Volver al inicio</button>
            </Link>
          </div>
       </div>
       <div className="rounded-lg bg-white mx-40"> </div>
       
       <div className="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
  <div className="relative mx-auto max-w-7xl">
    <div className="flex justify-center">
      <div className="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <img className="object-cover w-full h-48" src="/mision.jpg"></img>
          </div>
          <div className="flex flex-col justify-between flex-1 p-6 bg-white">
            <div className="flex-1">
              <a href="#" className="block mt-2">
                <p className="text-xl font-semibold text-neutral-600">Misión</p>
                <p className="mt-3 text-base text-gray-500">Nuestra misión es ofrecer productos innovadores y confiables que permitan a los padres mantener un vínculo cercano con sus hijos, brindando una vigilancia constante y asegurando un entorno seguro para el crecimiento y desarrollo de los bebés.</p>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <img className="object-cover w-full h-48" src="/vision2.jpg"></img>
          </div>
          <div className="flex flex-col justify-between flex-1 p-6 bg-white">
            <div className="flex-1">
              <a href="#" className="block mt-2">
                <p className="text-xl font-semibold text-neutral-600">Visión</p>
                <p className="mt-3 text-base text-gray-500">Nos esforzamos por ser reconocidos como el referente en innovación, calidad y confiabilidad en nuestro sector. Visualizamos un futuro donde cada padre tenga acceso a nuestros dispositivos de vanguardia, brindando tranquilidad y seguridad en cada hogar</p>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <img className="object-cover w-full h-48" src="/valores.jpg"></img>
          </div>
          <div className="flex flex-col justify-between flex-1 p-6 bg-white">
            <div className="flex-1">
              <a href="#" className="block mt-2">
                <p className="text-xl font-semibold text-neutral-600">Valores</p>
                <p className="mt-3 text-base text-gray-500"> Para nosotros los valores fundamentales son la seguridad, la innovación, la integridad y la responsabilidad social. Nos comprometemos a priorizar el bienestar de los bebés y sus padres, buscando constantemente mejorar y operando con transparencia y empatía.</p>
              </a>
            </div>
          </div>
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

    </div>
    </main>
    
  );
}
