"use client";

// import useNerScreen from "@/app/hooks/useNerScreen";
import React from "react";
import TitleComponent from "../titles/title.component";
import TarjetaBannerComponent from "./banner.component";
const TarjetaPlanesComponent = () => {
    return (
        <section
            className={` relative sm:w-[90%] w-full z-30 grid place-items-center content-center p-0 py-10 sm:min-h-screen sm:h-full h-full `}
        >
            <div id="IdPlanesWifi"></div>

            <div className="z-10 circulo bg-[#fa00f615] top-0 right-0"></div>
            <div className="z-10 circulo bg-[#3021722f]  bottom-0 left-0"></div>

            <TitleComponent
                h1="Conocé nuestros servicios de fibra óptica y elegí la opción
                    que mejor se adapte a tus necesidades y preferencias."
                span="internet la mejor conexión para tu hogar"
                strong="PLANES"
            />

            <div className={`w-full z-30 relative sm:my-20 my-0  `}>
                <Tarjeta2 />
            </div>

            <TarjetaBannerComponent />
        </section>
    );
};
export default TarjetaPlanesComponent;

function Tarjeta2() {
    return (
        <div className="grillaPlanes sm:scale-[1.1] scale-none ">
            <div className="box efecto-show-scroll ">
                <p className="title">PLAN</p>
                <div className="price">
                    <b>50</b>
                    <span>Mbps</span>
                </div>

                <div className="features">
                    <div>Navegá sin limites</div>
                    <div>Streaming sin interrupciones</div>
                    <div>Jugá en linea sin fluctuaciones</div>
                    <div>hasta 50Mbps de bajada</div>
                </div>

                <div className="button">
                    <button>Contratar</button>
                </div>
            </div>

            <div className="box efecto-show-scroll-sin-scale professional">
                <p className="title">PLAN</p>
                <div className="price">
                    <b>100</b>
                    <span>Mbps</span>
                </div>

                <div className="features">
                    <div>Navegá sin limites</div>
                    <div>Streaming sin interrupciones</div>
                    <div>Jugá en linea sin fluctuaciones</div>
                    <div>hasta 100Mbps de bajada</div>
                </div>

                <div className="button">
                    <button>Contratar</button>
                </div>
            </div>

            <div className="box efecto-show-scroll">
                <p className="title">PLAN</p>
                <div className="price">
                    <b>200</b>
                    <span>Mbps</span>
                </div>

                <div className="features">
                    <div>Navegá sin limites</div>
                    <div>Streaming sin interrupciones</div>
                    <div>Jugá en linea sin fluctuaciones</div>
                    <div>hasta 200Mbps de bajada</div>
                </div>

                <div className="button">
                    <button>Contratar</button>
                </div>
            </div>
        </div>
    );
}
