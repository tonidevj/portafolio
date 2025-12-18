// Componente: Introduction
// - Sección principal de la landing con imagen, texto animado y CTA.
// - Usa `TypeAnimation` para mostrar textos que cambian dinámicamente.
// - Muestra el pitch principal del desarrollador y enlace de contacto.
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        // Contenedor principal con z-index para posicionamiento
        <div className="z-20 w-full   ">
            
            {/* Grid responsivo: imagen a la izquierda, contenido a la derecha */}
            <div className="z-20 flex flex-col md:justify-center md:flex-row md:items-center h-full p-6 py-20 md:py-0 md:grid-cols-2 ">
                {/* Imagen del desarrollador/avatar */}
                <Image src="/home-4.png" priority width="350" height="350" alt="Avatar" />

                {/* Sección de contenido: título, descripción y CTA */}
                <div className="flex flex-col justify-center max-w-md">
                    {/* Títular principal con animación de texto */}
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Si puedes pensarlo, <br />
                        {/* Texto animado que cambia cada 1 segundo */}
                        <TypeAnimation
                            sequence={[
                                'puedes programarlo',
                                1000,
                                'puedes optimizarlo',
                                1000,
                                'puedes implementarlo',
                                1000,
                                'puedes desarrollarlo',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    {/* Descripción/pitch del desarrollador */}
                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                        Como desarrollador frontend y creador de contenido, me dedico a combinar diseño y funcionalidad para crear experiencias digitales impactantes y accesibles.
                    </p>

                    {/* Botón call-to-action para contacto */}
                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/contact" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Contacta conmigo 
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Introduction;