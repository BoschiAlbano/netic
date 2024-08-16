"use client";
import React from "react";

import FormularioSubmit from "./formulario.submit.component";
import TitleComponent from "../titles/title.component";
import useNerScreen from "@/app/hooks/useNerScreen";

const FormularioComponent = () => {
    const { elementRef: refScreeen, isNearScreen: isNearScreen } = useNerScreen(
        {
            distance: "0px",
            once: true,
        }
    );

    return (
        <div
            // className={` relative w-[90%] z-30 grid place-items-center content-center p-0 py-20`}
            className={` relative w-full z-30 grid place-items-center content-center p-0  sm:h-full h-full sm:min-h-screen `}
        >
            <TitleComponent
                h1="completa el formulario con tus datos y estaremos en contacto lo mas rapido posible"
                span=""
                strong="CONTRATA AHORA"
            />

            <section
                ref={refScreeen}
                className={`w-[90%] grid place-items-center mt-10 z-30  ${
                    isNearScreen ? "efecto-show" : "opacity-0"
                }`}
            >
                <div className="  sm:w-auto w-full contenedor-formulario justify-items-center items-center gap-4 ">
                    {/* <img src="/contactanos.png" alt="" className=" w-[90%]" /> */}

                    <FormularioSubmit />
                </div>
            </section>
        </div>
    );
};

export default FormularioComponent;
