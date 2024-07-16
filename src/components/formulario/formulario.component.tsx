import React from "react";

import FormularioSubmit from "./formulario.submit.component";
import TitleComponent from "../titles/title.component";

const FormularioComponent = () => {
    return (
        <div
            className={` relative w-[90%] z-30 grid place-items-center content-center p-0 py-20`}
        >
            <div className="z-10 circulo bg-[#3021722f] bottom-0 left-0"></div>
            <div className="z-10 circulo bg-[#fa00f615] top-0  right-0 "></div>

            <TitleComponent
                h1="completa el formulario con tus datos y estaremos en contacto lo mas rapido posible"
                span="nuestro servicio de fibra optica"
                strong="CONTRATA AHORA"
            />

            <section
                className={`w-full grid place-items-center mt-10 z-30 efecto-show-scroll`}
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
