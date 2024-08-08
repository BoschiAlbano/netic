"use client";
import React, { useEffect, useState } from "react";
import YouTubePlayer from "react-player/youtube";
import TitleComponent from "../titles/title.component";
import BotonesComponent from "../buttons/button.component";
import useNerScreen from "@/app/hooks/useNerScreen";

interface video {
    url: string;
    titulo: string;
    descripcion: string;
}

const videos: video[] = [
    {
        url: "https://www.youtube.com/watch?v=3u2YVX7eW24",
        titulo: "Instalando un entorno para desplegar apps #MERN en un servidor dedicado con #DonWeb",
        descripcion:
            "En este directo, los invitados de #donweb nos muestran cómo instalar desde cero un entorno para desplegar una app con stack #MERN en un servidor dedicado con #Ubuntu para enseñar a los participantes del #Devathon para que puedan desplegar sus proyectos en esta edición.",
    },
    {
        url: "https://www.youtube.com/watch?v=C3NhmT__Mn4",
        titulo: "Nodejs & MySQL Deploy gratuito en Railway",
        descripcion:
            "Aprende a hacer deploy o desplegar tus aplicaciones de Nodejs y MySQL usando un servicio de la nube conocido como railway.app Railway es un servicio de Platform as a Service (PaaS) que te permite desplegar aplicaciones de multiples lenguajes mas bases de datos usando Github, además tiene plantes gratuitos y ofrece un dominio gratuito, por lo que te nos permitirá nuestras aplicaciones web. En este ejemplo desplegaremos una aplicación de Nodejs y MySQL desde cero.",
    },
    {
        url: "https://www.youtube.com/watch?v=NsaAN6diuw4",
        titulo: "¿Donde desplegar bases de datos de SQL para proyectos reales?",
        descripcion:
            "Esta es una lista de algunos servicios de la nube que te permiten desplegar bases de datos SQL (como MySQL, PostgreSQL, SQL Server y otros) en producción para proyectos reales. Entre estos podemos encontrar a AWS RDS, Google Cloud SQL, Railway, Render.com, Digitalocean manage databases, planetscale y neon.",
    },
];

const TutorialesComponent = () => {
    const [state, setstate] = useState(false);

    useEffect(() => {
        setstate(true);
    }, []);

    const { elementRef: refScreeen, isNearScreen: isNearScreen } = useNerScreen(
        {
            distance: "0px",
            once: true,
        }
    );
    return (
        <section className="relative w-[90%]  z-30 grid place-items-center content-center p-0 py-10 sm:min-h-screen sm:h-full h-full gap-10">
            <div className="z-10 circulo bg-[#3021722f] bottom-0 left-0"></div>
            <div className="z-10 circulo bg-[#fa00f615] top-0  right-0 "></div>

            <TitleComponent
                h1="Si tienes alguna duda puedes consultar nuestros tutoriales"
                span=""
                strong="Tutoriales"
            />

            <div
                ref={refScreeen}
                className={`grilla-tutoriales z-30 ${
                    isNearScreen ? "efecto-show" : "opacity-0"
                }`}
            >
                {/* efecto-show-scroll */}
                {state &&
                    videos.map((item, index) => {
                        return (
                            <Video
                                key={index}
                                url={item.url}
                                titulo={item.titulo}
                                descripcion={item.descripcion}
                            />
                        );
                    })}
            </div>

            <BotonesComponent texto="Ver mas" page="tutoriales" />
        </section>
    );
};

export default TutorialesComponent;

function Video({
    titulo,
    descripcion,
    url,
}: {
    titulo: string;
    descripcion: string;
    url: string;
}) {
    return (
        <div className="w-full h-full flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-header blur-effect ">
            <div className="relative mx-4 -mt-6 h-auto overflow-hidden rounded-xl text-white shadow-xl ">
                {/* efecto-show-scroll */}
                <div className="shadow-header border-white rounded-[5px] w-full h-full  object-cover aspect-video overflow-hidden ">
                    <YouTubePlayer
                        url={url}
                        controls
                        // muted
                        // loop
                        width={"100%"}
                        height={"100%"}
                    />
                </div>
            </div>
            <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {titulo}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    {descripcion}
                </p>
            </div>
        </div>
    );
}
