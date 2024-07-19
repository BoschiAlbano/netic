import React from "react";
import TitleComponent from "../titles/title.component";
import MapaSvg from "../svg/icons/mapa.svg";
import TelefonoSvg from "../svg/icons/telefono.svg";

const MapaComponent = () => {
    return (
        <section
            // className=" z-30 sm:w-[70%] w-[90%] relative "
            className="sm:mt-0 mt-10 relative sm:w-[90%] w-full z-30 grid place-items-center content-center p-0  sm:min-h-screen sm:h-full h-full"
        >
            <TitleComponent
                strong="Contacto & Soporte"
                span=""
                h1="si tenés alguna duda, nuestros asesores te pueden ayudar"
            />

            <div className=" w-full  flex flex-row lg:justify-between justify-center gap-10 flex-wrap items-center sm:mt-20 mt-5">
                <div className="efecto-show-scroll relative lg:w-[30%] sm:w-[60%] w-[90%] aspect-square overflow-hidden rounded-full shadow-header contenedor-mapa ">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.9025592612775!2d-65.2040922237187!3d-26.811231088972857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c25472e83dd%3A0x56e533bf54e671d8!2sIldefonso%20de%20las%20Mu%C3%B1ecas%201431%2C%20T4001JTK%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1721344420126!5m2!1ses!2sar&controls=0"
                        width="100%"
                        height="100%"
                        loading="lazy"
                        className="sphere2"
                    ></iframe>
                    <div className="sphere1"></div>
                </div>

                <div className=" sm:w-[60%] w-[90%] grid sm:grid-cols-2 grid-cols-1 sm:grid-rows-2 grid-rows-1 gap-10">
                    <div className=" flex flex-col gap-2 justify-center items-center efecto-show-scroll ">
                        <div className=" w-[50px] h-[50px]">
                            <MapaSvg />
                        </div>
                        <span>Ventas</span>
                        <span className=" text-center max-w-[300px]">
                            <strong>+54 381-6206925</strong>
                            <br />
                            <span className=" ">
                                Ildelfonso de las muñecas 1431, San Miguel de
                                Tucuman
                            </span>
                        </span>
                    </div>
                    <div className=" flex flex-col gap-2 justify-center items-center efecto-show-scroll">
                        <div className=" w-[50px] h-[50px]">
                            <MapaSvg />
                        </div>
                        <span>Ventas</span>
                        <span className=" text-center max-w-[300px]">
                            <strong>+54 381-6206925</strong>
                            <br />
                            <span>
                                Ildelfonso de las muñecas 1431, San Miguel de
                                Tucuman
                            </span>
                        </span>
                    </div>{" "}
                    <div className=" flex flex-col gap-2 justify-center items-center efecto-show-scroll">
                        <div className=" w-[50px] h-[50px]">
                            <TelefonoSvg />
                        </div>
                        <span>Ventas</span>
                        <span className=" text-center max-w-[300px]">
                            <strong>+54 381-6206925</strong>
                            <br />
                            <span>
                                Ildelfonso de las muñecas 1431, San Miguel de
                                Tucuman
                            </span>
                        </span>
                    </div>{" "}
                    <div className=" flex flex-col gap-2 justify-center items-center efecto-show-scroll">
                        <div className=" w-[50px] h-[50px]">
                            <TelefonoSvg />
                        </div>
                        <span>Ventas</span>
                        <span className=" text-center max-w-[300px]">
                            <strong>+54 381-6206925</strong>
                            <br />
                            <span>
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
