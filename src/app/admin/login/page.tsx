import React from "react";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/authOption";
import { getServerSession } from "next-auth/next";
import FormularioLoginComponent from "./components/formulario.login.component";
// import Link from "next/link";

const Page = async () => {
    const session = await getServerSession(authOptions);
    console.log(session);

    if (session?.user) {
        redirect("/admin/auth/home");
        return null;
    }

    return (
        <div
            className={`w-full h-[100svh] min-h-full flex flex-col justify-center items-center gap-10 `}
        >
            <span className="absolute top-0 left-0 mx-4 my-2 text-[var(--Color1)] font-bold text-xl">
                Login
            </span>

            <section className="sm:min-w-[400px] min-w-[100%]  sm:h-[80%] h-[100%]  relative rounded-lg overflow-hidden">
                {/* <Link
                    href={"/admin/register"}
                    className=" absolute bottom-0 left-0 flex justify-center items-center m-1 rounded-[5px] py-1 px-2 shadow-2xl"
                >
                    <p className=" font-semibold text-lg text-[var(--Color1)]">
                        Register
                    </p>
                </Link> */}

                <FormularioLoginComponent />
            </section>
        </div>
    );
};

export default Page;
