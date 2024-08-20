"use client";
import React, { useEffect, useRef } from "react";
import InputComponent from "../Input/Input";
import RadioButoonComponent from "../radioButon/radioButoon.component";
import { useFormState } from "react-dom";
import { contratar } from "@/actions/client/cliente.action";
import { toast } from "sonner";
import SubmitComponent from "../buttons/submit.component";

const FormularioSubmit = () => {
    const initialState = { message: "", errors: {} };
    const [state, dispatch] = useFormState(contratar, initialState);

    const refForm = useRef<HTMLFormElement>(null);

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();

    //     const form = e?.target as HTMLFormElement;
    //     const formData = new FormData(form);

    //     const apiNom = formData.get("NombreyApellido") as string;

    //     const rawFormData = Object.fromEntries(formData.entries());
    //     console.log(rawFormData);
    // };

    useEffect(() => {
        if (state.errors) {
            Object.entries(state.errors).forEach(([key, value]) => {
                toast.error(`${key} - ${value}`);
            });
        } else {
            toast.success(state.message);
            refForm.current?.reset();
        }
    }, [state]);

    return (
        <form
            ref={refForm}
            // onSubmit={(e) => handleSubmit(e)}
            action={dispatch}
            className=" flex flex-col justify-between items-center gap-4"
        >
            <div className="w-[100%] z-30 relative grid place-items-center">
                <div className=" sm:text-6xl text-3xl sm:mb-5 mb-2 font-bold">
                    <strong className=" text-[var(--Color1)] font-extrabold">
                        Contrata
                    </strong>
                    <span className="text-[#374151]"> Ahora</span>
                </div>
                <h1 className="sm:text-3xl text-sm xm:mb-5 mb-2 text-[#374151]">
                    estaremos en contacto lo mas pronto posible
                </h1>
            </div>

            <InputComponent
                name="Nombre"
                palabra="Nombre y Apellido"
                type="text"
            />
            <div className=" flex w-full gap-2 ">
                <InputComponent name="DNI" palabra="DNI" type="number" />

                <InputComponent
                    name="Telefono"
                    palabra="Telefono"
                    type="number"
                />
            </div>
            <div className="flex w-full gap-2">
                <InputComponent name="Calle" palabra="Calle" type="text" />
                <InputComponent name="Numero" palabra="Numero" type="number" />
                <InputComponent
                    name="Casa"
                    palabra="Casa"
                    type="text"
                    required={false}
                />
            </div>
            <RadioButoonComponent />
            <InputComponent
                name="Otros Campos"
                palabra="Otros Campos"
                type="text"
            />

            <SubmitComponent />
        </form>
    );
};

export default FormularioSubmit;
