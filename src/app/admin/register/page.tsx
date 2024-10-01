import React from "react";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/authOption";
import { getServerSession } from "next-auth/next";
import FormularioRegisterComponent from "./components/formulario.register.component";

const Page = async () => {
    const session = await getServerSession(authOptions);
    console.log(session);

    if (session?.user) {
        redirect("/admin/auth/home");
        return null;
    }

    return (
        <div
            className={`w-full h-[100svh] min-h-full flex flex-col justify-center items-center gap-10 bg-gray-800 `}
        >
            <span className="absolute top-0 left-0 mx-4 my-2 text-white font-bold text-xl">
                Register
            </span>

            <section className=" sm:min-w-[400px] min-w-[100%]  sm:h-[80%] h-[100%]  relative rounded-lg overflow-hidden">
                <FormularioRegisterComponent />
            </section>
        </div>
    );
};

export default Page;
