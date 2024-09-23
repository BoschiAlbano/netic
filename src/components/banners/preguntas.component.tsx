"use client";

import React from "react";
import Accordion from "../accordion/accordion.component";
import useNerScreen from "@/app/hooks/useNerScreen";
import TitleComponent from "../titles/title.component";
import TutorialesComponent2 from "../tutoriales/tutoriales.component";

interface pregunta {
    title: string;
    answer: string;
}

const preguntas: pregunta[] = [
    {
        title: "¿CAMBIO DE CONTRASEÑA WIFI?",
        answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae ab, minus distinctio laudantium quaerat praesentium illo enim vitae nulla amet aperiam accusamus incidunt. Est ratione reiciendis veritatis vitae expedita. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae ab, minus distinctio laudantium quaerat praesentium illo enim vitae nulla amet aperiam",
    },
    {
        title: "LENTITUD Y CORTES EN EL SERVICIO",
        answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae ab, minus distinctio laudantium quaerat praesentium illo t. Est ratione reiciendis veritatis vitae expedita.",
    },
    {
        title: "NO TENGO SERVICIO",
        answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae ab, minus distinctio laudantium quaerat praesentium illo enim vitae nulla amet aperiam accusamus incidunt. Est ratione reiciendis veritatis vitae expedita. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae ab, minus distinctio laudantium quaerat praesentium illo enim vitae nulla amet aperiam accusamus incidunt. Est ratione reiciendis veritatis vitae expedita. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae ab, minus distinctio laudantium quaerat praesentium illo enim vitae nulla amet aperiam accusamus incidunt. Est ratione reiciendis veritatis vitae expedita.",
    },
];

const PreguntasComponet = () => {
    const { elementRef: refScreeen, isNearScreen: isNearScreen } = useNerScreen(
        {
            distance: "0px",
            once: true,
        }
    );
    return (
        <section
            ref={refScreeen}
            className={` ${
                isNearScreen ? "efecto-show" : "opacity-0"
            } rounded-xl relative sm:w-[80%]  w-[95%] h-full  z-30  grid place-items-start gap-10 grid-cols-1  justify-center items-center`}
        >
            <div className="  w-full rounded-lg sm:px-10 sm:py-10 px-2 py-5  flex flex-col justify-center items-center sm:gap-10 gap-2 sm:w-[100%]  relative ">
                <TitleComponent
                    h1="Todo lo que nesecitas saber de nuesto servicio"
                    span="Frecuentes"
                    strong="Preguntas"
                />
                <div className="sm:w-[80%] w-[95%]   flex flex-col justify-start items-center mt-10 mb-4  ">
                    {preguntas.map((item, index) => {
                        return (
                            <Accordion
                                key={index}
                                title={item.title}
                                answer={item.answer}
                            />
                        );
                    })}
                </div>

                <TutorialesComponent2 />
            </div>
        </section>
    );
};

export default PreguntasComponet;
