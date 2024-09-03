/* ARCHIVO DE NAVBAR+HEADER, ojito*/
'use client'
import React from "react";
import {useState} from "react";
import { words } from "../../lib/data"; /* Libreria de palabras para la barra de busqueda */







function Navbar(){
    {/* Comparacion para ver si el menu esta abierto*/}
    const [EstaMenuAbierto, setEstaMenuAbierto]= useState(false);
    const toggleMenu = () => {
        setEstaMenuAbierto(!EstaMenuAbierto) /* Esta el menu abierto? Si o no */
    }
    console.log(EstaMenuAbierto)

    const [activarBusqueda, setActivarBusqueda] = useState([])
    const sostenerBusqueda = (e) => {
        if(e.target.value ==''){
            setActivarBusqueda([])
            return false
        }
        setActivarBusqueda(words.filter(w => w.includes(e.target.value)).slice(0,8))
    }


    return(

        <nav className="bg-gray-900 p-2">
            <div className="flex items-center justify-between">
                {/* Logo del navbar */}
                <div className="text-white text-4xl font-bold">PCS-entel</div>

                <div className="md:hidden">
                    <button className="text-white" onClick={toggleMenu}>
                        <svg
                            fill='none'
                            stroke="currentcolor"
                            strokelinecap ='round'
                            strokeLinejoin="round"
                            strokeWidth={'2'}
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>   
                        </svg>
                    </button>
                    

                </div>          
                {/* Barra de busqueda dentro del navbar+header*/}
                
                <form className="w-[650px] relative">
                    <div className="relative">
                        <input type="search" placeholder="Buscar" className="w-full p-3 rounded-full bg-slate-800 text-white text-xl" onChange={(e) => sostenerBusqueda(e)}/>
                        <button className="absolute right-1 top-1/2 -translate-y-1/2 p-6 bg-slate-900 rounded-full">
                        </button>
                    </div>
                    {
                        activarBusqueda.length > 0 &&(
                            <div className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
                                {
                                    activarBusqueda.map( s => (
                                        <span>{s}</span>
                                    ))
                                }
                            </div>
                        )
                    }

                </form>
                {/* Menu para Navbar*/}     
                <ul className="hidden md:flex space-x-6 text-xl font-bold">
                        <li><a href="#" className="text-white">Inicio</a></li>
                        <li><a href="#" className="text-white">Servicios</a></li>
                        <li><a href="#" className="text-white">Contactos</a></li>
                        
                        
                        

                </ul>

                <form className="flex space-x-3">
                     <button className=" bg-cyan-900 rounded-lg text-white px-5 py-3">Sign In</button>
                     <button className="bg-green-900 rounded-lg text-white px-4 py-3">Sign Up</button>
                </form>

            </div>

            {/* Menu flexible para menu en celulares*/}
            {EstaMenuAbierto ? (
            <ul className="flex-col md:hidden">
                        <li><a href="#" className="text-white">Inicio</a></li>
                        <li><a href="#" className="text-white">Servicios</a></li>
                        <li><a href="#" className="text-white">Contactos</a></li>
                </ul>

        ) :null}
        

        

        </nav>
        
    

    
       
    )

}

export default Navbar;
