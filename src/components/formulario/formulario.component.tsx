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
            className={` relative w-full z-30 grid place-items-center content-center p-0  sm:min-h-screen sm:h-full h-full`}
        >
            <div className="z-10 circulo bg-[#3021722f] bottom-0 left-0"></div>
            <div className="z-10 circulo bg-[#fa00f615] top-0  right-0 "></div>

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
                <div className=" grid sm:grid-cols-2 grid-cols-1 place-content-center sm:w-[70%] w-full contenedor-formulario justify-items-center items-center gap-4 ">
                    <img src="/contactanos.png" alt="" className=" w-[90%]" />

                    <FormularioSubmit />
                </div>
            </section>
        </div>
    );
};

export default FormularioComponent;
