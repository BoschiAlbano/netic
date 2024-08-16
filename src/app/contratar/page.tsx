import React from "react";
import FormularioComponent from "../../components/formulario/formulario.component";
import Header from "../../components/header/header";
import Footer from "@/components/footer/footer";

const Page = () => {
    return (
        <>
            <Header />
            <div className=" w-full grid place-items-center sm:pt-0 pt-[80px] ">
                <FormularioComponent />
            </div>
            <Footer />
        </>
    );
};

export default Page;
