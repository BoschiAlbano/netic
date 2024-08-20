"use client";
import useNerScreen from "@/app/hooks/useNerScreen";
import React from "react";
const steps = [
    {
        icon: "/iconos/1.png",
        title: "Elige la tarifa",
        description:
            "Podrás elegir entre 300Mb, 600Mb y 1Gb. Así pagarás sólo por lo que necesites.",
    },
    {
        icon: "/iconos/2.png",
        title: "Consulta tu cobertura",
        description:
            "Tendrás que introducir tu dirección para asegurarnos de que la fibra de Netic llega a tu casa.",
    },
    {
        icon: "/iconos/3.png",
        title: "Cita de instalación",
        description:
            "Una vez contratado, un experto se pondrá en contacto contigo para concertar la fecha de instalación que más te convenga. ¡Tú eliges!",
    },
    {
        icon: "/iconos/4.png",

        title: "Día de instalación",
        description:
            "El técnico llevará un router WiFi ¡Lo tendrás listo en un par de horas!",
    },
];

const TarjetasBanner = () => {
    return (
        <section
            className={` animar-tarjetas sm:absolute sm:bottom-[1rem] left-[0%] w-full z-30 flex flex-row justify-center items-center sm:gap-10 gap-2 flex-wrap `}
        >
            {steps.map((step, index) => {
                return <Tarj key={index} step={step} />;
            })}
        </section>
    );
};

export default TarjetasBanner;

function Tarj({
    step,
}: {
    step: {
        icon: string;
        title: string;
        description: string;
    };
}) {
    const { elementRef: refScreeen, isNearScreen: isNearScreen } = useNerScreen(
        {
            distance: "0px",
            once: true,
        }
    );

    return (
        <div
            // efecto-show-scroll
            ref={refScreeen}
            className={` w-[80%] sm:w-auto flex flex-row justify-center items-center rounded-[5px] py-2 px-4 sm:gap-10 gap-5 sm:min-h-[80px] min-h-[50px]  hover:bg-[var(--Color4)] ${
                isNearScreen ? "efecto-show" : "opacity-0"
            }`}
        >
            <div className="h-[auto] grid place-items-center">
                <img src={step.icon} className=" sm:w-[60px] w-[40px]" />
            </div>
            <div className="flex flex-col items-start text-center w-full">
                <h3 className=" sm:text-xl text-lg font-semibold">
                    {step.title}
                </h3>
            </div>
        </div>
    );
}
