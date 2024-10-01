"use server";

import { StateContratar } from "@/models/clients/contratar.model";
import z from "zod";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const createContratarSchema = z.object({
    Nombre: z
        .string({
            invalid_type_error: "Campo invalido",
        })
        .min(1, { message: "Complete el campo" }),
    DNI: z.coerce
        .number()
        .gt(0, { message: "El Campo DNI debe ser un numero" }),
    Telefono: z.coerce
        .number()
        .gt(0, { message: "El Campo Telefono debe ser un numero" }),
    Domicilio: z
        .string({
            invalid_type_error: "Campo invalido",
        })
        .min(1, { message: "Complete el campo" }),
    Barrio: z
        .string({
            invalid_type_error: "Campo invalido",
        })
        .min(1, { message: "Complete el campo" }),
    Mail: z
        .string({
            invalid_type_error: "Campo invalido",
        })
        .min(1, { message: "Complete el campo" })
        .email("El mail no es valido"),
    Plan: z.coerce
        .number()
        .gt(0, { message: "El Campo Pan debe ser un numero" }),
});

export async function contratar(prevState: StateContratar, formData: FormData) {
    try {
        const _RawFormData = Object.fromEntries(formData.entries());

        console.log(_RawFormData);

        const _DatosValidados = createContratarSchema.safeParse(_RawFormData);

        if (!_DatosValidados.success) {
            return {
                errors: _DatosValidados.error.flatten().fieldErrors,
                message: "Error, Revise todos los campos",
            };
        }

        // Buscar DNI
        const buscarDNI = await prisma.contratar.findFirst({
            where: {
                DNI: _DatosValidados.data.DNI.toString(),
                Eliminado: false,
            },
        });
        if (buscarDNI) {
            return {
                message: "Error, Ya tienes un pedido enviado...",
                errors: {
                    Error: ["Ya tienes un pedido enviado..."],
                },
            };
        }
        // Guardar en DB usando Prisma...
        const guardarDB = await prisma.contratar.create({
            data: {
                ..._DatosValidados.data,
                Telefono: _DatosValidados.data.Telefono.toString(),
                DNI: _DatosValidados.data.DNI.toString(),
            },
        });

        console.log(guardarDB);

        if (!guardarDB) {
            return {
                message: "Error, Guardar en base de datos...",
                errors: {
                    Error: ["Guardar en base de datos..."],
                },
            };
        }

        revalidatePath("/admin/auth/home");

        return {
            message: "enviado... Estaremos en contacto Gracias 👌",
        };
    } catch (error) {
        console.log(error);
        return {
            message: "¡Algo salió mal, en el Servidor...",
            errors: { error: ["Error, en el Servidor..."] },
        };
    }
}
