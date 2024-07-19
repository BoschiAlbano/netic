"use client";
import React, { useEffect, useState } from "react";
import YouTubePlayer from "react-player/youtube";
import TitleComponent from "../titles/title.component";
import BotonesComponent from "../buttons/button.component";
const TutorialesComponent = () => {
    const [state, setstate] = useState(false);

    useEffect(() => {
        setstate(true);
    }, []);
    return (
        <section className="relative w-[90%] z-30 grid place-items-center content-center p-0 py-10 sm:min-h-screen sm:h-full h-full gap-10">
            <div className="z-10 circulo bg-[#3021722f] bottom-0 left-0"></div>
            <div className="z-10 circulo bg-[#fa00f615] top-0  right-0 "></div>

            <TitleComponent
                h1="tutoriales para todos"
                span=""
                strong="Tutoriales"
            />

            <div className="grilla-tutoriales z-30">
                <div className="w-full flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-header blur-effect efecto-show-scroll">
                    <div className="relative mx-4 -mt-6 h-auto overflow-hidden rounded-xl text-white shadow-xl ">
                        <div className="shadow-header border-white rounded-[5px] w-full h-full  object-cover aspect-video overflow-hidden efecto-show-scroll">
                            {state && (
                                <YouTubePlayer
                                    url={
                                        "https://www.youtube.com/watch?v=JRFkj_F7YlE"
                                    }
                                    controls
                                    // muted
                                    // loop
                                    width={"100%"}
                                    height={"100%"}
                                />
                            )}
                        </div>
                    </div>
                    <div className="p-6">
                        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Titutlo
                        </h5>
                        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            Descripcion - Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Nunc felis ligula.
                        </p>
                    </div>
                </div>
                <div className="w-full flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-header blur-effect efecto-show-scroll">
                    <div className="relative mx-4 -mt-6 h-auto overflow-hidden rounded-xl text-white shadow-xl ">
                        <div className="shadow-header border-white rounded-[5px] w-full h-full  object-cover aspect-video overflow-hidden efecto-show-scroll">
                            {state && (
                                <YouTubePlayer
                                    url={
                                        "https://www.youtube.com/watch?v=JRFkj_F7YlE"
                                    }
                                    controls
                                    // muted
                                    // loop
                                    width={"100%"}
                                    height={"100%"}
                                />
                            )}
                        </div>
                    </div>
                    <div className="p-6">
                        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Titutlo
                        </h5>
                        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            Descripcion - Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Nunc felis ligula.
                        </p>
                    </div>
                </div>
                <div className="w-full flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-header blur-effect efecto-show-scroll">
                    <div className="relative mx-4 -mt-6 h-auto overflow-hidden rounded-xl text-white shadow-xl ">
                        <div className="shadow-header border-white rounded-[5px] w-full h-full  object-cover aspect-video overflow-hidden efecto-show-scroll">
                            {state && (
                                <YouTubePlayer
                                    url={
                                        "https://www.youtube.com/watch?v=JRFkj_F7YlE"
                                    }
                                    controls
                                    // muted
                                    // loop
                                    width={"100%"}
                                    height={"100%"}
                                />
                            )}
                        </div>
                    </div>
                    <div className="p-6">
                        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Titutlo
                        </h5>
                        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            Descripcion - Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Nunc felis ligula.
                        </p>
                    </div>
                </div>
            </div>

            <BotonesComponent texto="Ver mas" page="tutoriales" />
        </section>
    );
};

export default TutorialesComponent;
