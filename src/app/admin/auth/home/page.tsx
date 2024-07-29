import React, { Suspense } from "react";
import CustomKanban from "./components/crud.component";
import Header from "./components/header.component";
import TitleComponent from "@/components/titles/title.component";

import prisma from "@/lib/prisma";
const Page = async () => {
    const contratar = await prisma.contratar.findMany({
        where: { Eliminado: false },
    });

    return (
        <section className="relative w-full h-full  ">
            <Header />

            <section className="pt-[80px]">
                <TitleComponent h1="" span="" strong="Clientes" />

                <Suspense fallback={<p>Cargando...</p>}>
                    <CustomKanban datos={contratar} />
                </Suspense>
            </section>
        </section>
    );
};

export default Page;
