"use client";
import React from "react";
import TitleComponent from "../titles/title.component";
import MapaSvg from "../svg/icons/mapa.svg";
import TelefonoSvg from "../svg/icons/telefono.svg";
import useNerScreen from "@/app/hooks/useNerScreen";

const MapaComponent = () => {
    const { elementRef: refScreeen, isNearScreen: isNearScreen } = useNerScreen(
        {
            distance: "0px",
            once: true,
        }
    );

    return (
        <section
            // className=" z-30 sm:w-[70%] w-[90%] relative "
            className={`sm:mt-0 mt-10 relative sm:w-[70%] w-[90%] z-30 grid place-items-center content-center p-0  sm:min-h-screen sm:h-full h-full `}
        >
            <TitleComponent
                strong="Contacto & Soporte"
                span="Nuestros asesores te pueden ayudar"
                h1=""
            />

            <div className="z-[-1] circulo bg-[#fa00f615] top-0 right-0"></div>
            <div className="z-[-1] circulo bg-[#3021722f]  bottom-0 left-0  "></div>
            <div
                ref={refScreeen}
                className={`w-full  grid lg:grid-cols-2 grid-cols-1  gap-10  items-center sm:mt-20 mt-5 ${
                    isNearScreen ? "efecto-show" : "opacity-0"
                }`}
            >
                <div className="relative h-full flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-header blur-effect ">
                    <div className="relative mx-4 -mt-6 h-auto overflow-hidden rounded-xl text-white shadow-xl ">
                        <div className=" shadow-header border-white rounded-[5px] h-full  object-cover aspect-video overflow-hidden ">
                            <div className="  aspect-square overflow-hidden  shadow-header  rounded-[5px] ">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.9025592612775!2d-65.2040922237187!3d-26.811231088972857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c25472e83dd%3A0x56e533bf54e671d8!2sIldefonso%20de%20las%20Mu%C3%B1ecas%201431%2C%20T4001JTK%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1721344420126!5m2!1ses!2sar&controls=0"
                                    width="100%"
                                    height="100%"
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                        </h5>
                        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quas quidem nobis et temporibus totam error?
                            Vitae facilis, aliquam alias quibusdam voluptatibus
                            doloremque molestias dolores, odit rerum dolor amet
                            temporibus perspiciatis!
                        </p>
                    </div>
                </div>

                <div className="  grid sm:grid-cols-2 grid-cols-1 sm:grid-rows-2 grid-rows-1 gap-10 text-gray-700">
                    {/* */}
                    <div className=" flex flex-col gap-2 justify-center items-center rounded-xl bg-white bg-clip-border text-gray-700 shadow-header blur-effect py-10  ">
                        <div className=" w-[50px] h-[50px]">
                            <MapaSvg />
                        </div>
                        <span className="sm:text-2xl text-xl font-bold">
                            Ventas
                        </span>
                        <span className=" text-center max-w-[300px]">
                            <strong className="sm:text-2xl text-xl">
                                +54 381-9999999
                            </strong>
                            <br />
                            <span className=" ">
                                Ildelfonso de las muñecas 1431, San Miguel de
                                Tucuman
                            </span>
                        </span>
                    </div>
                    <div className=" flex flex-col gap-2 justify-center items-center rounded-xl bg-white bg-clip-border text-gray-700 shadow-header blur-effect py-10">
                        <div className=" w-[50px] h-[50px]">
                            <MapaSvg />
                        </div>
                        <span className="sm:text-2xl text-xl font-bold">
                            Ventas
                        </span>
                        <span className=" text-center max-w-[300px]">
                            <strong className="sm:text-2xl text-xl">
                                +54 381-9999999
                            </strong>
                            <br />
                            <span className="sm:text-xl text-lg">
                                Ildelfonso de las muñecas 1431, San Miguel de
                                Tucuman
                            </span>
                        </span>
                    </div>{" "}
                    <div className=" flex flex-col gap-2 justify-center items-center rounded-xl bg-white bg-clip-border text-gray-700 shadow-header blur-effect py-10">
                        <div className=" w-[50px] h-[50px]">
                            <TelefonoSvg />
                        </div>
                        <span className="sm:text-2xl text-xl font-bold">
                            Ventas
                        </span>
                        <span className=" text-center max-w-[300px]">
                            <strong className="sm:text-2xl text-xl">
                                +54 381-9999999
                            </strong>
                            <br />
                            <span className="sm:text-xl text-lg">
                                Ildelfonso de las muñecas 1431, San Miguel de
                                Tucuman
                            </span>
                        </span>
                    </div>{" "}
                    <div className=" flex flex-col gap-2 justify-center items-center rounded-xl bg-white bg-clip-border text-gray-700 shadow-header blur-effect py-10">
                        <div className=" w-[50px] h-[50px]">
                            <TelefonoSvg />
                        </div>
                        <span className="sm:text-2xl text-xl font-bold">
                            Ventas
                        </span>
                        <span className=" text-center max-w-[300px]">
                            <strong className="sm:text-2xl text-xl">
                                +54 381-9999999
                            </strong>
                            <br />
                            <span className="sm:text-xl text-lg">
                                Ildelfonso de las muñecas 1431, San Miguel de
                                Tucuman
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapaComponent;
