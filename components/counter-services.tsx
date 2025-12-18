// Componente: CounterServices
// - Renderiza una serie de contadores (números animados) definidos en `dataCounter`.
// - Usa `react-countup` para animar los valores desde 0 hasta `endCounter`.
// - Las banderas `lineRight` / `lineRightMobile` controlan estilos/bordes para diseño.
import { dataCounter } from "@/data";
import CountUp from "react-countup";

const CounterServices = () => {
    return (
        // Grid responsivo que se convierte en flex en pantallas mayores
        <div className="grid justify-between max-w-3xl grid-cols-2 gap-3 mx-auto my-8 md:flex md:grid-cols-4 md:gap-6">
            {dataCounter.map(({ id, endCounter, text, lineRight, lineRightMobile }) => (
                <div key={id} className={`${lineRight && 'ltr'}`}>
                    {/* Contenedor interno que aplica bordes condicionales según flags */}
                    <div className={`${lineRight && 'px-4 border-2 border-transparent md:border-e-gray-100'} ${lineRightMobile && 'border-e-gray-100'}`} >
                        {/* Número animado con prefijo + */}
                        <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-secondary">
                            + <CountUp end={endCounter} start={0} duration={5} />
                        </p>

                        {/* Texto descriptivo del contador */}
                        <p className="text-xs uppercase max-w-[100px]">
                            {text}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CounterServices;