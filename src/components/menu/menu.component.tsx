"use client";
import React from "react";
import Whatsapp from "../svg/icons/whatsapp.svg";

import UseScrollDirection from "@/app/hooks/useScrollDirection";

const MenuComponent = () => {
    const { scrollDirection } = UseScrollDirection();

    const enviarPorWhatsApp = ({ msj, tel }: { msj: string; tel: string }) => {
        const url = `https://wa.me/${tel}?text=${msj}`;
        window.open(url, "_blank");
    };

    return (
        <ul
            className={`example-2 h-svh fixed  z-[999]  top-0 opacity-0 right-0  show-menu   py-2 transition-all duration-700 ${
                scrollDirection === "down"
                    ? " translate-x-[300%]"
                    : " translate-x-[0px]"
            }`}
        >
            <li className="icon-content">
                <section
                    data-social="WhatsAppp"
                    aria-label="WhatsAppp"
                    className="a"
                >
                    <div className="filled"></div>
                    <Whatsapp className="bi bi-WhatsAppp w-full" />
                </section>
                <button
                    onClick={() =>
                        enviarPorWhatsApp({
                            msj: "mensaje predereminado",
                            tel: "3816522451",
                        })
                    }
                    className="tooltip"
                >
                    WhatsAppp
                </button>
            </li>
        </ul>
    );
};

export default MenuComponent;
