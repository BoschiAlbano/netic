import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#f6f6fd] sm:mt-20 mt-0">
            <div className="relative mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
                <div className="lg:flex lg:items-end lg:justify-between">
                    <div>
                        <div className="flex justify-center text-teal-600 lg:justify-start">
                            <img
                                src="/logo.png"
                                alt="logo netic"
                                className=" max-h-[50px]"
                            />
                        </div>

                        <p className="mx-auto sm:text-xl text-sm mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                            ¡Solicita tu plan hoy mismo y conéctate al futuro!
                            Síguenos en nuestras redes sociales para estar al
                            día con nuestras últimas novedades y promociones.
                        </p>
                    </div>

                    <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
                        <li>
                            <a
                                className="text-gray-700 transition hover:text-gray-700/75"
                                href="#"
                            >
                                {" "}
                                Home{" "}
                            </a>
                        </li>

                        <li>
                            <a
                                className="text-gray-700 transition hover:text-gray-700/75"
                                href="/#planes"
                            >
                                {" "}
                                Planes{" "}
                            </a>
                        </li>

                        <li>
                            <a
                                className="text-gray-700 transition hover:text-gray-700/75"
                                href="/contratar"
                            >
                                {" "}
                                Contratar{" "}
                            </a>
                        </li>

                        <li>
                            <a
                                className="text-gray-700 transition hover:text-gray-700/75"
                                href="/empresa"
                            >
                                {" "}
                                Empresa{" "}
                            </a>
                        </li>
                    </ul>
                </div>

                <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
                    Copyright &copy; 2024. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

// const Footer = () => {
//     return (
//         <section
//             className={` footer w-full h-full sm:mt-20 mt-5 flex sm:flex-row flex-col justify-center py-5 flex-wrap items-center gap-5 z-30`}
//         >
//             <Link href={"#home"} className="sm:absolute relative">
//                 <img
//                     src="logo.png"
//                     alt="logo de netic"
//                     loading="lazy"
//                     className=" sm:w-[150px] w-[130px] jello"
//                 />
//             </Link>

//             <div
//                 className=" w-[90%] h-full flex sm:flex-row flex-col justify-between items-center sm:px-10 px-2
//             "
//             >
//                 <div className=" flex  gap-10">
//                     <Whatsapp className=" sm:w-[30px] w-[20px] sm:h-[30px] h-[20px] text-[#302172] hover:text-[#302172f5] cursor-pointer jello" />
//                     <Facebook className=" sm:w-[30px] w-[20px] sm:h-[30px] h-[20px] text-[#302172] hover:text-[#302172f5] cursor-pointer jello" />
//                     <Instagram className=" sm:w-[30px] w-[20px] sm:h-[30px] h-[20px] text-[#302172] hover:text-[#302172f5] cursor-pointer jello" />
//                 </div>

//                 <div className="  flex-col justify-center items-center text-[#302172] font-semibold  sm:flex hidden ">
//                     <p>Ildefonso de las Muñecas 1431.</p>
//                     <p>San Miguel de Tucumán, Argentina.</p>
//                 </div>
//             </div>
//         </section>
//     );
// };

export default Footer;
