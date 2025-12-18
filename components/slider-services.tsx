"use client"

// Componente: SliderServices
// - Muestra los servicios en un carrusel usando Swiper.
// - `serviceData` provee icono, título y descripción para cada slide.
// - Este componente es un Client Component porque Swiper y la interacción
//   requieren ejecución en el cliente.
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { serviceData } from '@/data';

const SliderServices = () => {
    return (
        // Configuración de Swiper: breakpoints para responsive,
        // modo libre y paginación clicable.
        <Swiper
            breakpoints={{
                // En pantallas pequeñas mostramos 1 slide
                320: { slidesPerView: 1, spaceBetween: 15 },
                // En tablets mostramos 2 slides
                768: { slidesPerView: 2, spaceBetween: 15 },
                // En escritorio mostramos 3 slides
                1024: { slidesPerView: 3, spaceBetween: 15 }
            }}
            freeMode={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="h-[280px] md:h-[340px] w-[270px] md:w-[550px]"
        >

            {/* Iteramos `serviceData` para renderizar cada slide */}
            {serviceData.map((item, index) => (
                <SwiperSlide key={index}>
                    {/* Tarjeta del servicio: icono + contenido */}
                    <div className="flex px-6 py-8 h-auto md:h-[290px] rounded-lg cursor-pointer bg-[rgba(65,47,123,0.15)] sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-secondary border-2">
                        {/* Icono del servicio (renderizado desde `data.tsx`) */}
                        <div className="mb-4 text-4xl text-secondary">{item.icon}</div>

                        {/* Título y descripción del servicio */}
                        <div>
                            <h3 className="mb-4 text-lg">{item.title}</h3>
                            <p className="text-sm">{item.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SliderServices;