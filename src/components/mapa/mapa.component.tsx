"use client";
import React from "react";
import TitleComponent from "../titles/title.component";
import MapaSvg from "../svg/icons/mapa.svg";
import TelefonoSvg from "../svg/icons/telefono.svg";
import useNerScreen from "@/app/hooks/useNerScreen";
import Whatsapp from "../svg/icons/whatsapp.svg";
import SvgPuntos from "../svg/puntos.svg";
import SendSvg from "../svg/icons/send.svg";
import PhoneSvg from "../svg/icons/phone.svg";

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

const ContactoSoporte = () => {
    const { elementRef, isNearScreen } = useNerScreen();

    return (
        <section
            ref={elementRef}
            className={`  relative z-30  w-full h-full grid place-items-center sm:gap-20 gap-10  `}
        >
            <SvgPuntos className=" sm:w-[10%] w-[25%]  absolute left-0 sm:translate-x-[25%] translate-x-[-15%]  opacity-[.6] top-0 sm:translate-y-[-0%] translate-y-[-120%] fill-[#dbdbfd] rotate-[15deg]" />

            <TitleComponent
                strong="Contacto "
                span="& Soporte"
                h1="Nuestros asesores pueden ayudarte"
            />
            <div className="sm:w-[75%]  w-[90%]  grid sm:grid-cols-2 grid-cols-1 flex-col-reverse sm:gap-20 gap-10 text-center  relative">
                <div className=" h-full flex flex-col justify-center items-center sm:gap-10 gap-5">
                    <div
                        className={` ${
                            isNearScreen && "show-left delay-500"
                        } h-full flex flex-col justify-center items-center sm:gap-10 gap-5 text-gray-600`}
                    >
                        <span className=" relative sm:text-xl text-sm font-medium text-start mx-auto  leading-relaxed shadow-lg bg-white rounded-[10px] sm:p-8 p-4 ">
                            <p className=" absolute top-0 right-0 p-4 text-green-300">
                                ✔
                            </p>
                            <p className=" text-black sm:text-2xl text-lg mb-4 font-semibold">
                                Soporte Técnico
                            </p>
                            <p>
                                Para soporte técnico relacionado con nuestros
                                productos o servicios, puedes enviarnos un
                                correo electrónico o a través de whatsApp.
                            </p>
                            <ul>
                                <li className=" flex gap-2 items-center mx-auto  leading-relaxed">
                                    <PhoneSvg width={"20px"} />
                                    <span>381-2221729</span>
                                </li>
                                <li className=" flex gap-2 items-center mx-auto  leading-relaxed">
                                    <PhoneSvg width={"20px"} />
                                    <span>381-3032589</span>
                                </li>
                                <li className=" flex gap-2 items-center mx-auto  leading-relaxed">
                                    <SendSvg width={"30px"} />
                                    <span>
                                        areatecnica@neticcomunicaciones.com.ar
                                    </span>
                                </li>
                            </ul>
                        </span>
                        <span className=" relative sm:text-xl text-sm font-medium text-start mx-auto  leading-relaxed shadow-lg bg-white rounded-[10px] sm:p-8 p-4">
                            <p className=" absolute top-0 right-0 p-4 text-green-300">
                                ✔
                            </p>
                            <p className=" text-black sm:text-2xl text-lg mb-4 font-semibold">
                                Consultas Generales
                            </p>
                            <p>
                                Para cualquier otra consulta, ya sea sobre
                                nuestros servicios, cobranzas, ventas o
                                información adicional, contáctanos a través de
                            </p>
                            <ul>
                                <li className=" flex gap-2 items-center mx-auto  leading-relaxed">
                                    <SendSvg width={"30px"} />
                                    <span>info@neticcomunicaciones.com.ar</span>
                                </li>
                                <li className=" flex gap-2 items-center mx-auto  leading-relaxed">
                                    <SendSvg width={"30px"} />
                                    <span>
                                        ventas@neticcomunicaciones.com.ar
                                    </span>
                                </li>
                                <li className=" flex gap-2 items-center mx-auto  leading-relaxed">
                                    <SendSvg width={"30px"} />
                                    <span>
                                        cobranzas@neticcomunicaciones.com.ar
                                    </span>
                                </li>
                            </ul>
                            {/* <strong>
                                ventas@neticcomunicaciones.com.ar ñññ
                                cobranzas@neticcomunicaciones.com.ar
                            </strong> */}
                        </span>
                        <div className=" relative sm:text-xl text-sm font-medium text-start mx-auto  leading-relaxed shadow-lg bg-white rounded-[10px] sm:p-8 p-4">
                            <p className=" absolute top-0 right-0 p-4 text-green-300">
                                ✔
                            </p>
                            <p className=" text-black sm:text-2xl text-lg mb-4 font-semibold">
                                Formulario de Contacto
                            </p>
                            <p>También puedes usar nuestro</p>
                            <a
                                className=" text-[var(--Color1)] font-semibold underline"
                                href="/contratar"
                            >
                                {" "}
                                formulario de contacto
                            </a>
                            , y te responderemos lo antes posible.
                        </div>
                        <div className=" relative sm:text-xl text-sm font-medium text-start shadow-lg bg-white rounded-[10px] sm:p-8 p-4">
                            <p className=" absolute top-0 right-0 p-4 text-green-300">
                                ✔
                            </p>
                            <p className=" text-black sm:text-2xl text-lg mb-4 font-semibold">
                                Horario de Atención
                            </p>
                            <p>
                                Lunes a Viernes: 9:00 AM - 6:00 PM Sábados: 9:00
                                AM - 2:00 PM Domingos y festivos: Cerrado
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className={`${
                        isNearScreen && "show-right delay-400"
                    } min-h-[250px]  w-[100%]  h-full flex justify-center items-center relative`}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.9025592612775!2d-65.2040922237187!3d-26.811231088972857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c25472e83dd%3A0x56e533bf54e671d8!2sIldefonso%20de%20las%20Mu%C3%B1ecas%201431%2C%20T4001JTK%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1721344420126!5m2!1ses!2sar&maptype=satellite&controls=0"
                        width="100%"
                        height="100%"
                        loading="lazy"
                        className=" z-20 rounded-[5px]"
                    ></iframe>
                </div>
            </div>
            <p className=" sm:text-2xl text-sm text-black font-semibold w-[90%] text-center">
                Gracias por confiar en nosotros. Tu satisfacción es nuestra
                prioridad.
            </p>
        </section>
    );
};

export default ContactoSoporte;
