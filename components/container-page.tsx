// Componente: ContainerPage
// - Wrapper reutilizable que aplica el ancho máximo, márgenes y padding
//   comunes para las páginas interiores (centrado y responsivo).
// - Propiedades:
//   - `children`: contenido de la página que se renderiza dentro del contenedor.
interface ContainerPageProps {
    children: React.ReactNode
}

const ContainerPage = (props: ContainerPageProps) => {
    const { children } = props

    return (
        // Caja centrada con max-width y padding para separar del borde
        <div className="w-full max-w-6xl px-4 pb-40 mx-auto mt-40 md:pb-0 md:px-6">
            {children}
        </div>
    );
}

export default ContainerPage;