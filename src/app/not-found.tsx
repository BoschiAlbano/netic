import Image from "next/image";
import BotonesComponent from "../components/buttons/button.component";

export default function Custom404() {
    return (
        <div className="grid place-content-center gap-10 justify-items-center h-screen w-screen ">
            <div className="text-center w-[90%] sm:w-[100%]">
                <Image
                    src={"/logo.png"}
                    height={500}
                    width={500}
                    alt="NETIC Page Not Found"
                />

                <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Uh-oh!
                </h1>

                <p className="mt-4 text-gray-500">Esta pagina no existe.</p>
            </div>

            <BotonesComponent page="/" texto="Volver" />
        </div>
    );
}
