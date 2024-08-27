"use client";
import TitleComponent from "@/components/titles/title.component";
import React from "react";
import useNerScreen from "../hooks/useNerScreen";
import Accordion from "@/components/accordion/accordion.component";
import Header from "@/components/header/header";

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
    {
        title: "¿COMO DOY DE BAJA EL SERVICIO?",
        answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae ab, minus distinctio laudantium quaerat praesentium illo enim vitae nulla amet aperiam accusamus incidunt. Est ratione reiciendis veritatis vitae expedita. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae ab, minus distinctio laudantium quaerat praesentium illo enim vitae nulla amet aperiam accusamus incidunt. Est ratione reiciendis veritatis vitae expedita. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae ab, minus distinctio laudantium quaerat praesentium illo enim vitae nulla amet aperiam accusamus incidunt. Est ratione reiciendis veritatis vitae expedita.",
    },
    {
        title: "¿DONDE PUEDO PAGAR MI ABONO?",
        answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae ab, minus distinctio laudantium quaerat praesentium illo enim vitae nulla amet aperiam accusamus incidunt. Est ratione reiciendis veritatis vitae expedita. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae ab, minus distinctio laudantium quaerat praesentium illo enim vitae nulla amet aperiam accusamus incidunt. Est ratione reiciendis veritatis vitae expedita. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae ab, minus distinctio laudantium quaerat praesentium illo enim vitae nulla amet aperiam accusamus incidunt. Est ratione reiciendis veritatis vitae expedita.",
    },
    {
        title: "RECOMENDACIONES",
        answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae ab, minus distinctio laudantium quaerat praesentium illo enim vitae nulla amet aperiam accusamus incidunt. Est ratione reiciendis veritatis vitae expedita. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae ab, minus distinctio laudantium quaerat praesentium illo enim vitae nulla amet aperiam accusamus incidunt. Est ratione reiciendis veritatis vitae expedita. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae ab, minus distinctio laudantium quaerat praesentium illo enim vitae nulla amet aperiam accusamus incidunt. Est ratione reiciendis veritatis vitae expedita.",
    },
];

const Preguntas = () => {
    const { elementRef: refScreeen, isNearScreen: isNearScreen } = useNerScreen(
        {
            distance: "0px",
            once: true,
        }
    );

    return (
        <Header>
            <section
                ref={refScreeen}
                className={` ${
                    isNearScreen ? "efecto-show" : "opacity-0"
                } rounded-xl relative w-full h-full  z-30  grid place-items-center gap-20 pt-[100px] `}
            >
                <TitleComponent
                    h1="Todo lo que nesecitas saber de nuesto servicio"
                    span="Frecuentes"
                    strong="Preguntas"
                />

                <div className="bg-[#dbdbfd] shadow-lg rounded-lg sm:px-10 sm:py-10 px-2 py-5  flex flex-row justify-center items-start gap-10 sm:w-[70%] w-[95%] relative ">
                    <div className="sm:w-[70%] w-[100%]   flex flex-col justify-start items-center mt-10 mb-4  ">
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

                    <img
                        src="/megafono.webp"
                        alt="imagen de megafono"
                        loading="lazy"
                        className=" sm:w-[150px] w-[100px] absolute top-[0%] sm:translate-x-[-20%] translate-x-[0%] translate-y-[-50%] left-0"
                    ></img>
                </div>
            </section>
        </Header>
    );
};

export default Preguntas;
