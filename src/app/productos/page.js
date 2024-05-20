import Link from "next/link";
import styles from "../page.module.css"; 

export default function Products() {
  return (
    <main>
      <div className="bg-white min-h-screen">
        <div className="relative mx-auto">
          <div className={`flex justify-center ${styles.topBar}`}> 
            <div className="mx-8"><Link href="/"><button type="submit">Home</button></Link>
            </div>
            <div className="mx-8"><Link href="/productos"><button type="submit">Productos</button></Link>
            </div>
            <div className="mx-8"><Link href="/acerca"><button type="submit">Nosotros</button></Link>
            </div>
            <div className="mx-8"><Link href="/Iniciosesion"><button type="submit">Iniciar sesión</button></Link>
            </div>
            <div className="mx-8"><Link href="/registro"><button type="submit">Registro</button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src="/pulsera_provisional.jpg" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PequePulso</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">PequePulso es un innovador dispositivo que, mediante un brazalete colocado en el pie del bebé, monitoriza su ritmo cardíaco, niveles de oxígeno y temperatura, ofreciendo a los padres una tranquilidad incomparable al garantizar la seguridad y bienestar de su pequeño.</p>
              </div>
            </div>
          </div>
                    <div className="mt-8">   
                        <h2 className="text-xl font-bold text-black text-center">Especificaciones</h2>
                        <div className="max-w-xl  mx-auto overflow-x-auto">
                            <table className="mt-8 mb-8 w-full border-collapse border border-gray-300 text-left">
                                <thead>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-1 text-black font-bold" >Sensores icorporados:</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border  px-4 py-2 text-black">1. Sensor de Temperatura </td>
                                        <td className="border border-white-300 px-4 py-2 text-black">Especificaciones técnicas: 
                                        <li>Voltaje de Alimentación: 2.7V - 3.3V</li>
                                        <li>Rango de Medición: 0ºC - 50ºC</li>
                        <li>Error: ±0.1ºC @ 38ºC</li>
                        <li>Resolución: 16 bits 0.0039ºC</li>
                        <li>Corriente de Operación: 600uA</li>
                        <li>Comunicación: I2C</li>
</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-white-300 px-4 py-2 text-black">2. Sensor Pulso Concentracion Oxigeno</td>
                                        <td className="border border-white-300 px-4 py-2 text-black">Especificaciones técnicas:
                                        <li>Tensión de Alimentación: 3.3V a 5V</li>
                        <li>Voltaje de Interfaz de Comunicación: 1.8V ~ 3.3V ~ 5V (opcional)</li>
                        <li>Corriente de Trabajo: 60mA</li>
                        <li>Potencia Máxima: 0.3W</li>
                        <li>Tipo de Detección: PPG (Reflexión de luz)</li>
</td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-1 text-black text-left" >Conectividad</th>
                                        <td className="border border-gray-300 px-4 py-1 text-black">Tipo de conexión (por ejemplo, Bluetooth, Wi-Fi).
    Compatibilidad con dispositivos (por ejemplo, smartphones, tablets).</td>
                                    </tr>
                                </thead>
                                <thead>
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-1 text-black  text-left">Batería</th>
                                        <td className="border border-gray-300 px-4 py-1 text-black text-left">Tipo de batería y duración de la misma.
    Tiempo de carga y autonomía.</td>
                                    </tr>
                                </thead>
                                <thead>
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-1 text-black  text-left">Material y diseño</th>
                                        <td className="border border-gray-300 px-4 py-1 text-black  text-left">Materiales utilizados en la pulsera (por ejemplo, silicona hipoalergénica).
    Diseño ergonómico y resistente al agua.Materiales utilizados en la pulsera (por ejemplo, silicona hipoalergénica).
    Diseño ergonómico y resistente al agua.</td>
                                    </tr>
                                </thead>
                                <thead>
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-1 text-black">Compatibilidad y aplicación</th>
                                        <td className="border border-gray-300 px-4 py-1 text-black">Materiales utilizados en la pulsera (por ejemplo, silicona hipoalergénica).
    Diseño ergonómico y resistente al agua.Materiales utilizados en la pulsera (por ejemplo, silicona hipoalergénica).
    Diseño ergonómico y resistente al agua.</td>
                                    </tr>
                                </thead>
                                <thead>
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-1 text-black">Dimensiones y peso</th>
                                        <td className="border border-gray-300 px-4 py-1 text-black">Dimensiones físicas de la pulsera.
    Peso ligero y portabilidad.</td>
                                    </tr>
                                </thead>
                            </table>
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
