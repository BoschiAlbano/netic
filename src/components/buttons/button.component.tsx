"use client";
import Link from "next/link";
import React from "react";

const BotonesComponent = ({ texto = "", page = "/" }) => {
    return (
        <Link href={`${page}`}>
            <button className=" cta">
                <span>{texto}</span>
                <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </button>
        </Link>
    );
};

export default BotonesComponent;
