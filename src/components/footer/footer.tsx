import React from "react";
import Whatsapp from "../svg/icons/whatsapp.svg";
import Instagram from "../svg/icons/instagram.svg";
import Facebook from "../svg/icons/facebook.svg";
import Link from "next/link";

const Footer = () => {
    return (
        <section
            className={` w-full h-full sm:mt-20 mt-5 flex sm:flex-row flex-col justify-center border-white border-t-[3px]  shadow-header py-5 bg-[var(--Color1)] flex-wrap items-center gap-5`}
        >
            <Link href={"#home"} className="sm:absolute relative">
                <img
                    src="logoBlanco.png"
                    alt=""
                    className=" sm:w-[150px] w-[130px] jello"
                />
            </Link>

            <div className=" w-[90%] h-full flex sm:flex-row flex-col justify-between items-center">
                <div className=" flex  gap-10">
                    <Whatsapp className=" sm:w-[30px] w-[20px] sm:h-[30px] h-[20px] fill-white hover:text-gray-300 cursor-pointer jello" />
                    <Facebook className=" sm:w-[30px] w-[20px] sm:h-[30px] h-[20px] fill-white hover:text-gray-300 cursor-pointer jello" />
                    <Instagram className=" sm:w-[30px] w-[20px] sm:h-[30px] h-[20px] fill-white hover:text-gray-300 cursor-pointer jello" />
                </div>

                <div className="  flex-col text-white sm:flex hidden ">
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;
