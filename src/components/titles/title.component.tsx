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
            once: true,
        }
    );

    return (
        <div
            ref={refScreeen}
            className={` w-[100%] z-30 relative grid place-items-center sm:my-2 my-6 ${
                isNearScreen ? "efecto-show" : "opacity-0"
            }`}
        >
            <div className=" font-bold flex flex-col justify-center items-center ">
                <strong className="sm:text-5xl text-3xl text-[var(--Color1)] font-extrabold sm:mb-5 mb-2 ">
                    {strong}{" "}
                </strong>
                <span className="sm:text-4xl text-sm text-gray-700 text-center sm:mb-5 mb-2">
                    {span}
                </span>
            </div>
            <h1 className="sm:text-2xl text-sm text-gray-700 text-center sm:flex hidden">
                {h1}
            </h1>
        </div>
    );
};

export default TitleComponent;
