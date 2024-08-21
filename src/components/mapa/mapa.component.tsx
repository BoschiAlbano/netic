"use client";
import React from "react";
import TitleComponent from "../titles/title.component";
import MapaSvg from "../svg/icons/mapa.svg";
import TelefonoSvg from "../svg/icons/telefono.svg";
import useNerScreen from "@/app/hooks/useNerScreen";
import Whatsapp from "../svg/icons/whatsapp.svg";

interface contacto {
    Icono: React.JSX.Element;
    titulo: string;
    subtitulo: string;
    parrafo: string;
    index: number | null;
    color: string;
    color_texto: string;
}

const contacto: contacto[] = [
    {
        Icono: <TelefonoSvg />,
        titulo: "Telefono",
        subtitulo: "+54 381-9999999",
        parrafo: "",
        index: null,
        color: "#ffff",
        color_texto: "#000",
    },
    {
        Icono: <TelefonoSvg />,
        titulo: "Soporte",
        subtitulo: "+54 381-9999999",
        parrafo: "",
        index: null,
        color: "#ffff",
        color_texto: "#000",
    },
    {
        Icono: <MapaSvg />,
        titulo: "Local",
        subtitulo: "Ildelfonso de las muñecas 1431, San Miguel de Tucuman",
        parrafo: "",
        index: null,
        color: "#ffff",
        color_texto: "#000",
    },
    {
        Icono: <Whatsapp height={"100%"} width={"100%"} />,
        titulo: "WhatApp",
        subtitulo: "+54 381-9999999",
        parrafo: "Comunicate via WhatsApp con nuestros asesores ",
        index: null,
        color: "#93CC65",
        color_texto: "#ffff",
    },
];

const MapaComponent = () => {
    return (
        <section
            className={`relative sm:w-[70%] w-[90%] z-30 grid place-items-center content-center sm:h-full h-full `}
        >
            <TitleComponent
                strong="Contacto "
                span="& Soporte"
                h1="Nuestros asesores te pueden ayudar"
            />

            <div
                className={`w-full  grid lg:grid-cols-2 grid-cols-1  gap-10  items-center mt-20 relative`}
            >
                {/* mapa */}
                <Map />
                <div className=" tarjetas-contacto grid sm:grid-cols-2 grid-cols-1 sm:grid-rows-2 grid-rows-1 sm:gap-10 gap-5">
                    {contacto.map((item, index) => {
                        return (
                            <Contacto
                                key={index}
                                Icono={item.Icono}
                                parrafo={item.parrafo}
                                subtitulo={item.subtitulo}
                                titulo={item.titulo}
                                index={index}
                                color={item.color}
                                color_texto={item.color_texto}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default MapaComponent;

function Contacto({
    Icono,
    parrafo,
    subtitulo,
    titulo,
    color,
    color_texto,
}: contacto) {
    const { elementRef: refScreeen, isNearScreen: isNearScreen } = useNerScreen(
        {
            distance: "0px",
            once: true,
        }
    );
    return (
        <div
            ref={refScreeen}
            className={`${
                isNearScreen ? "efecto-show" : "opacity-0"
            }   flex flex-col gap-2 justify-center items-center rounded-xl bg-clip-border  py-10 cursor-pointer transition-all duration-300 shadow-lg`}
            style={{ background: color, color: color_texto }}
        >
            <span className=" sm:w-[50px] sm:h-[50px] w-[30px] h-[40px]">
                {Icono}
            </span>

            <span className="sm:text-2xl text-xl font-bold">{titulo}</span>
            <span className=" text-center max-w-[300px]">
                <strong className="sm:text-xl text-lg">{subtitulo}</strong>
                <br />
                <span className="sm:text-lg text-lg">{parrafo}</span>
            </span>
        </div>
    );
}

function Map() {
    const { elementRef: refScreeen, isNearScreen: isNearScreen } = useNerScreen(
        {
            distance: "0px",
            once: true,
        }
    );

    return (
        <div
            ref={refScreeen}
            className={`${
                isNearScreen ? "efecto-show" : "opacity-0"
            } relative h-full flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 cursor-pointer shadow-lg`}
        >
            <img
                className="absolute z-[99] sm:top-[-130px] sm:left-[-75px] sm:w-[150px]
                    w-[100px] top-[-80px] left-[-30px] aspect-square object-contain  "
                src="soporte.png"
                alt=""
            />
            <div className=" h-full min-h-[250px] overflow-hidden  rounded-xl  ">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.9025592612775!2d-65.2040922237187!3d-26.811231088972857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c25472e83dd%3A0x56e533bf54e671d8!2sIldefonso%20de%20las%20Mu%C3%B1ecas%201431%2C%20T4001JTK%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1721344420126!5m2!1ses!2sar&controls=0"
                    width="100%"
                    height="100%"
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
}
