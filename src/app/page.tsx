import Preguntas from "../components/banners/preguntas.component";
import BotonesComponent from "../components/buttons/button.component";
import Header from "../components/header/header";
import MenuComponent from "../components/menu/menu.component";
import ParticlesComponent from "../components/particles/particles";
import Planes from "../components/tarjetas/planes.component";
import TutorialesComponent from "../components/tutoriales/tutoriales.component";

export default function Home() {
    return (
        <main className="w-full min-h-screen h-full relative flex flex-col  items-center mostrar  ">
            {/* Menu */}
            <Header />

            <div className=" z-10 w-full h-full absolute top-0 left-0 contenedor "></div>
            <div className=" z-10 w-full h-full absolute top-0 left-0 blur-effect-contenedor "></div>

            <section className="home relative z-30 sm:h-screen h-[50vh]  w-full flex flex-col justify-center items-center ">
                <div className="relative z-30 grid place-content-center gap-4 sm:mb-40 mb-0">
                    <div className=" flex flex-col justify-canter items-center gap-0   text-[var(--Color1)]">
                        <h1 className="texto-efecto-entrada texto-responsive-50 font-extrabold sm:tracking-[5px] tracking-[1px]">
                            LLegamos a tu hogar
                        </h1>
                        <h1 className="texto-efecto-entrada texto-responsive-40 font-normal">
                            velocidad, seguridad y confiabilidad
                        </h1>
                    </div>
                    <BotonesComponent texto="Contratar" page="/contratar" />
                </div>
            </section>

            {/* menu redes */}
            <MenuComponent />
            <ParticlesComponent />

            {/* Planes */}
            <Planes />

            {/* tutoriales */}
            <TutorialesComponent />

            {/* Preguntas Frecuentes */}
            <Preguntas />
        </main>
    );
}
