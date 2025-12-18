"use client"

// Página: About Me
// - Muestra la trayectoria profesional.
// - Componentes principales:
//   - `TransitionPage`: animación de transición al entrar
//   - `ContainerPage`: layout responsivo
//   - `Avatar`: imagen decorativa
//   - `TimeLine`: línea de tiempo con experiencia laboral
import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const AboutMePage = () => {
    return (
        <>
            {/* Animación de transición al entrar a la página */}
            <TransitionPage />

            {/* Contenedor centrado con padding responsivo */}
            <ContainerPage>
                {/* Avatar decorativo posicionado de forma absoluta */}
                <Avatar />

                {/* Título/encabezado de la sección */}
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Toda mi{' '}
                    <span className="font-bold text-secondary">
                        trayectoria
                    </span>
                </h1>

                {/* Línea de tiempo con experiencia laboral */}
                <TimeLine />

            </ContainerPage>
        </>
    );
}

export default AboutMePage;