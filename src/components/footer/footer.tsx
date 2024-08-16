import React from "react";
import Whatsapp from "../svg/icons/whatsapp.svg";
import Instagram from "../svg/icons/instagram.svg";
import Facebook from "../svg/icons/facebook.svg";
import Link from "next/link";

const Footer = () => {
    return (
        <section
            className={` footer w-full h-full sm:mt-20 mt-5 flex sm:flex-row flex-col justify-center border-white border-t-[3px]  py-5 flex-wrap items-center gap-5 z-30`}
        >
            <Link href={"#home"} className="sm:absolute relative">
                <img
                    src="logo.png"
                    alt=""
                    className=" sm:w-[150px] w-[130px] jello"
                />
            </Link>

            <div
                className=" w-[90%] h-full flex sm:flex-row flex-col justify-between items-center sm:px-10 px-2
            "
            >
                <div className=" flex  gap-10">
                    <Whatsapp className=" sm:w-[30px] w-[20px] sm:h-[30px] h-[20px] text-gray-600 hover:text-gray-500 cursor-pointer jello" />
                    <Facebook className=" sm:w-[30px] w-[20px] sm:h-[30px] h-[20px] text-gray-600 hover:text-gray-500 cursor-pointer jello" />
                    <Instagram className=" sm:w-[30px] w-[20px] sm:h-[30px] h-[20px] text-gray-600 hover:text-gray-500 cursor-pointer jello" />
                </div>

                <div className="  flex-col justify-center items-center text-gray-600  sm:flex hidden ">
                    <p className=" font-semibold text-xl">Contacto</p>

                    <p>Boschi.albano.jose@gmail.com</p>
                    <p>381-6206925</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;
