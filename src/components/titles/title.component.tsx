"use client";
import useNerScreen from "@/app/hooks/useNerScreen";
import React from "react";

interface titlecomponent {
    strong: string;
    span: string;
    h1: string;
}

const TitleComponent = ({ h1, span, strong }: titlecomponent) => {
    const { elementRef: refScreeen, isNearScreen: isNearScreen } = useNerScreen(
        {
            distance: "0px",
            once: false,
        }
    );

    return (
        <div
            ref={refScreeen}
            className={`sm:w-[100%] w-[80%] z-30 relative grid place-items-center sm:my-2 my-6 ${
                isNearScreen ? "efecto-show" : "opacity-0"
            }`}
        >
            <div className="texto-responsive-40 font-bold flex flex-col justify-center items-center ">
                <strong className=" text-[var(--Color1)] font-extrabold ">
                    {strong}{" "}
                </strong>
                <span className="text-center">{span}</span>
            </div>
            <h1 className="texto-responsive-20 text-center">{h1}</h1>
        </div>
    );
};

export default TitleComponent;
