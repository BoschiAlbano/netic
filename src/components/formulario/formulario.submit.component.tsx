"use client";
import React from "react";
import InputComponent from "../Input/Input";
import RadioButoonComponent from "../radioButon/radioButoon.component";

const FormularioSubmit = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e?.target as HTMLFormElement;
        const formData = new FormData(form);

        const apiNom = formData.get("NombreyApellido") as string;

        // extrar todos los campos
        const rawFormData = Object.fromEntries(formData.entries());
        console.log(rawFormData);
    };

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            action=""
            className=" flex flex-col justify-between items-center gap-4"
        >
            <InputComponent
                name="NombreyApellido"
                palabra="Nombre y Apellido"
                type="text"
            />
            <div className=" flex w-full gap-2 ">
                <InputComponent name="DNI" palabra="DNI" type="text" />
                <InputComponent
                    name="Telefono"
                    palabra="Telefono"
                    type="text"
                />
            </div>
            <div className="flex w-full gap-2">
                <InputComponent name="Calle" palabra="Calle" type="text" />
                <InputComponent name="Numero" palabra="Numero" type="text" />
                <InputComponent name="Casa" palabra="Casa" type="text" />
            </div>

            <RadioButoonComponent />

            <InputComponent
                name="Otros Campos"
                palabra="Otros Campos"
                type="text"
            />

            <button type="submit" className="bt" id="bt">
                <span className="msg" id="msg"></span>
                ENVIAR
            </button>
        </form>
    );
};

export default FormularioSubmit;
