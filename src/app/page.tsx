import Preguntas from "../components/banners/preguntas.component";
import BotonesComponent from "../components/buttons/button.component";
import Header from "../components/header/header";
import MenuComponent from "../components/menu/menu.component";
import ParticlesComponent from "../components/particles/particles";
import Planes from "../components/tarjetas/planes.component";
import TutorialesComponent from "../components/tutoriales/tutoriales.component";
import TarjetasBanner from "@/components/tarjetas/tarjetas.planes.component";
import MapaComponent from "@/components/mapa/mapa.component";

export default function Home() {
    return (
        <main className="w-full min-h-screen h-full relative flex flex-col  items-center mostrar   ">
            <Header />

            <section className=" sm:block hidden">
                <ParticlesComponent />
            </section>

            <div className=" z-10 w-full sm:h-full h-screen absolute top-0 left-0 contenedor "></div>

            <section className="home relative z-30 sm:min-h-screen sm:h-full h-screen w-full flex flex-col justify-evenly items-center gap-0">
                <div className="mt-[5%] relative z-30 grid place-content-center gap-4  ">
                    <div className="flex flex-col justify-canter items-center gap-0  text-[var(--Color1)]">
                        <h1 className="   sm:text-6xl text-3xl font-extrabold sm:tracking-[5px] tracking-[1px] sm:mb-4 mb-2">
                            LLegamos a tu hogar
                        </h1>
                        <h1 className=" sm:text-3xl text-lg font-normal sm:mb-4 mb-2">
                            velocidad, seguridad y confiabilidad
                        </h1>
                    </div>
                    <BotonesComponent texto="Contratar" page="/contratar" />
                </div>

                <div>
                    <TarjetasBanner />
                </div>
            </section>

            <MenuComponent />

            <Planes />

            <MapaComponent />

            <TutorialesComponent />

            <Preguntas />
        </main>
    );
}
