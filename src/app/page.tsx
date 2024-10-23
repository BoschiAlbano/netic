import Preguntas from "../components/banners/preguntas.component";
import Planes from "../components/tarjetas/planes.component";
import MapaComponent from "@/components/mapa/mapa.component";
import FibraOpticaComponent from "@/components/fibraOptica/fibraOptica.component";
import WirelessComponent from "@/components/planesWireless/wireless.component";
import React from "react";
import LetterComponet from "@/components/letter/letter.componet";
import MenuComponent from "@/components/menu/menu.component";
import Header from "@/components/header/header";
import { Link } from "next-view-transitions";

// const TutorialesComponent = React.lazy(
//     () => import("../components/tutoriales/tutoriales.component")
// );

export default function Home() {
    return (
        <Header>
            <main
                id="start"
                className="w-full min-h-screen h-full relative flex flex-col  items-center mostrar sm:gap-52 gap-20  "
            >
                <div className="  contenedor rotate-[180deg] z-30 "></div>
                <MenuComponent />

                <section className="home relative z-30 min-h-screen sm:h-full w-full flex flex-col justify-evenly items-center gap-0 ">
                    <div className="z-20 sm:w-[95%] w-full  h-full grid sm:grid-cols-2 grid-cols-1 place-items-center text-center gap-10 ">
                        <div className=" z-30 grid place-items-center gap-4 sm:w-full  ">
                            <div className="flex flex-col justify-canter items-start gap-4 relative w-[90%]   ">
                                <LetterComponet />
                                <h1 className=" sm:bg-white sm:text-2xl font-light text-lg sm:mb-4 mb-2 text-black text-start">
                                    Conéctate con nosotros hoy y experimenta la
                                    libertad de una conexión sin límites. En
                                    Netic, somos un equipo apasionado y
                                    comprometido con la conectividad. Nos
                                    especializamos en ser tu proveedor de
                                    servicios de internet (ISP) de confianza.
                                </h1>
                                <div className=" w-full flex justify-start items-center">
                                    <Link
                                        href="/empresa"
                                        className=" bg-[var(--Color1)] text-white sm:text-xl text-sm sm:py-3 sm:px-6 py-2 px-4 rounded-[50px] font-semibold hover:bg-[#4C3F85]"
                                        id="button"
                                    >
                                        Conocé más
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <img
                            loading="lazy"
                            src="/banner.webp"
                            alt="banner"
                            fetchPriority={"high"}
                            className=" w-[90%] sm:block hidden"
                        />
                    </div>
                </section>

                <div className="  w-full grid place-items-center  relative sm:py-20 py-10  ">
                    <FibraOpticaComponent />
                    <section className="curved"></section>
                    <div
                        id="planes"
                        className=" absolute bottom-0 translate-y-[50px]"
                    ></div>
                </div>

                <div className=" w-full grid place-items-center relative py-10">
                    <Planes />
                </div>

                <div className=" w-full grid place-items-center relative py-10">
                    <WirelessComponent />
                    <section className="curved"></section>
                </div>

                <div className="  w-full grid place-items-center relative pt-10 ">
                    <MapaComponent />
                </div>
                {/* <div className="  w-full grid place-items-center  relative pb-10">
                    <Preguntas />
                </div> */}
            </main>
        </Header>
    );
}
