import React from "react";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import FormularioComponent from "./components/formulario.component";

const Page = async () => {
    const session = await getServerSession(authOptions);
    console.log(session);

    if (session?.user) {
        redirect("/admin/auth/home");
        return null;
    }

    return (
        <div className=" w-screen h-screen grid place-items-center">
            <h1>Pagina de login</h1>

            <FormularioComponent />
        </div>
    );
};

export default Page;
