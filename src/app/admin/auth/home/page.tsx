import React from "react";
import prisma from "@/lib/prisma";

const Page = async () => {
    // usar redux - almacenar los datos
    //
    const pedidos = await prisma.contratar.findMany();

    // const pedidos = [{ Nombre: "albano", DNI: "41771998", Telefono: "" }];

    return (
        <section>
            <h1>Pedididos de clientes</h1>

            {pedidos.map((items, index) => {
                return (
                    <div
                        key={index}
                        className=" flex flex-col justify-center items-center"
                    >
                        <h1>{items.Nombre}</h1>
                        <h1>{items.DNI}</h1>
                        <h1>{items.Telefono}</h1>
                    </div>
                );
            })}
        </section>
    );
};

export default Page;
