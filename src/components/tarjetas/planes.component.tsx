"use client";
import React, { useState } from "react";
import useNerScreen from "@/app/hooks/useNerScreen";
import Link from "next/link";
import TitleComponent from "../titles/title.component";
import SvgLazo from "../svg/icons/lazo.svg";
import SvgPuntos from "../svg/puntos.svg";
import EyeComponent from "../svg/icons/eye.svg";

interface tarjeta {
    plan: string;
    c1: string;
    c2: string;
    c3: string;
    c4: string;
    info: string;
    scale: boolean;
    index: number | null;
}

const tarjeta: tarjeta[] = [
    {
        plan: "30",
        info: "Este plan es ideal para hogares con hasta 2 teléfonos celulares y un televisor. Ofrece una velocidad suficiente para navegar por internet, realizar videollamadas y ver contenido en streaming sin interrupciones, siempre y cuando el uso sea moderado.",
        c1: "Navega sin limites",
        c2: "Streaming sin interrupciones",
        c3: "Jugá en linea sin fluctuaciones",
        c4: "hasta 200Mbps de bajada",
        scale: false,
        index: null,
    },
    {
        plan: "50",
        info: "Recomendado para familias pequeñas o para quienes tienen un uso moderado de internet. Con este plan, puedes conectar de 3 a 4 teléfonos celulares y un televisor. Es adecuado para streaming en alta definición y navegación simultánea en múltiples dispositivos.",
        c1: "Navega sin limites",
        c2: "Streaming sin interrupciones",
        c3: "Jugá en linea sin fluctuaciones",
        c4: "hasta 200Mbps de bajada",
        scale: true,
        index: null,
    },
    {
        plan: "100",
        info: "Perfecto para hogares con alta demanda de internet o para aquellos que utilizan varios dispositivos al mismo tiempo. Este plan puede soportar hasta 5 teléfonos celulares, dos televisores, o una combinación de un televisor y una consola de juegos o computadora. Proporciona una experiencia fluida incluso durante el uso intensivo de internet, como streaming en 4K, juegos en línea y descargas rápidas.",
        c1: "Navega sin limites",
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
            <SvgLazo className=" sm:block hidden w-[25%] absolute left-0 translate-y-[-50%] fill-[#dbdbfd]" />

            <SvgPuntos className=" sm:w-[15%] w-[35%] absolute right-0 top-0 sm:translate-y-[-0%] translate-y-[50%] fill-[#dbdbfd]" />
            <TitleComponent
                h1="¡Fibra Óptica a tu medida! Conéctate con 30 Mbps, 50 Mbps o 100 Mbps de velocidad."
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
                                info={item.info}
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

function Tarjeta({ plan, c1, scale, index, c2, c3, c4, info }: tarjeta) {
    const { elementRef: refScreeenCar1, isNearScreen: isNearScreenCar1 } =
        useNerScreen({
            distance: "0px",
            once: true,
        });

    const [modal, setmodal] = useState<boolean>(false);

    if (scale) {
        return (
            <div
                ref={refScreeenCar1}
                id="professional"
                className={`box  ${
                    isNearScreenCar1 ? "efecto-show-professional" : "opacity-0"
                }`}
            >
                <div>
                    <p className="title">PLAN</p>
                    <p className="title">HOGAR / EMPRESA</p>
                </div>
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

                <div
                    className={`absolute px-4 py-8 z-10  top-0 left-0 w-full h-full flex flex-col justify-start items-start  transition-all duration-300 opacity-0 ${
                        modal ? "opacity-100 z-10 " : "opacity-0 z-[-1] "
                    } rounded-[10px] p-[20px] text-white`}
                    id="modalProfessional"
                >
                    <p className="leading-relaxed text-left">{info}</p>
                </div>

                <div
                    className=" absolute z-20 top-0 left-[-1px] py-2 pl-3 pr-6 cursor-pointer rounded-br-[100%] rounded-tl-[9px] text-white"
                    onMouseEnter={() => setmodal(true)}
                    onMouseLeave={() => setmodal(false)}
                >
                    <EyeComponent className="" />
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
                    className="absolute z-30 sm:top-[-75px] sm:right-[-75px] sm:w-[150px] w-[70px] top-[-30px] right-[-30px]  rotate-[30deg] aspect-square object-contain  "
                    src="wifi.webp"
                    loading="lazy"
                    alt="imagen wifi"
                />
            )}
            {index === 0 && (
                // <img
                //     className="sm:hidden  z-30 absolute w-[70px] top-[-30px] left-[-30px]  rotate-[-30deg] aspect-square object-contain "
                //     src="wifi.webp"
                //     loading="lazy"
                //     alt="imagen wifi"
                // />

                <img
                    className="absolute sm:hidden  z-30 sm:top-[-75px] sm:right-[-75px] sm:w-[150px] w-[70px] top-[-30px] right-[-30px]  rotate-[30deg] aspect-square object-contain  "
                    src="wifi.webp"
                    loading="lazy"
                    alt="imagen wifi"
                />
            )}

            <div>
                <p className="title">PLAN</p>
                <p className="title">HOGAR / EMPRESA</p>
            </div>
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

            <div
                className={`absolute px-4 py-8  top-0 left-0 w-full h-full flex flex-col justify-start items-start bg-white transition-all duration-300 opacity-0  ${
                    modal ? "opacity-100 z-10 " : "opacity-0 z-[-1] "
                } rounded-[10px] p-[20px]`}
            >
                <p className="leading-relaxed text-left">{info}</p>
            </div>

            <div
                className=" absolute z-20 top-0 left-0 py-2 pl-3 pr-6 cursor-pointer  rounded-br-[100%] rounded-tl-[10px] text-[var(--Color1)] "
                onMouseEnter={() => setmodal(true)}
                onMouseLeave={() => setmodal(false)}
            >
                <EyeComponent className="" />
            </div>
        </div>
    );
}
