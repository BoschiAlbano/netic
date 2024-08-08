import React from "react";
import Planes from "../../components/tarjetas/planes.component";
import Header from "../../components/header/header";

const Page = () => {
    return (
        <div>
            <Header />
            <div className=" sm:pt-0 pt-[60px] w-full grid place-items-center">
                <Planes />
            </div>
        </div>
    );
};

export default Page;
