import React from "react";
import Planes from "../../components/tarjetas/planes.component";
import WirelessComponent from "@/components/planesWireless/wireless.component";
const Page = () => {
    return (
        <section className="w-full h-full grid place-items-center gap-20">
            <WirelessComponent />
            <Planes />
        </section>
    );
};

export default Page;
