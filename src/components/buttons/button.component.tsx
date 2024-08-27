"use client";
import Link from "next/link";
import React from "react";

const BotonesComponent = ({ texto = "", page = "/", active = false }) => {
    return (
        <div>
            <button
                className={`cta ${
                    active
                        ? " before:w-full before:bg-[var(--Color1)]"
                        : "before:hover:w-full before:hover:bg-[var(--Color4)]"
                }`}
            >
                <Link
                    href={`${page}`}
                    className="flex flex-row justify-center items-center"
                >
                    <span className={`${active ? "text-white" : "text-black"}`}>
                        {texto}
                    </span>
                    <svg
                        className={`${
                            active ? "stroke-white" : "stroke-black"
                        }`}
                        width="15px"
                        height="10px"
                        viewBox="0 0 13 10"
                    >
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </Link>
            </button>
        </div>
    );
};

export default BotonesComponent;
