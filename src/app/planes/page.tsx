import React from "react";
import Planes from "../../components/tarjetas/planes.component";
import Header from "../../components/header/header";

const Page = () => {
    return (
        <div>
            <Header />
            <div className=" w-full pt-20 grid place-items-center">
                <Planes />
            </div>
        </div>
    );
};

export default Page;
