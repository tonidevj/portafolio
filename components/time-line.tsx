// Componente: TimeLine
// Renderiza la línea de tiempo de la sección "About" usando `dataAboutPage`.
// Cada entrada muestra: título (posición/rol), fecha, subtítulo (  empresa) y descripción.
import { dataAboutPage } from "@/data";

const TimeLine = () => {
    return (
        // Contenedor principal con división vertical entre elementos
        <div className="flex flex-col justify-center divide-y divide-slate-200">
            <div className="w-full max-w-3xl mx-auto md:pb-40 md:pt-20">
                <div className="-my-6">
                    {/* Iteramos sobre los datos de experiencia y renderizamos cada bloque */}
                    {dataAboutPage.map((data) => (
                        <div key={data.id} className="relative py-6 pl-8 sm:pl-32 group">
                            {/* Título/rol del trabajo */}
                            <h3 className="mb-1 text-2xl font-bold sm:mb-0">{data.title}</h3>

                            {/*
                                Contenedor que incluye la fecha (time) y el subtítulo.
                                Las clases `before:` y `after:` gestionan las líneas y el marcador
                                circular que forman la apariencia de timeline.
                            */}
                            <div className="flex flex-col sm:flex-row items-start mb-1 
                                        group-last:before:hidden before:absolute 
                                        before:left-2 sm:before:left-0 before:h-full
                                        before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] 
                                        before:self-start before:-translate-x-1/2 
                                        before:translate-y-3 after:absolute after:left-2 
                                        sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 
                                        after:border-4 after:box-content after:border-slate-50 
                                        after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 
                                        after:translate-y-1.5">
                                {/* Fecha del evento/posición */}
                                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">{data.date}</time>

                                {/* Empresa o subtítulo */}
                                <div className="text-xl font-bold text-gray-400">{data.subtitle}</div>
                            </div>

                            {/* Descripción breve del puesto o experiencia */}
                            <div className="text-slate-400">{data.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TimeLine;