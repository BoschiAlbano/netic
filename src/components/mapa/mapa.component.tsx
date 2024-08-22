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
        color: "#F6F6FD",
        color_texto: "#000",
    },
    {
        Icono: <TelefonoSvg />,
        titulo: "Soporte",
        subtitulo: "+54 381-9999999",
        parrafo: "",
        index: null,
        color: "#F6F6FD",
        color_texto: "#000",
    },
    {
        Icono: <MapaSvg />,
        titulo: "Local",
        subtitulo: "Ildelfonso de las muñecas 1431, San Miguel de Tucuman",
        parrafo: "",
        index: null,
        color: "#F6F6FD",
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
    const { elementRef, isNearScreen } = useNerScreen();

    return (
        <section
            ref={elementRef}
            className={` ${
                isNearScreen ? "efecto-show" : "opacity-0"
            } relative z-30  w-full h-full grid place-items-center `}
        >
            <div className="sm:w-[70%] w-[90%]  grid sm:grid-cols-2 grid-cols-1 flex-col-reverse sm:gap-20 gap-10 text-center  relative">
                <div className=" h-full flex flex-col justify-center items-center sm:gap-10 gap-5">
                    <TitleComponent
                        strong="Contacto "
                        span="& Soporte"
                        h1="Nuestros asesores pueden ayudarte"
                    />

                    <div
                        className={` ${
                            isNearScreen && "show-left delay-500"
                        } h-full flex flex-col justify-center items-center sm:gap-10 gap-5`}
                    >
                        <p className=" sm:text-xl text-sm font-medium text-start">
                            <strong>Soporte Técnico</strong> <br /> Para soporte
                            técnico relacionado con nuestros productos o
                            servicios, puedes enviarnos un correo electrónico a
                            soporte@tudominio.com o llamarnos al +1 234 567 890.
                        </p>
                        <p className=" sm:text-xl text-sm font-medium text-start">
                            <strong>Consultas Generales</strong> <br /> Para
                            cualquier otra consulta, ya sea sobre nuestros
                            servicios, colaboraciones o información adicional,
                            contáctanos a través de info@tudominio.com.
                        </p>
                        <p className=" sm:text-xl text-sm font-medium text-start">
                            <strong>Formulario de Contacto</strong> <br />{" "}
                            También puedes usar nuestro{" "}
                            <a
                                className=" text-[var(--Color1)] font-semibold underline"
                                href="/contratar"
                            >
                                {" "}
                                formulario de contacto
                            </a>
                            , y te responderemos lo antes posible.
                        </p>
                        <p className=" sm:text-xl text-sm font-medium text-start">
                            <strong>Horario de Atención</strong> <br /> Lunes a
                            Viernes: 9:00 AM - 6:00 PM Sábados: 10:00 AM - 2:00
                            PM Domingos y festivos: Cerrado
                        </p>
                        <strong>
                            Gracias por confiar en nosotros. Tu satisfacción es
                            nuestra prioridad.
                        </strong>
                    </div>
                </div>

                <div
                    className={`${
                        isNearScreen && "show-right delay-400"
                    } min-h-[250px]  w-[100%] h-full flex justify-center items-center relative`}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.9025592612775!2d-65.2040922237187!3d-26.811231088972857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c25472e83dd%3A0x56e533bf54e671d8!2sIldefonso%20de%20las%20Mu%C3%B1ecas%201431%2C%20T4001JTK%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1721344420126!5m2!1ses!2sar&maptype=satellite&controls=0"
                        width="100%"
                        height="100%"
                        loading="lazy"
                        className=" z-20"
                    ></iframe>
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
            {/* <img
                className="absolute z-[99] sm:top-[-130px] sm:left-[-75px] sm:w-[150px]
                    w-[100px] top-[-80px] left-[-30px] aspect-square object-contain  "
                src="soporte.png"
                alt=""
            /> */}
            <div className=" h-full min-h-[250px] overflow-hidden  rounded-xl  ">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.9025592612775!2d-65.2040922237187!3d-26.811231088972857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c25472e83dd%3A0x56e533bf54e671d8!2sIldefonso%20de%20las%20Mu%C3%B1ecas%201431%2C%20T4001JTK%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1721344420126!5m2!1ses!2sar&maptype=satellite&controls=0"
                    width="100%"
                    height="100%"
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
}

function anterior() {
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
                {/* mapa */}
                <Map />
            </div>
        </section>
    );
}
