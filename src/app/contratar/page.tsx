import React from "react";
import FormularioComponent from "../../components/formulario/formulario.component";
import Header from "../../components/header/header";

const Page = () => {
    return (
        <>
            <Header />
            <div className=" w-full grid place-items-center ">
                <FormularioComponent />
            </div>
        </>
    );
};

export default Page;
