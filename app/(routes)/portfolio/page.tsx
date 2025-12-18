// Página: Portfolio
// Muestra los proyectos del portafolio utilizando datos de `data.tsx`
// Componentes principales:
// - `ContainerPage`: layout/contorno para páginas interiores
// - `TransitionPage`: animación/transición al entrar
// - `AvatarPortfolio`, `CircleImage`: elementos visuales decorativos
// - `PortfolioBox`: tarjeta individual para cada proyecto
import Image from "next/image";
import Link from "next/link";

import { dataPortfolio } from "@/data";

import AvatarPortfolio from "@/components/avatar-portfolio";
import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";


const PortfolioPage = () => {

    return (
        // Contenedor común que aplica el layout de la página
        <ContainerPage>
            {/* Animación/transición al cargar la sección */}
            <TransitionPage />

            {/* Avatar/imagen representativa del portafolio (posicionamiento absoluto) */}
            <AvatarPortfolio />

            {/* Imagen circular decorativa */}
            <CircleImage />

            {/* Contenido principal: título y grid de proyectos */}
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">Mis últimos <span className="font-bold text-secondary">trabajos realizados</span></h1>

                {/* Grid responsiva que renderiza una tarjeta por cada item en `dataPortfolio` */}
                <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4">
                    {dataPortfolio.map((data) => (
                        // Componente que muestra título, imagen y enlace al proyecto
                        <PortfolioBox key={data.id} data={data} />
                    ))}
                </div>
            </div>
        </ContainerPage>
    );
}

export default PortfolioPage;