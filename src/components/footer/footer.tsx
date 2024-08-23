import React from "react";
import Whatsapp from "../svg/icons/whatsapp.svg";
import Instagram from "../svg/icons/instagram.svg";
import Facebook from "../svg/icons/facebook.svg";
import Link from "next/link";

const Footer = () => {
    return (
        <section
            className={` footer w-full h-full sm:mt-20 mt-5 flex sm:flex-row flex-col justify-center py-5 flex-wrap items-center gap-5 z-30`}
        >
            <Link href={"#home"} className="sm:absolute relative">
                <img
                    src="logo.png"
                    alt="logo de netic"
                    loading="lazy"
                    className=" sm:w-[150px] w-[130px] jello"
                />
            </Link>

            <div
                className=" w-[90%] h-full flex sm:flex-row flex-col justify-between items-center sm:px-10 px-2
            "
            >
                <div className=" flex  gap-10">
                    <Whatsapp className=" sm:w-[30px] w-[20px] sm:h-[30px] h-[20px] text-[#1b1b1b] hover:text-gray-600 cursor-pointer jello" />
                    <Facebook className=" sm:w-[30px] w-[20px] sm:h-[30px] h-[20px] text-[#1b1b1b] hover:text-gray-600 cursor-pointer jello" />
                    <Instagram className=" sm:w-[30px] w-[20px] sm:h-[30px] h-[20px] text-[#1b1b1b] hover:text-gray-600 cursor-pointer jello" />
                </div>

                <div className="  flex-col justify-center items-center text-[#1b1b1b] font-semibold  sm:flex hidden ">
                    <p>Ildefonso de las Muñecas 1431.</p>
                    <p>San Miguel de Tucumán, Argentina.</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;
