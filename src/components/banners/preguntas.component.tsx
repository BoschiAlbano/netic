"use client";

import React from "react";
import Accordion from "../accordion/accordion.component";
import useNerScreen from "@/app/hooks/useNerScreen";
import BotonesComponent from "../buttons/button.component";

interface pregunta {
    title: string;
    answer: string;
}

const preguntas: pregunta[] = [
    {
        title: "¿CAMBIO DE CONTRASEÑA WIFI?",
        answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae ab, minus distinctio laudantium quaerat praesentium illo enim vitae nulla amet aperiam accusamus incidunt. Est ratione reiciendis veritatis vitae expedita. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae ab, minus distinctio laudantium quaerat praesentium illo enim vitae nulla amet aperiam accusamus incidunt. Est ratione reiciendis veritatis vitae expedita. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae ab, minus distinctio laudantium quaerat praesentium illo enim vitae nulla amet aperiam accusamus incidunt. Est ratione reiciendis veritatis vitae expedita.",
    },
    {
        title: "LENTITUD Y CORTES EN EL SERVICIO",
        answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae ab, minus distinctio laudantium quaerat praesentium illo enim vitae nulla amet aperiam accusamus incidunt. Est ratione reiciendis veritatis vitae expedita. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae ab, minus distinctio laudantium quaerat praesentium illo enim vitae nulla amet aperiam accusamus incidunt. Est ratione reiciendis veritatis vitae expedita. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae ab, minus distinctio laudantium quaerat praesentium illo enim vitae nulla amet aperiam accusamus incidunt. Est ratione reiciendis veritatis vitae expedita.",
    },
    {
        title: "NO TENGO SERVICIO",
        answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae ab, minus distinctio laudantium quaerat praesentium illo enim vitae nulla amet aperiam accusamus incidunt. Est ratione reiciendis veritatis vitae expedita. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae ab, minus distinctio laudantium quaerat praesentium illo enim vitae nulla amet aperiam accusamus incidunt. Est ratione reiciendis veritatis vitae expedita. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae ab, minus distinctio laudantium quaerat praesentium illo enim vitae nulla amet aperiam accusamus incidunt. Est ratione reiciendis veritatis vitae expedita.",
    },
    {
        title: "¿QUE HACER SI DEBO MUDARME?",
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
            } rounded-xl relative sm:w-[90%] w-full h-full  z-30  grid place-items-center sm:gap-8 gap-2 sm:p-10 p-5 sm:mt-10 mt-0 `}
            // blur-effect shadow-header
        >
            <div className="w-[100%] z-30 relative grid place-items-center">
                <div className=" sm:text-6xl text-3xl sm:mb-5 mb-2 font-bold">
                    <strong className=" text-[var(--Color1)] font-extrabold">
                        Preguntas
                    </strong>
                    <span className="text-[#374151]"> Frecuentes</span>
                </div>
                <h1 className="sm:text-3xl text-sm xm:mb-5 mb-2 text-[#374151]">
                    Todo lo que nesecitas saber de nuesto servicio
                </h1>
            </div>

            <div className="sm:mt-10 mt-5 sm:w-[60%] w-[100%]  flex flex-col justify-start items-center ">
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

            <BotonesComponent texto="Mas Preguntas" page="/preguntas" />
        </section>
    );
};

export default PreguntasComponet;
