"use client";
import React from "react";
import TitleComponent from "../titles/title.component";
import BotonesComponent from "../buttons/button.component";
import useNerScreen from "@/app/hooks/useNerScreen";

const FibraOpticaComponent = () => {
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
                    {/* Circulos */}
                    <div className=" girar w-[100%] aspect-square absolute bg-opacity-0 rounded-full border-4 border-[var(--Color4)] border-dashed"></div>
                    <div className="girar2 w-[80%] aspect-square absolute bg-opacity-0 rounded-full border-4 border-[var(--Color4)] border-dashed"></div>
                    <div className=" girar w-[60%] aspect-square absolute bg-opacity-0 rounded-full border-4 border-[var(--Color4)] border-dashed"></div>
                    {/* Imagenes */}
                    <div className=" flex justify-center absolute top-[10%] sm:left-[-10%] left-0 w-[80%] aspect-video  rounded-[0.5rem] ">
                        <img
                            // src="https://www.ipsecurity.com.ar/wp-content/uploads/cartel-del-encuentro-seguridad-integral.jpg"
                            src="/seguridad.jpg"
                            alt=""
                            className={`${
                                isNearScreen && "show-left delay-150"
                            } object-cover w-[100%] rounded-[0.5rem] `}
                        />
                        <div
                            className={`${
                                isNearScreen && "show-right delay-200"
                            }  flex flex-row absolute shadow-md  top-[15%] sm:right-[0%] sm:translate-x-[75%] translate-x-[60%] bg-[#F6F6FD] justify-center items-center rounded-[0.5rem] p-2 gap-2`}
                        >
                            {/* <Whatsapp width={"30px"} height={"30px"} /> */}
                            <p className=" font-semibold sm:text-lg text-sm">
                                Conectando hoy para
                            </p>
                        </div>
                    </div>
                    <div className=" flex justify-center absolute bottom-[10%] sm:right-[-10%] right-[0%]  w-[80%] aspect-video rounded-[0.5rem]">
                        <img
                            src="/velocidad.jpg"
                            alt=""
                            className={`${
                                isNearScreen && "show-right delay-300"
                            }  object-cover w-[100%] rounded-[0.5rem]`}
                        />

                        <div
                            className={`${
                                isNearScreen && "show-left delay-400"
                            } flex flex-row-reverse absolute shadow-md  bottom-[15%] left-[0%] sm:translate-x-[-75%] translate-x-[-60%] bg-[#F6F6FD] justify-center items-center rounded-[0.5rem] p-2 gap-2`}
                        >
                            {/* <Whatsapp width={"30px"} height={"30px"} /> */}
                            <p className="  font-semibold sm:text-lg text-sm">
                                un futuro mejor.
                            </p>
                        </div>
                    </div>
                </div>

                <div className=" w-[100%] sm:w-[60%]  h-full flex flex-col justify-center items-center sm:gap-10 gap-5">
                    <TitleComponent strong="Fibra" span="Optica" h1="" />
                    <p
                        className={` ${
                            isNearScreen && "show-right delay-500"
                        } sm:text-xl text-sm font-medium`}
                    >
                        La fibra óptica ofrece una conexión a internet de alta
                        velocidad, con una capacidad de transmisión superior y
                        menor latencia, ideal para aplicaciones exigentes como
                        el streaming en 4K y los juegos en línea. Es resistente
                        a interferencias electromagnéticas, lo que garantiza una
                        señal estable y segura. Además, su durabilidad y
                        capacidad para manejar grandes volúmenes de datos la
                        hacen perfecta para las necesidades de conectividad
                        actuales y futuras.
                    </p>
                    <BotonesComponent page="#" texto="Leer mas" />
                </div>
            </div>
        </section>
    );
};

export default FibraOpticaComponent;
