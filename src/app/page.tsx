"use client";

import Preguntas from "../components/banners/preguntas.component";
import BotonesComponent from "../components/buttons/button.component";
import Planes from "../components/tarjetas/planes.component";
import MapaComponent from "@/components/mapa/mapa.component";
import FibraOpticaComponent from "@/components/fibraOptica/fibraOptica.component";
import WirelessComponent from "@/components/planesWireless/wireless.component";
import useNerScreen from "./hooks/useNerScreen";
import React, { Suspense } from "react";

const TutorialesComponent = React.lazy(
    () => import("../components/tutoriales/tutoriales.component")
);

export default function Home() {
    const { elementRef, isNearScreen } = useNerScreen();

    return (
        <main className="w-full  min-h-screen h-full relative flex flex-col  items-center mostrar sm:gap-52 gap-20  ">
            <section className="home relative z-30 min-h-screen sm:h-full w-full flex flex-col justify-evenly items-center gap-0 ">
                <div className="  contenedor rotate-[180deg] "></div>

                <div className="z-20 w-full h-full grid sm:grid-cols-2 grid-cols-1 place-items-center text-center gap-10 ">
                    <div className=" z-30 grid place-items-center gap-4 sm:w-full w-[95%]  ">
                        <div className="flex flex-col justify-canter items-center gap-4 relative   ">
                            <h1 className=" text-[var(--Color1)]  sm:text-6xl text-3xl font-extrabold sm:tracking-[5px] tracking-[1px] sm:mb-4 mb-2">
                                LLegamos a tu hogar
                            </h1>
                            <h1 className=" sm:text-xl text-lg font-normal sm:mb-4 mb-2 text-black">
                                Conéctate con nosotros hoy y experimenta la
                                libertad de una conexión sin límites.
                            </h1>
                            <BotonesComponent
                                texto="Contratar"
                                page="/contratar"
                            />

                            <img
                                className=" sm:block hidden animar-wifi absolute opacity-[0.9] w-[150px] top-[-90%] right-[50%] translate-x-[50%]  aspect-square object-contain "
                                src="wifi.webp"
                                loading="lazy"
                                alt=""
                            />
                        </div>
                    </div>

                    <img
                        loading="lazy"
                        src="/banner.webp"
                        alt=""
                        fetchPriority={"high"}
                        className=" w-[90%] "
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

            <div
                ref={elementRef}
                className=" w-full grid place-items-center relative py-10"
            >
                <WirelessComponent />
                <section className="curved"></section>
            </div>

            <div className="  w-full grid place-items-center relative py-10 ">
                <MapaComponent />
            </div>

            <div className="  w-full grid place-items-center  sm:py-20 py-10 relative">
                <Preguntas />
                <section className="curved"></section>
            </div>
            <div className="  w-full grid place-items-center">
                <Suspense fallback={<p>Cargando...</p>}>
                    {isNearScreen ? (
                        <TutorialesComponent />
                    ) : (
                        <p>Cargando...</p>
                    )}
                </Suspense>
            </div>
        </main>
    );
}
