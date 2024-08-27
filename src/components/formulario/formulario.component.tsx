"use client";
import React from "react";

import FormularioSubmit from "./formulario.submit.component";
import useNerScreen from "@/app/hooks/useNerScreen";

const FormularioComponent = () => {
    const { elementRef: refScreeen, isNearScreen: isNearScreen } = useNerScreen(
        {
            distance: "0px",
            once: true,
        }
    );

    return (
        <section
            ref={refScreeen}
            className={`sm:w-[90%] w-[100%] grid place-items-center sm:mt-10 z-30    ${
                isNearScreen ? "efecto-show" : "opacity-0"
            }`}
        >
            <div className="sm:w-auto w-full contenedor-formulario justify-items-center items-center gap-4 grid lg:grid-cols-2 grid-cols-1 ">
                <img
                    src="/banner.webp"
                    alt="banner principal"
                    loading="lazy"
                    className=" sm:w-[80%] w-[100%] sm:block hidden "
                />
                <FormularioSubmit />
            </div>
        </section>
    );
};

export default FormularioComponent;
