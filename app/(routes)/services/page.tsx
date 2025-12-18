// Página: Services
// - Muestra los servicios ofrecidos por el desarrollador.
// - Componentes principales:
//   - `TransitionPage`: animación de transición al entrar
//   - `CircleImage`: elemento decorativo circular
//   - `AvatarServices`: avatar/imagen representativa
//   - Descripción de servicios y botón de contacto
// - Nota: El slider de servicios se debe completar/descomentar en el div vacío
import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image"; 
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />
            {/* Animación de transición al entrar a la página */}

            {/* Elemento decorativo circular */}
            <CircleImage />

            {/* Avatar/imagen representativa de servicios */}
            <AvatarServices />

            {/* Contenedor principal: descripción + slider (pendiente) */}
            <div className="flex items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                {/* Sección de descripción de servicios */}
                <div className="max-w-[450px]">
                    {/* Título con énfasis en la palabra "servicios" */}
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-secondary"> servicios.</span></h1>

                    {/* Descripción detallada de los servicios ofrecidos */}
                    <p className="mb-3 text-xl text-gray-300">Ofrezco servicios de desarrollo web frontend especializados en la creación de sitios web y aplicaciones atractivas y funcionales. Utilizando las últimas tecnologías, como TailwindCSS, JavaScript, TypeScript, entre otros. diseño interfaces de usuario intuitivas y responsivas que reflejan la identidad de marca de mis clientes y mejoran su presencia en línea.</p>

                    {/* Botón de call-to-action para contactar */}
                    <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button>
                </div>

                {/* Sección de carrusel de servicios (por completar) */}
                <div>
                    {/* TODO: Agregar componente SliderServices aquí */}
                </div>
            </div>
        </>
    );
}

export default ServicesPage;