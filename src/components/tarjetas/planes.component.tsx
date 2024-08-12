"use client";
import React from "react";
import TitleComponent from "../titles/title.component";
import useNerScreen from "@/app/hooks/useNerScreen";
import Link from "next/link";

interface tarjeta {
    plan: string;
    c1: string;
    c2: string;
    c3: string;
    c4: string;
    scale: boolean;
}

const tarjeta: tarjeta[] = [
    {
        plan: "50",
        c1: "Navegá sin limites",
        c2: "Streaming sin interrupciones",
        c3: "Jugá en linea sin fluctuaciones",
        c4: "hasta 200Mbps de bajada",
        scale: false,
    },
    {
        plan: "100",
        c1: "Navegá sin limites",
        c2: "Streaming sin interrupciones",
        c3: "Jugá en linea sin fluctuaciones",
        c4: "hasta 200Mbps de bajada",
        scale: true,
    },
    {
        plan: "200",
        c1: "Navegá sin limites",
        c2: "Streaming sin interrupciones",
        c3: "Jugá en linea sin fluctuaciones",
        c4: "hasta 200Mbps de bajada",
        scale: false,
    },
];

const TarjetaPlanesComponent = () => {
    return (
        <section
            className={` relative sm:w-[90%] w-full z-30 grid place-items-center content-center p-0  sm:min-h-screen sm:h-full h-full gap-10 `}
        >
            <div id="IdPlanesWifi"></div>

            <TitleComponent
                h1="Conocé nuestros servicios de fibra óptica y elegí la opción
                    que mejor se adapte a tus necesidades y preferencias."
                span="internet la mejor conexión para tu hogar"
                strong="PLANES"
            />

            <div className={`w-full z-30 relative sm:my-20 my-0  `}>
                <div className={`grillaPlanes  `}>
                    {tarjeta.map((item, index) => {
                        return (
                            <Tarjeta
                                key={index}
                                plan={item.plan}
                                c1={item.c1}
                                c2={item.c2}
                                c3={item.c3}
                                c4={item.c4}
                                scale={item.scale}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
export default TarjetaPlanesComponent;

function Tarjeta({ plan, c1, c2, c3, c4, scale }: tarjeta) {
    const { elementRef: refScreeenCar1, isNearScreen: isNearScreenCar1 } =
        useNerScreen({
            distance: "0px",
            once: true,
        });

    if (scale) {
        return (
            <div
                ref={refScreeenCar1}
                id="professional"
                className={`box  ${
                    isNearScreenCar1 ? "efecto-show-professional" : "opacity-0"
                }`}
            >
                <p className="title">PLAN</p>
                <div className="price">
                    <b>{plan}</b>
                    <span>Mbps</span>
                </div>

                <div className="features">
                    <div>{c1}</div>
                    <div>{c2}</div>
                    <div>{c3}</div>
                    <div>{c4}</div>
                </div>

                <div className="button">
                    <Link href={"/contratar"}>
                        <button>Contratar</button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div
            ref={refScreeenCar1}
            className={`box  ${isNearScreenCar1 ? "efecto-show" : "opacity-0"}`}
        >
            <p className="title">PLAN</p>
            <div className="price">
                <b>{plan}</b>
                <span>Mbps</span>
            </div>

            <div className="features">
                <div>{c1}</div>
                <div>{c2}</div>
                <div>{c3}</div>
                <div>{c4}</div>
            </div>

            <div className="button">
                <Link href={"/contratar"}>
                    <button>Contratar</button>
                </Link>
            </div>
        </div>
    );
}
