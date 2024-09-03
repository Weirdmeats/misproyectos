    import React from 'react'

    function Footer() {
    return (
        /* Footer o pie */
        <footer className='bg-slate-950 text-white py-10 '>
        <div className="container mx-auto   flex flex-col  md:flex-row justify-between ">
            
            {/* Contactos */}
            <div className="flex-1">
                <h2 className='font-bold text-2xl '>Contactos</h2>
                <p>Correo electrónico: <a href="mailto:scissors@gmail.com" className="text-cyan-400 hover:underline">scissors@gmail.com</a></p>
                <p>Número telefónico: <a href="tel:+56982390862" className="text-cyan-400 hover:underline">+56982390862</a></p>
            </div>



            {/* Links importantes */}
            <div className="flex-1 text-center">
                <h2 className='font-bold text-2xl '>Links importantes</h2>
                <ul>
                    <li><a href="#" className="text-cyan-400 hover:underline">Términos de privacidad</a></li>
                    <li><a href="#" className="text-cyan-400 hover:underline">ⓇCopyright 2024</a></li>
                    {/* Puedes añadir más enlaces aquí si es necesario */}
                </ul>
            </div>
            {/* Otra seccion */}



            <div className="flex-1 text-right">
                <h2 className='font-bold text-2xl '>Otra Sección</h2>
                <p>Correo electrónico: <a href="mailto:scissors@gmail.com" className="text-cyan-400 hover:underline">scissors@gmail.com</a></p>
                <p>Número telefónico: <a href="tel:+56982390862" className="text-cyan-400 hover:underline">+56982390862</a></p>
            </div>

        </div>
    </footer>

    )
    }





    export default Footer