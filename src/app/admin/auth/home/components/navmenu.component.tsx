"use client";

import { Session } from "next-auth";
import React, { useState } from "react";
import BtnSalirComponent from "./btnSalirComponent";

interface routes {
    route: string;
    text: string;
    svg: React.ReactNode;
}

const navRoutes: routes[] = [
    {
        route: "/admin/auth/home",
        text: "Cliente",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    // stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
            </svg>
        ),
    },
    {
        route: "/admin/auth/estadisticas",
        text: "Estadisticas",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    // stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
            </svg>
        ),
    },
];

const NavmenuComponent = ({ session }: { session: Session | null }) => {
    const [open, setopen] = useState<boolean>(false);

    return (
        <section className=" z-20">
            <MenuLateral session={session} />

            <div className=" flex md:hidden absolute top-0 left-0 w-screen">
                <div className=" ">
                    <div className="bg-gray-800 w-full flex flex-row justify-betweens items-center relative z-10">
                        <a href="#" className=" text-left focus:outline-none">
                            <img
                                className="px-2 py-2 w-[20%] min-w-[100px] "
                                src="/logoBlanco.png"
                                alt=""
                            />
                        </a>
                        <button
                            className="px-2 py-2"
                            onClick={() => setopen(!open)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className=" aspect-square w-[30px]"
                            >
                                <path
                                    fill="#ffff"
                                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM17 17.25H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75Zm0-4.5H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75Zm0-4.5H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75Z"
                                />
                            </svg>
                        </button>
                    </div>

                    <nav
                        className={`flex-1 space-y-1 bg-gray-800 absolute bottom-0  w-full h-auto max-h-[250px]  pt-4 transition-all duration-300 z-0 flex flex-col justify-between pb-5 overflow-y-auto ${
                            open ? "translate-y-[100%]" : "translate-y-[-150%]"
                        }`}
                    >
                        <ul className="px-4 ">
                            {navRoutes.map((item, index) => {
                                return (
                                    <LiComponent
                                        key={index}
                                        route={item.route}
                                        svg={item.svg}
                                        text={item.text}
                                    />
                                );
                            })}
                        </ul>
                        <BtnSalirComponent />
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default NavmenuComponent;

function MenuLateral({ session }: { session: Session | null }) {
    return (
        <div className="hidden md:flex md:flex-shrink-0 bg-gray-800 h-full">
            <div className="flex flex-col w-64">
                <div className="flex flex-col flex-grow pt-5">
                    <div className="flex flex-col items-center flex-shrink-0 px-4">
                        <a
                            href="#"
                            className="px-8 text-left focus:outline-none"
                        >
                            {/* <h2 className="block p-2 text-xl font-medium tracking-tighter transition duration-500 ease-in-out transform cursor-pointer text-gray-200 hover:text-gray-200">
                                    wickedblocks
                                </h2> */}
                            <img className="" src="/logoBlanco.png" alt="" />
                        </a>
                        <button className="hidden rounded-lg focus:outline-none ">
                            <svg
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                className="w-6 h-6"
                            >
                                <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"></path>
                                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col flex-grow px-4 mt-5 overflow-y-auto">
                        <nav className="flex-1 space-y-1 bg-gray-800">
                            <ul>
                                {navRoutes.map((item, index) => {
                                    return (
                                        <LiComponent
                                            key={index}
                                            route={item.route}
                                            svg={item.svg}
                                            text={item.text}
                                        />
                                    );
                                })}
                            </ul>
                        </nav>
                    </div>
                    <BtnSalirComponent />
                    <div className=" w-full flex justify-center items-center py-4">
                        <p className="text-sm font-medium text-gray-50">
                            {session?.user?.name}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function LiComponent({ route, text, svg }: routes) {
    return (
        // <li>
        //     <a
        //         className="inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform border rounded-lg text-gray-200 border-gray-800 hover:border-gray-800 hover:bg-gray-900"
        //         href={`${route}`}
        //     >
        //         {svg}
        //         <span className="ml-4">{text}</span>
        //     </a>
        // </li>

        <li className=" ">
            <a
                className="inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform border rounded-lg text-gray-200 border-gray-800 hover:border-gray-800 hover:bg-gray-900"
                href={route}
            >
                {svg}
                <span className="ml-4">{text}</span>
            </a>
        </li>
    );
}
