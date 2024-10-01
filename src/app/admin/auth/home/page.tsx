import React, { Suspense } from "react";
import CustomKanban from "./components/crud.component";
import prisma from "@/lib/prisma";

const ClientesComponent = async () => {
    const contratar = await prisma.contratar.findMany({
        where: { Eliminado: false },
    });

    return (
        <section className="relative w-full h-full  ">
            <section className="pt-[80px]">
                <h1 className=" absolute top-0 left-0 text-bg-gray-800 font-semibold py-2 px-4">
                    Clientes
                </h1>

                <Suspense fallback={<p>Cargando...</p>}>
                    <CustomKanban datos={contratar} />
                </Suspense>
            </section>
        </section>
    );
};

export default ClientesComponent;
