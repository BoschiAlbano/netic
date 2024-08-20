"use client";
import React from "react";
import useNerScreen from "@/app/hooks/useNerScreen";
import Link from "next/link";
import TitleComponent from "../titles/title.component";

interface tarjeta {
    plan: string;
    c1: string;
    c2: string;
    c3: string;
    c4: string;
    scale: boolean;
    index: number | null;
}

const tarjeta: tarjeta[] = [
    {
        plan: "50",
        c1: "Navegá sin limites",
        c2: "Streaming sin interrupciones",
        c3: "Jugá en linea sin fluctuaciones",
        c4: "hasta 200Mbps de bajada",
        scale: false,
        index: null,
    },
    {
        plan: "100",
        c1: "Navegá sin limites",
        c2: "Streaming sin interrupciones",
        c3: "Jugá en linea sin fluctuaciones",
        c4: "hasta 200Mbps de bajada",
        scale: true,
        index: null,
    },
    {
        plan: "200",
        c1: "Navegá sin limites",
        c2: "Streaming sin interrupciones",
        c3: "Jugá en linea sin fluctuaciones",
        c4: "hasta 200Mbps de bajada",
        scale: false,
        index: null,
    },
];

const TarjetaPlanesComponent = () => {
    return (
        <section
            className={`  relative sm:w-[90%] w-full z-30 grid place-items-center content-center `}
        >
            <TitleComponent
                h1="Tenemos los mejores planes para vos"
                span="Fibra Optica"
                strong="PLANES"
            />

            <div className={`w-full z-30 relative  mt-20`}>
                <div className={`grillaPlanes`}>
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
                                index={index}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
export default TarjetaPlanesComponent;

function Tarjeta({ plan, c1, c2, c3, c4, scale, index }: tarjeta) {
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
            className={`box relative ${
                isNearScreenCar1 ? "efecto-show" : "opacity-0"
            } shadow-header`}
        >
            {index === 2 && (
                <img
                    className="absolute sm:top-[-75px] sm:right-[-75px] sm:w-[150px] w-[70px] top-[-30px] right-[-30px]  rotate-[30deg] aspect-square object-contain  "
                    src="wifi.png"
                    alt=""
                />
            )}
            {index === 0 && (
                <img
                    className="sm:hidden absolute w-[70px] top-[-30px] left-[-30px]  rotate-[-30deg] aspect-square object-contain "
                    src="wifi.png"
                    alt=""
                />
            )}

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
