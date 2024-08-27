import TitleComponent from "@/components/titles/title.component";
import React from "react";
const Page = () => {
    return (
        <Header>
            <section className=" grid place-items-center mt-[100px] sm:gap-20 gap-10 mb-20">
                <div className=" relative w-full grid place-items-center ">
                    <div className=" relative py-10 sm:w-[90%] w-[90%] flex sm:flex-row flex-col justify-center items-center sm:gap-20 gap-10 text-center">
                        <div className=" sm:w-[40%] w-[100%] aspect-square  flex justify-center items-center relative">
                            <img
                                src="/wireless.webp"
                                alt="imagen wireless"
                                loading="lazy"
                            />
                        </div>

                        <div className="z-[99] w-[100%] sm:w-[60%]  h-full flex flex-col justify-center items-center sm:gap-10 gap-5">
                            <TitleComponent
                                strong="¿Quiénes"
                                span="somos?"
                                h1=""
                            />
                            <p className={`sm:text-xl text-sm font-medium`}>
                                En Netic, somos un equipo apasionado y
                                comprometido con la conectividad. Nos
                                especializamos en ser tu proveedor de servicios
                                de internet (ISP) de confianza, ofreciendo
                                soluciones avanzadas tanto para hogares como
                                para empresas. Con un enfoque en la innovación y
                                el servicio al cliente, nos dedicamos a llevar
                                la mejor experiencia de internet a tu puerta,
                                impulsando la conexión y el crecimiento en cada
                                rincón que alcanzamos.
                            </p>
                        </div>
                    </div>
                </div>

                <div className=" relative w-full grid place-items-center sm:py-20 sm:gap-20 gap-10 py-0 ">
                    <section className="curved sm:block hidden "></section>
                    <div className=" relative sm:w-[70%] w-[90%] flex sm:flex-row flex-col-reverse justify-center items-center sm:gap-20 gap-10 text-center">
                        <div className="z-[99] w-[100%] sm:w-[60%]  h-full flex flex-col justify-center items-center sm:gap-10 gap-5">
                            <TitleComponent
                                strong="¿Qué "
                                span="hacemos?"
                                h1=""
                            />
                            <p className={`sm:text-xl text-sm font-medium`}>
                                En Netic, proporcionamos acceso a internet de
                                alta velocidad mediante dos tecnologías clave:
                                fibra óptica e internet wireless. Ofrecemos una
                                conexión estable, rápida y segura, diseñada para
                                satisfacer las necesidades digitales de hoy. Ya
                                sea que busques una solución robusta para tu
                                hogar o una red confiable para tu negocio, en
                                Netic tenemos la infraestructura y el
                                conocimiento para conectarte con el mundo de la
                                manera más eficiente.
                            </p>
                        </div>

                        <div className=" z-[99] sm:w-[40%] w-[100%] aspect-square  flex justify-center items-center relative">
                            <img
                                src="/wireless.webp"
                                alt="imagen wireless"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <section className="curved sm:block hidden "></section>
                    <div className=" sm:w-[70%] py-10 w-[90%] flex sm:flex-row flex-col justify-center items-center sm:gap-20 gap-10 text-center">
                        <div className=" z-[99] sm:w-[40%] w-[100%] aspect-square  flex justify-center items-center relative">
                            <img
                                src="/wireless.webp"
                                alt="imagen wireless"
                                loading="lazy"
                            />
                        </div>

                        <div className="z-[99] w-[100%] sm:w-[60%]  h-full flex flex-col justify-center items-center sm:gap-10 gap-5">
                            <TitleComponent strong="Misión" span="" h1="" />
                            <p className={`sm:text-xl text-sm font-medium`}>
                                Nuestra misión es transformar la forma en que
                                las personas y empresas acceden a internet,
                                proporcionando un servicio de alta calidad que
                                sea accesible, confiable y adaptado a las
                                necesidades de cada cliente. Nos esforzamos por
                                ser más que un proveedor de servicios, buscamos
                                ser un socio en la conectividad, empoderando a
                                nuestras comunidades con herramientas digitales
                                que mejoren su calidad de vida.
                            </p>
                        </div>
                    </div>
                </div>

                <div className=" sm:w-[70%] w-[90%] flex sm:flex-row flex-col-reverse justify-center items-center sm:gap-20 gap-10 text-center">
                    <div className="z-[99] w-[100%] sm:w-[60%]  h-full flex flex-col justify-center items-center sm:gap-10 gap-5">
                        <TitleComponent strong="Visión " span="" h1="" />
                        <p className={`sm:text-xl text-sm font-medium`}>
                            Nuestra visión es convertirnos en el líder en
                            servicios de conectividad en la región, siendo
                            reconocidos por nuestra excelencia en servicio,
                            innovación tecnológica y compromiso con el
                            desarrollo de las comunidades a las que servimos.
                            Aspiramos a crear un futuro donde el acceso a
                            internet de alta velocidad sea una realidad para
                            todos, contribuyendo al crecimiento sostenible de
                            las economías locales y al bienestar de nuestra
                            sociedad.
                        </p>
                    </div>

                    <div className=" sm:w-[40%] w-[100%] aspect-square  flex justify-center items-center relative">
                        <img
                            src="/wireless.webp"
                            alt="imagen wireless"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
        </Header>
    );
};

export default Page;
