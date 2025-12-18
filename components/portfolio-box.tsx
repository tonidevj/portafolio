// Componente: PortfolioBox
// - Tarjeta individual que muestra un proyecto del portafolio.
// - Recibe un objeto `data` con información del proyecto (título, imagen, enlaces).
// - Incluye botones para ver el código (GitHub) y la demo en vivo.
import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string
        image: string
        urlGithub: string
        urlDemo: string
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    // Desestructurar props y datos del proyecto
    const { data } = props
    const { id, title, image, urlDemo, urlGithub } = data

    return (
        <div
        
            key={id}
            className="p-4 border border-teal-50 rounded-xl"
        >
            {/* Tarjeta contenedora del proyecto */}
            {/* Título del proyecto */}
            <h3 className="mb-4 text-xl">{title}</h3>

            {/* Imagen del proyecto */}
            <Image
                src={image}
                alt="Image"
                width={200} height={200} className="w-full md:w-[200px] rounded-2xl h-auto"
            />

            {/* Botones de acción: GitHub y Live Demo */}
            <div className="flex gap-5 mt-5">
                {/* Enlace al repositorio en GitHub */}
                <Link
                    href={urlGithub}
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80"
                >
                    Github
                </Link>

                {/* Enlace a la demo en vivo */}
                <Link
                    href={urlDemo}
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80"
                >
                    Live demo
                </Link>
            </div>
        </div>
    );
}

export default PortfolioBox
