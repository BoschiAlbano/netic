"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import UseScrollDirection from "@/app/hooks/useScrollDirection";

const Header = () => {
    const { prevScrollY } = UseScrollDirection();

    useEffect(() => {
        window.addEventListener("blur", () => {
            document.title = "¡No te vayas!";
        });

        window.addEventListener("focus", () => {
            document.title = "netic";
        });
    }, []);

    return (
        <header
            className={` fixed h-[80px] top-0 z-50 w-full  flex flex-row justify-between items-center sm:px-6 px-2 py-2  transition-all duration-500  ${
                prevScrollY <= 50 ? "efecto-clase2" : "efecto-clase1"
            } `}
        >
            <div className="  h-full sm:w-[120px] w-[75px] relative flex flex-col justify-start items-start">
                <Link
                    href="/"
                    className=" efecto-logo absolute  w-full h-full top-0 left-0 z-20 "
                >
                    <img
                        className="h-full w-full  object-contain  "
                        src="/logo.png"
                        alt="logo de Netic"
                    />
                </Link>
            </div>

            <div className="h-full flex flex-row  justify-center items-center sm:py-4 py-0 sm:gap-10 gap-4 font-bold sm:text-lg text-sm   ">
                <Link className="subrayar" href="/">
                    HOME
                </Link>
                <Link className="subrayar" href="/planes">
                    Planes
                </Link>

                <Link
                    className="jello boton bg-[var(--Color1)] py-2 px-4 rounded-[5px] text-white transition-all duration-500"
                    href="/contratar"
                >
                    Contratar
                </Link>
            </div>
        </header>
    );
};

export default Header;
