"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const FormularioComponent = () => {
    const router = useRouter();
    const [data, setData] = useState<login>({ Email: "", Password: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        signIn("credentials", {
            email: data.Email,
            password: data.Password,
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
        <form onSubmit={(e) => onSubmit(e)}>
            <h1>email</h1>
            <input
                name="Email"
                value={data.Email}
                onChange={(e) => handleChange(e)}
                type="text"
            />
            <h1>paswword</h1>
            <input
                name="Password"
                value={data.Password}
                onChange={(e) => handleChange(e)}
                type="password"
            />

            <button type="submit">Enviar</button>
        </form>
    );
};

export default FormularioComponent;
