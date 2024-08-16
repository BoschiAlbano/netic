"use client";
import React, { useState } from "react";

const Accordion = ({ title = "", answer = "" }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className="py-0">
            <button
                onClick={() => setAccordionOpen(!accordionOpen)}
                className="flex justify-between w-full  cursor-pointer items-center rounded-lg px-2 sm:py-2 py-1 text-[var(--Color1)]  hover:text-gray-700"
            >
                <span className="sm:text-2xl text-md font-medium">{title}</span>
                <span
                    className={`shrink-0 transition duration-300 ${
                        accordionOpen ? "-rotate-180" : "rotate-0"
                    }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>
            </button>
            <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out text-white text-sm ${
                    accordionOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                }  space-y-1 px-4 `}
            >
                <div
                    className={`overflow-hidden  px-4 sm:py-2 py-1 rounded-lg font-medium text-[var(--Color1)]  hover:text-gray-700 sm:text-lg text-sm ${
                        accordionOpen ? "block" : ""
                    }`}
                >
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default Accordion;
