import React from "react";
import FormularioComponent from "../../components/formulario/formulario.component";
import SvgPuntos from "@/components/svg/puntos.svg";
import Header from "@/components/header/header";

const Page = () => {
    return (
        <Header>
            <section className="w-full min-h-screen h-full grid place-items-center sm:pt-[0px] pt-[50px]">
                <SvgPuntos className=" sm:w-[10%] w-[30%] absolute sm:left-0 right-0 sm:translate-x-[25%] opacity-[.6] top-0 sm:translate-y-[50%] translate-y-[60%] fill-[#dbdbfd] rotate-[15deg]" />

                <FormularioComponent />
            </section>
        </Header>
    );
};

export default Page;
