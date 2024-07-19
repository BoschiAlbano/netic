import React from "react";
import Facebook from "../svg/icons/facebook.svg";
import Instagram from "../svg/icons/instagram.svg";
import Whatsapp from "../svg/icons/whatsapp.svg";

const MenuComponent = () => {
    return (
        <div className=" h-screen  fixed z-[990]  top-0 opacity-0 right-0  show-menu">
            <div className="input-menu">
                <div className="value-menu">
                    <Facebook width={"100%"} height={"100%"} fill="#000" />
                </div>
                <div className="value-menu">
                    <Instagram width={"100%"} height={"100%"} fill="#000" />
                </div>
                <div className="value-menu">
                    <Whatsapp width={"100%"} height={"100%"} fill="#000" />
                </div>
            </div>
        </div>
    );
};

export default MenuComponent;
