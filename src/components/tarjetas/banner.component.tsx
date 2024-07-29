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
        icon: "/iconos/calendarioIcon.png",
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

const TarjetaBannerComponent = () => {
    return (
        <section
            className={` relative w-[90%] z-30 flex grilla-tarjetas p-0 sm:py-10 py-2  `}
        >
            {steps.map((step, index) => {
                return (
                    <div
                        key={index}
                        style={{
                            width: "100%",
                            padding: "10px",
                        }}
                        className="relative  rounded-[5px] h-full fondo-Tarjeta  efecto-show-scroll  "
                    >
                        <div
                            className={` h-full  flex flex-col justify-center items-center  px-2 sm:py-4 py-0 `}
                        >
                            <div className=" sm:h-[100px] h-[70px] grid place-items-center">
                                <img
                                    src={step.icon}
                                    className="mb-2 sm:w-[50px] w-[40px]"
                                />
                            </div>
                            <div className="flex flex-col items-center text-center w-full">
                                <h3 className="texto-responsive-25 font-semibold mb-2">
                                    {step.title}
                                </h3>
                                <p className="texto-responsive-15 text-gray-600">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default TarjetaBannerComponent;
