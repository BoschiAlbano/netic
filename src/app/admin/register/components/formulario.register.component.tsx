"use client";

import React, { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Input from "@/components/Input/Input";
import ArrowDown from "./arrowDown.svg";

import { useFormState } from "react-dom";
import { register } from "@/actions/user/usuario.action";

const FormularioRegisterComponent = () => {
    const initialState = { message: "", errors: {} };

    const router = useRouter();
    const [isUp, setisUp] = useState<boolean>(false);

    const [state, dispatch] = useFormState(register, initialState);
    const refForm = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state.errors) {
            Object.entries(state.errors).forEach(([key, value]) => {
                toast.error(`${key} - ${value}`);
            });
        } else {
            toast.success(state.message);
            refForm.current?.reset();
            router.push("/admin/login");
        }
    }, [state]);

    return (
        <form
            ref={refForm}
            action={dispatch}
            className={`bg-gray-100 flex flex-col justify-between items-center p-5 absolute bottom-0 w-full opacity-[1] h-[45%] rounded-t-lg ${
                isUp ? "showDown" : "showUp"
            }`}
        >
            <div className=" z-20 w-[100%] top-[-150px] left-0 absolute flex flex-col justify-end items-center">
                <img
                    className=" w-[50%] object-contain"
                    src="/logoBlanco.png"
                    alt=""
                    loading="lazy"
                />
            </div>

            <button
                type="button"
                onClick={() => setisUp(!isUp)}
                className=" absolute top-[-38px] bg-gray-100  w-[80px] h-[40px] rounded-t-full text-center flex justify-center items-center "
            >
                <p className={`w-[28px] ${!isUp && "mover"}`}>
                    <ArrowDown
                        className={`fill-[#302172] ${
                            isUp ? "rotateDown " : "rotateUp"
                        }`}
                    />
                </p>
            </button>

            <h1 className=" text-2xl">Register</h1>

            <Input name="email" palabra="Usuario" type="text"></Input>

            <Input name="password" palabra="password" type="password"></Input>

            <Input
                name="passwordNetic"
                palabra="password Netic"
                type="password"
            ></Input>

            <button
                className="button py-2 px-4 rounded-[5px] w-full text-xl"
                type="submit"
            >
                Ingresar
            </button>
            <p className=" text-center">
                ¿Ya tienes una cuenta? ingresa ahora
                <br />
                <Link href={"/admin/login"}>Login</Link>
            </p>
        </form>
    );
};

export default FormularioRegisterComponent;
