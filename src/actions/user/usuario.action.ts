"use server";

import prisma from "@/lib/prisma";
import { StateRegister } from "@/models/clients/contratar.model";
import { z } from "zod";

const CreateRegisterSchema = z.object({
    email: z
        .string({ invalid_type_error: "Email debe ser un string" })
        .min(1, { message: "Complete el campo" }),
    password: z
        .string({ invalid_type_error: "password debe ser un string" })
        .min(1, { message: "Complete el campo" }),
    passwordNetic: z
        .string({ invalid_type_error: "password Netic debe ser un string" })
        .min(1, { message: "Complete el campo" }),
});

export async function register(prevState: StateRegister, formData: FormData) {
    try {
        const data = Object.fromEntries(formData.entries());

        const _DatosValidados = CreateRegisterSchema.safeParse(data);

        if (!_DatosValidados.success) {
            return {
                errors: _DatosValidados.error.flatten().fieldErrors,
                message: "Error, Revise todos los campos...",
            };
        }

        // validar la password Netic
        if (
            _DatosValidados.data.passwordNetic !==
            process.env.NEXT_SECRET_PASSWORD_NETIC
        ) {
            return {
                errors: {
                    Error: ["Clave Netic invalida..."],
                },
                message: "Error, Clave Netic invalida...",
            };
        }

        // Save in DB
        const save = await prisma.usuario.create({
            data: {
                Email: _DatosValidados.data.email,
                Password: _DatosValidados.data.password,
                Eliminado: false,
            },
        });

        console.log(save);

        if (!save) {
            return {
                message: "Guardar en base de datos...",
                errors: {
                    Error: ["Guardar en base de datos..."],
                },
            };
        }

        // ok

        return {
            message: "Ok, Usuario Registrado",
        };
    } catch (error) {
        console.log(error);
        return {
            errors: { error: ["en el Servidor..."] },
            message: "Error, en el servidor",
        };
    }
}
