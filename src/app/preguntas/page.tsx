"use client";
import Header from "@/components/header/header";
import TitleComponent from "@/components/titles/title.component";
import React, { useState } from "react";
import useNerScreen from "../hooks/useNerScreen";
import Footer from "@/components/footer/footer";

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
        <>
            <Header />

            <section className=" w-full pt-[80px] flex flex-col justify-center items-center ">
                <TitleComponent
                    h1="¿ Tienes alguna duda ?"
                    span=""
                    strong="Preguntas Frecuentes"
                />

                <div
                    ref={refScreeen}
                    className={`card sm:py-[40px] sm:px-[50px] sm:mt-10 sm:w-[90%] w-full flex flex-row justify-center items-start flex-wrap ${
                        isNearScreen ? "efecto-show" : "opacity-0"
                    }`}
                >
                    {/* <div className="w-[30%] h-full sm:min-w-[300px] min-w-[200px]  overflow-hidden flex flex-col justify-start items-center gap-5">
                        <img
                            src="/AtencionAlCliente.jpg"
                            alt=""
                            className=" bg-white object-contain rounded-full sm:w-[300px] w-[200px] sm:h-[300px] h-[200px]"
                        />

                        <Whatapp />
                    </div> */}
                    <Card />
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Preguntas;

function Card() {
    return (
        /* From Uiverse.io by gharsh11032000 */
        <div className=" sm:w-[70%] w-full p-4  overflow-hidden  gap-2 flex flex-col justify-start items-center">
            {preguntas.map((item, index) => {
                return (
                    <Accordion
                        key={index}
                        title={item.title}
                        answer={item.answer}
                    />
                );
            })}
            <Whatapp />
        </div>
    );
}

function Whatapp() {
    return (
        /* From Uiverse.io by NelsonDJCR */
        <button className=" my-4 button2 sm:px-4 sm:py-2 px-2 py-1 flex flex-row justify-center items-center shadow-xl">
            <p>WhatsApp</p>
            <svg
                viewBox="0 0 48 48"
                y="0px"
                x="0px"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                    fill="#fff"
                ></path>
                <path
                    d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                    fill="#fff"
                ></path>
                <path
                    d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                    fill="#cfd8dc"
                ></path>
                <path
                    d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                    fill="#40c351"
                ></path>
                <path
                    clip-rule="evenodd"
                    d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                    fill-rule="evenodd"
                    fill="#fff"
                ></path>
            </svg>
        </button>
    );
}

const Accordion = ({ title = "", answer = "" }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className="py-0">
            <button
                onClick={() => setAccordionOpen(!accordionOpen)}
                className="flex justify-between w-full  cursor-pointer items-center rounded-lg px-2 sm:py-2 py-1 text-[var(--Color1)] hover:bg-gray-100 hover:text-gray-700"
            >
                <span className="sm:text-2xl text-md font-medium">{title}</span>
                <span
                    className={`shrink-0 transition duration-300 ${
                        accordionOpen ? "-rotate-180" : "rotate-0"
                    }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>
            </button>
            <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out text-white text-sm ${
                    accordionOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                }  space-y-1 px-4 `}
            >
                <div
                    className={`overflow-hidden  px-4 sm:py-2 py-1 rounded-lg font-medium text-[var(--Color1)] hover:bg-gray-100 hover:text-gray-700 sm:text-lg text-sm ${
                        accordionOpen ? "block" : ""
                    }`}
                >
                    {answer}
                </div>
            </div>
        </div>
    );
};
