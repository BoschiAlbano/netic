import Preguntas from "../components/banners/preguntas.component";
import BotonesComponent from "../components/buttons/button.component";
import Planes from "../components/tarjetas/planes.component";
import TutorialesComponent from "../components/tutoriales/tutoriales.component";
import TarjetasBanner from "@/components/tarjetas/tarjetas.planes.component";
import MapaComponent from "@/components/mapa/mapa.component";

export default function Home() {
    return (
        <main className="w-full  min-h-screen h-full relative flex flex-col  items-center mostrar sm:gap-52 gap-20  ">
            {/* <div className=" z-10 w-full sm:h-full h-screen absolute top-[-70px] left-0 contenedor "></div> */}
            <div className=" z-10 w-full sm:h-full h-screen absolute top-[-70px] left-0 contenedor "></div>
            <section className=" home relative  z-30 min-h-[calc(100vh-100px)] sm:h-full w-full flex flex-col justify-evenly items-center gap-0 ">
                <div className=" w-full h-full grid sm:grid-cols-2 grid-cols-1 place-items-center ">
                    <div className=" z-30 grid place-items-center gap-4  ">
                        <div className="flex flex-col justify-canter items-center gap-0 relative   ">
                            <h1 className=" text-[var(--Color1)]  sm:text-6xl text-3xl font-extrabold sm:tracking-[5px] tracking-[1px] sm:mb-4 mb-2">
                                LLegamos a tu hogar
                            </h1>
                            <h1 className=" sm:text-3xl text-lg font-normal sm:mb-4 mb-2 text-black">
                                velocidad, seguridad y confiabilidad
                            </h1>
                            <BotonesComponent
                                texto="Contratar"
                                page="/contratar"
                            />

                            <img
                                className=" sm:block hidden animar-wifi absolute opacity-[0.9] w-[150px] top-[-90%] right-[50%] translate-x-[50%]  aspect-square object-contain "
                                src="wifi.png"
                                alt=""
                            />
                        </div>
                    </div>

                    <img src="/banner.png" alt="" className=" w-[80%] " />
                </div>

                <div>
                    <TarjetasBanner />
                </div>
            </section>
            <div className=" w-full grid place-items-center relative py-10">
                <Planes />
                <section className="curved"></section>
            </div>

            <div className="  w-full grid place-items-center relative py-10 ">
                <MapaComponent />
            </div>
            <div className="  w-full grid place-items-center bg-[#F6F6FD] py-10">
                <Preguntas />
            </div>
            <div className="  w-full grid place-items-center">
                <TutorialesComponent />
            </div>
        </main>
    );
}
