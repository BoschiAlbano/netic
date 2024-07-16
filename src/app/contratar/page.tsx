import React from "react";
import FormularioComponent from "../../components/formulario/formulario.component";
import Header from "../../components/header/header";
const Page = () => {
    return (
        <div>
            <Header />
            <div className=" w-full pt-20 grid place-items-center">
                <FormularioComponent />
            </div>
        </div>
    );
};

export default Page;
