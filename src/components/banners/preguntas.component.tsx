"use client";

import React from "react";
import Accordion from "../accordion/accordion.component";
// import useNerScreen from "@/app/hooks/useNerScreen";

const PreguntasComponet = () => {
    // const { elementRef: refScreeen, isNearScreen: isNearScreen } = useNerScreen(
    //     {
    //         distance: "0px",
    //         once: false,
    //     }
    // );

    //
    return (
        <section
            className={` relative w-[100%] h-full  z-30  grid place-items-center sm:gap-8 gap-2 sm:p-10 p-5  `}
        >
            <div className="w-[100%] z-30 relative grid place-items-center">
                <div className="texto-responsive-40 font-bold">
                    <strong className=" text-white font-extrabold">
                        Preguntas
                    </strong>
                    <span className="text-gray-400"> Frecuentes</span>
                </div>
                <h1 className="texto-responsive-20 text-gray-400">
                    Todo lo que nesecitas saber de nuesto servicio
                </h1>
            </div>

            <div className=" sm:w-[60%] w-[90%]  flex flex-col justify-start items-center ">
                <Accordion
                    title="¿ Como contratar NETIC fibra obtica ?"
                    answer="Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsa beatae ab, minus
                                distinctio laudantium quaerat praesentium illo
                                enim vitae nulla amet aperiam accusamus
                                incidunt. Est ratione reiciendis veritatis vitae
                                expedita. Lorem, ipsum dolor sit amet
                                consectetur adipisicing elit. Ipsa beatae ab,
                                minus distinctio laudantium quaerat praesentium
                                illo enim vitae nulla amet aperiam accusamus
                                incidunt. Est ratione reiciendis veritatis vitae
                                expedita. Lorem, ipsum dolor sit amet
                                consectetur adipisicing elit. Ipsa beatae ab,
                                minus distinctio laudantium quaerat praesentium
                                illo enim vitae nulla amet aperiam accusamus
                                incidunt. Est ratione reiciendis veritatis vitae
                                expedita."
                />
                <Accordion
                    title="¿ Como contratar NETIC fibra obtica ?"
                    answer="Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsa beatae ab, minus
                                distinctio laudantium quaerat praesentium illo
                                enim vitae nulla amet aperiam accusamus
                                incidunt. Est ratione reiciendis veritatis vitae
                                expedita. Lorem, ipsum dolor sit amet
                                consectetur adipisicing elit. Ipsa beatae ab,
                                minus distinctio laudantium quaerat praesentium
                                illo enim vitae nulla amet aperiam accusamus
                                incidunt. Est ratione reiciendis veritatis vitae
                                expedita. Lorem, ipsum dolor sit amet
                                consectetur adipisicing elit. Ipsa beatae ab,
                                minus distinctio laudantium quaerat praesentium
                                illo enim vitae nulla amet aperiam accusamus
                                incidunt. Est ratione reiciendis veritatis vitae
                                expedita."
                />

                <Accordion
                    title="¿ Como contratar NETIC fibra obtica ?"
                    answer="Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsa beatae ab, minus
                                distinctio laudantium quaerat praesentium illo
                                enim vitae nulla amet aperiam accusamus
                                incidunt. Est ratione reiciendis veritatis vitae
                                expedita. Lorem, ipsum dolor sit amet
                                consectetur adipisicing elit. Ipsa beatae ab,
                                minus distinctio laudantium quaerat praesentium
                                illo enim vitae nulla amet aperiam accusamus
                                incidunt. Est ratione reiciendis veritatis vitae
                                expedita. Lorem, ipsum dolor sit amet
                                consectetur adipisicing elit. Ipsa beatae ab,
                                minus distinctio laudantium quaerat praesentium
                                illo enim vitae nulla amet aperiam accusamus
                                incidunt. Est ratione reiciendis veritatis vitae
                                expedita."
                />
            </div>

            <button className=" font-bold text-white texto-responsive-20 border-[1px] shadow-xl py-2 px-2 rounded-[5px] hover:bg-slate-200  hover:text-black">
                mas preguntas
            </button>
        </section>
    );
};

export default PreguntasComponet;
