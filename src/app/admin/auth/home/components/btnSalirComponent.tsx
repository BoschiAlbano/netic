"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { toast } from "sonner";

function BtnSalirComponent() {
    const handleClick = () => {
        toast("Quienes cerrar sesion?", {
            action: {
                label: "Salir",
                onClick: () => signOut(),
            },
        });
    };

    return (
        <div className="flex flex-col  px-4">
            <nav className="flex-1 space-y-1 bg-gray-800">
                <ul>
                    <li>
                        <button
                            onClick={() => handleClick()}
                            className="inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform border rounded-lg bg-gray-900 text-gray-200 border-gray-800 hover:border-gray-800 hover:bg-transparent"
                        >
                            <svg
                                stroke="currentColor"
                                fill="none"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2"></path>
                                <path d="M15 12h-12l3 -3"></path>
                                <path d="M6 15l-3 -3"></path>
                            </svg>
                            <span className="ml-4">Salir</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default BtnSalirComponent;
