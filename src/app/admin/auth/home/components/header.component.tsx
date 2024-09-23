"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import UseScrollDirection from "@/app/hooks/useScrollDirection";
import { signOut } from "next-auth/react";
import { toast } from "sonner";
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

    const handleClick = () => {
        toast("Quienes cerrar sesion?", {
            action: {
                label: "Salir",
                onClick: () => signOut(),
            },
        });
    };

    return (
        <header
            className={`fixed h-[80px] z-[999] w-full  flex flex-row justify-between items-center sm:px-6 px-2 py-2  transition-all duration-500  ${
                prevScrollY <= 300 ? "efecto-clase2" : "efecto-clase1"
            } `}
        >
            <div className="  h-full sm:w-[150px] w-[75px] relative flex flex-col justify-start items-start">
                <Link
                    href="/admin/auth/home"
                    className="  absolute w-full h-full top-0 left-0 z-10"
                >
                    <img
                        className=" h-full w-full  object-contain    "
                        src="/logoBlanco.png"
                        alt="logo de Netic"
                        loading="lazy"
                    />
                </Link>
                <Link
                    href="/admin/auth/home"
                    className=" efecto-logo absolute  w-full h-full top-0 left-0 z-20 "
                >
                    <img
                        className="h-full w-full  object-contain  "
                        src="/logo.png"
                        alt="logo de Netic"
                        loading="lazy"
                    />
                </Link>
            </div>

            <div className="h-full flex flex-row  justify-center items-center  sm:px-10 px-5 sm:py-4 py-0 sm:gap-10 gap-4 font-bold texto-responsive-15">
                <button onClick={() => handleClick()} className="subrayar">
                    Salir
                </button>
            </div>
        </header>
    );
};

export default Header;
