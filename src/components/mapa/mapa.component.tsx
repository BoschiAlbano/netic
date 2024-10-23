"use client";
import React from "react";
import TitleComponent from "../titles/title.component";
import useNerScreen from "@/app/hooks/useNerScreen";
import SvgPuntos from "../svg/puntos.svg";
import SendSvg from "../svg/icons/send.svg";
import PhoneSvg from "../svg/icons/phone.svg";

import { BorderBeam } from "../ui/border-beam";
import ShineBorder from "../ui/shine-border";

const ContactoSoporte = () => {
    const { elementRef, isNearScreen } = useNerScreen();

    return (
        <section
            ref={elementRef}
            className={`  relative z-30  w-full h-full grid place-items-center sm:gap-10 gap-4`}
        >
            <SvgPuntos className=" sm:w-[10%] w-[25%]  absolute left-0 sm:translate-x-[25%] translate-x-[-15%]  opacity-[.6] top-0 sm:translate-y-[-0%] translate-y-[-120%] fill-[#dbdbfd] rotate-[15deg]" />

            <TitleComponent
                strong="Contacto "
                span="& Soporte"
                h1="Nuestros asesores pueden ayudarte"
            />

            <div className="sm:w-[75%]  w-[90%]  text-center relative  rounded-[10px] grilla-mapa ">
                <ShineBorder
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                    className="flex w-full h-full border border-gray-200 p-1"
                >
                    <span className="w-[100%] h-full relative sm:text-xl text-sm font-medium text-start mx-auto  leading-relaxed  bg-white rounded-[10px] flex flex-col justify-start items-center sm:p-8 p-2 ">
                        <p className=" absolute top-0 right-0 p-4 text-green-300">
                            ✔
                        </p>
                        <p className=" text-black sm:text-2xl text-lg mb-4 font-semibold">
                            Soporte Técnico
                        </p>
                        <div className="w-full">
                            <p>
                                Para soporte técnico relacionado con nuestros
                                productos o servicios, puedes enviarnos un
                                correo electrónico o a través de whatsApp.
                            </p>
                            <ul className=" mt-2 sm:mt-3">
                                <li className=" flex gap-2 items-center my-[2px] mx-auto  leading-relaxed">
                                    <div className=" w-[30px] h-[30px] flex justify-center items-center">
                                        <PhoneSvg width={"20px"} />
                                    </div>
                                    <span>381-3032589</span>
                                </li>
                                <li className=" flex gap-2 items-center my-[2px] mx-auto  leading-relaxed">
                                    <SendSvg width={"30px"} />
                                    <span className="truncate">
                                        areatecnica@neticcomunicaciones.com.ar
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </span>
                </ShineBorder>

                <ShineBorder
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                    className="flex w-full border border-gray-200 p-1"
                >
                    <span className=" w-[100%] relative sm:text-xl text-sm font-medium text-start mx-auto  leading-relaxed  bg-white rounded-[10px] sm:p-8 p-2 h-full flex flex-col justify-start items-center ">
                        <p className=" absolute top-0 right-0 p-4 text-green-300">
                            ✔
                        </p>
                        <p className=" text-black sm:text-2xl text-lg mb-4 font-semibold">
                            Consultas Generales
                        </p>

                        <div className=" w-full">
                            <p>
                                Para cualquier otra consulta, ya sea sobre
                                nuestros servicios, cobranzas, ventas o
                                información adicional, contáctanos a través de
                                whatsApp o correo electrónico.
                            </p>
                            <ul className=" mt-2 sm:mt-3">
                                <li className=" flex gap-2 items-center my-[2px] mx-auto  leading-relaxed">
                                    <div className=" w-[30px] h-[30px] flex justify-center items-center">
                                        <PhoneSvg width={"20px"} />
                                    </div>
                                    <span>381-2221729</span>
                                </li>
                                <li className=" flex gap-2 items-center my-[2px] mx-auto  leading-relaxed">
                                    <SendSvg
                                        className={"truncate"}
                                        width={"30px"}
                                    />
                                    <span className={"truncate"}>
                                        info@neticcomunicaciones.com.ar
                                    </span>
                                </li>
                                <li className=" flex gap-2 items-center my-[2px] mx-auto  leading-relaxed">
                                    <SendSvg
                                        className={"truncate"}
                                        width={"30px"}
                                    />
                                    <span className={"truncate"}>
                                        ventas@neticcomunicaciones.com.ar
                                    </span>
                                </li>
                                <li className=" flex gap-2 items-center my-[2px] mx-auto  leading-relaxed">
                                    <SendSvg
                                        className={"truncate"}
                                        width={"30px"}
                                    />
                                    <span className={"truncate"}>
                                        cobranzas@neticcomunicaciones.com.ar
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </span>
                </ShineBorder>
            </div>

            <ShineBorder
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                className="flex border border-gray-200 sm:w-[75%]  w-[90%]"
            >
                <span className=" w-[100%] relative sm:text-xl text-sm font-medium text-start  bg-white rounded-[10px] sm:p-8 p-2 h-full flex justify-start items-center flex-col ">
                    <p className=" absolute top-0 right-0 p-4 text-green-300">
                        ✔
                    </p>
                    <p className=" text-black sm:text-2xl text-lg mb-4 font-semibold">
                        Horario de Atención
                    </p>
                    <p>
                        Lunes a Viernes: 9:00 AM - 6:00 PM Sábados: 9:00 AM -
                        2:00 PM Domingos y festivos: Cerrado
                    </p>
                </span>
            </ShineBorder>

            <span
                className={`${
                    isNearScreen && "show-right delay-400"
                } min-h-[250px]  sm:w-[75%] w-[90%]  h-full flex justify-center items-center relative rounded-[10px] bg-teal-200  transition-all duration-300`}
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.9025592612775!2d-65.2040922237187!3d-26.811231088972857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c25472e83dd%3A0x56e533bf54e671d8!2sIldefonso%20de%20las%20Mu%C3%B1ecas%201431%2C%20T4001JTK%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1721344420126!5m2!1ses!2sar&maptype=satellite&controls=0"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    className=" z-20 rounded-[5px]"
                ></iframe>
            </span>
        </section>
    );
};

export default ContactoSoporte;
