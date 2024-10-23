"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Link } from "next-view-transitions";
import Input from "@/components/Input/Input";
import ArrowDown from "./arrowDown.svg";

const FormularioLoginComponent = () => {
    const router = useRouter();
    const [isUp, setisUp] = useState<boolean>(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // No controlada

        // const form = event.target as HTMLFormElement;
        // const formData = new FormData(form)

        // const email = formData.get("email") as string;
        // const password = formData.get("password") as string;

        const formData = new FormData(event.currentTarget);
        const datos = Object.fromEntries(formData.entries());
        console.log(datos);

        signIn("credentials", {
            email: datos.email,
            password: datos.password,
            redirect: false,
            callbackUrl: `${process.env.NEXT_PUBLIC_HOST}/admin/auth/home`,
        })
            .then((response) => {
                if (!response) {
                    return;
                }

                if (!response.ok) {
                    console.log(response.error);
                    toast.error(response.error);
                } else {
                    toast.success("Login Existoso...");
                    router.push("/admin/auth/home");
                    router.refresh();
                }
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.message);
            });
    };

    return (
        <form
            onSubmit={(e) => {
                handleSubmit(e);
            }}
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
                className=" absolute top-[-38px] bg-gray-100 w-[80px] h-[40px] rounded-t-full text-center flex justify-center items-center "
            >
                <p className={`w-[35px] ${!isUp && "mover"}`}>
                    <ArrowDown
                        className={`fill-[#302172] ${
                            isUp ? "rotateDown " : "rotateUp"
                        }`}
                    />
                </p>
            </button>

            <h1 className=" text-2xl">Login</h1>

            <Input name="email" palabra="Usuario" type="text"></Input>

            <Input name="password" palabra="password" type="password"></Input>

            <button
                className=" button py-2 px-4 rounded-[5px] w-full text-xl"
                type="submit"
            >
                Ingresar
            </button>
            <p className=" text-center">
                ¿Aun no tines Cuenta? registrate ahora
                <br />
                <Link href={"/admin/register"}>Register</Link>
            </p>
        </form>
    );
};

export default FormularioLoginComponent;
