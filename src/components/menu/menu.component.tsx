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
            {/* <li className="icon-content">
                <section
                    data-social="Facebook"
                    className="a"
                    aria-label="Facebook"
                >
                    <div className="filled"></div>
                    <Facebook className="bi bi-Facebook" />
                </section>
                <a href="https://Facebook.com/" className="tooltip">
                    Facebook
                </a>
            </li> */}
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
                            tel: "3816206925",
                        })
                    }
                    className="tooltip"
                >
                    WhatsAppp
                </button>
            </li>
            {/* <li className="icon-content">
                <section
                    data-social="instagram"
                    aria-label="Instagram"
                    className="a"
                >
                    <div className="filled"></div>
                    <Instagram className="bi bi-instagram" />
                    
                </section>

                <a href="https://Facebook.com/" className="tooltip">
                    Instagram
                </a>
            </li> */}
            {/* <li className="icon-content">
                <section
                    data-social="youtube"
                    aria-label="Youtube"
                    className="a"
                >
                    <div className="filled"></div>
                    <svg
                        // xml:space="preserve"
                        viewBox="0 0 16 16"
                        className="bi bi-youtube"
                        fill="currentColor"
                        height="16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="currentColor"
                            d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
                        ></path>
                    </svg>
                </section>
                <a href="https://Facebook.com/" className="tooltip">
                    Youtube
                </a>
            </li> */}
        </ul>
    );
};

export default MenuComponent;

/*
        <div className=" h-screen  fixed z-[990]  top-0 opacity-0 right-0  show-menu">
            <div className="input-menu">
                <div className="value-menu">
                    <Facebook
                        width={"100%"}
                        height={"100%"}
                        fill="#000"
                        className=" hover:fill-[#1B468A]"
                    />
                </div>
                <div className="value-menu">
                    <Instagram
                        width={"100%"}
                        height={"100%"}
                        fill="#000"
                        className=" hover:fill-[#DB5860] "
                    />
                </div>
                <div className="value-menu">
                    <Whatsapp
                        width={"100%"}
                        height={"100%"}
                        fill="#000"
                        className=" hover:fill-[#4CB050]"
                    />
                </div>
            </div>
        </div>

*/
