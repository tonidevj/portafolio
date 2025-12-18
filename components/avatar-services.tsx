// Componente: AvatarServices
// - Imagen decorativa utilizada en la sección de servicios.
// - Envuelto en `MotionTransition` con `position='right'` para animación.
// - Visible sólo en pantallas medianas/anchas (clases Tailwind).
import Image from "next/image";
import { MotionTransition } from "./transition-component";

const AvatarServices = () => {
    return (
        <MotionTransition position='right' className="bottom-0 left-0 hidden md:inline-block md:absolute">
            {/* Imagen representativa de la sección de servicios */}
            <Image src="/services.png" width="200" height="200" className="  " alt="Particles " />
        </MotionTransition>
    );
}

export default AvatarServices;