"use client";
import React from "react";
import TitleComponent from "../titles/title.component";
import BotonesComponent from "../buttons/button.component";
import useNerScreen from "@/app/hooks/useNerScreen";

const WirelessComponent = () => {
    const { elementRef, isNearScreen } = useNerScreen();

    return (
        <section
            ref={elementRef}
            className={` ${
                isNearScreen ? "efecto-show" : "opacity-0"
            } relative z-30  w-full h-full grid place-items-center overflow-hidden`}
        >
            <div className=" sm:w-[70%] w-[90%] flex sm:flex-row flex-col justify-center items-center sm:gap-20 gap-10 text-center">
                <div className=" sm:w-[40%] w-[100%] aspect-square  flex justify-center items-center relative">
                    <img
                        src="/wireless.webp"
                        alt="imagen wireless"
                        loading="lazy"
                    />
                </div>

                <div className=" w-[100%] sm:w-[60%]  h-full flex flex-col justify-center items-center sm:gap-10 gap-5">
                    <TitleComponent
                        strong="Internet"
                        span="Wireless"
                        h1="¡Navega a toda velocidad! Disfruta 10MB de Internet Wireless sin interrupciones."
                    />
                    <p
                        className={` ${
                            isNearScreen && "show-right delay-500"
                        } sm:text-xl text-sm font-medium mx-auto  leading-relaxed text-gray-500 text-center`}
                    >
                        El internet Wi-Fi wireless proporciona movilidad y
                        flexibilidad al permitir la conexión de múltiples
                        dispositivos sin cables. Su instalación es sencilla,
                        mejora la estética al eliminar desorden, y es compatible
                        con la mayoría de los dispositivos modernos. En resumen,
                        ofrece comodidad y libertad de movimiento en el acceso a
                        internet.
                    </p>
                    <BotonesComponent page="/contratar" texto="Contratar" />
                </div>
            </div>
        </section>
    );
};

export default WirelessComponent;
