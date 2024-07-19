import React from "react";
const steps = [
    {
        icon: "/iconos/routerIcon.png",
        title: "Elige la tarifa",
        description:
            "Podrás elegir entre 300Mb, 600Mb y 1Gb. Así pagarás sólo por lo que necesites.",
    },
    {
        icon: "/iconos/mapIcon.png",
        title: "Consulta tu cobertura",
        description:
            "Tendrás que introducir tu dirección para asegurarnos de que la fibra de Netic llega a tu casa.",
    },
    {
        icon: "/iconos/calendarioicon.png",
        title: "Cita de instalación",
        description:
            "Una vez contratado, un experto se pondrá en contacto contigo para concertar la fecha de instalación que más te convenga. ¡Tú eliges!",
    },
    {
        icon: "/iconos/toolsIcon.png",
        title: "Día de instalación",
        description:
            "El técnico llevará un router WiFi ¡Lo tendrás listo en un par de horas!",
    },
];

const TarjetasPlanesComponent = () => {
    return (
        <section
            className={`animar-tarjetas sm:absolute sm:bottom-[12rem] left-[0%] w-full z-30 flex flex-row justify-center items-center sm:gap-10 gap-2 flex-wrap `}
        >
            {steps.map((step, index) => {
                return (
                    <div
                        key={index}
                        className={` w-[80%] sm:w-auto flex flex-row justify-center items-center rounded-[5px] py-2 px-4  efecto-show-scroll  gap-4 sm:min-h-[80px] min-h-[50px] blur-effect hover:bg-[var(--Color4)]`}
                    >
                        <div className="h-[auto] grid place-items-center">
                            <img
                                src={step.icon}
                                className=" sm:w-[60px] w-[40px]"
                            />
                        </div>
                        <div className="flex flex-col items-center text-center w-full">
                            <h3 className="texto-responsive-20 font-semibold">
                                {step.title}
                            </h3>
                            {/* <p className="texto-responsive-15 text-gray-600">
                                    {step.description}
                                </p> */}
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default TarjetasPlanesComponent;
