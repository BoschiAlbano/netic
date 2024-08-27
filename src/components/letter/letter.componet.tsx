"use client";
import React, { useEffect, useState } from "react";

const LetterComponet = () => {
    const [show, setshow] = useState(false);

    useEffect(() => {
        const intervalId = setTimeout(() => {
            setshow(!show);
        }, 6000);

        return () => clearTimeout(intervalId);
    }, [show]);

    return (
        <div className="text-[var(--Color1)]  sm:text-6xl text-4xl font-extrabold sm:tracking-[5px] sm:mb-4 mb-2">
            {/* <div className="container">
                <p>LLEGAMOS A TU </p>
                <div className="text-wrapper">
                    <p>EMPRESA</p>
                    <p>HOGAR</p>
                </div>
            </div> */}

            <div className="container-text-hidden-effect text-start text-[#302172dc]">
                <p className="">CONECTAMOS TU</p>

                <span className=" relative w-full block h-[3.75rem] mt-5 text-[#302172dc] ">
                    <p
                        className={`${
                            show ? "show-text-block" : "show-text-hidden"
                        }`}
                    >
                        MUNDO.
                    </p>
                    <p
                        className={`${
                            !show ? "show-text-block" : "show-text-hidden"
                        }`}
                    >
                        VIDA.
                    </p>
                </span>
            </div>
        </div>
    );
};

export default LetterComponet;
