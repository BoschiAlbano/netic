import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import { Toaster } from "sonner";
import { ViewTransitions } from "next-view-transitions";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "Netic",
    description:
        "NETIC es un proveedor líder de servicios de Internet (ISP) que ofrece conexiones de alta velocidad, confiabilidad y un servicio al cliente excepcional. Con NETIC, disfruta de una navegación sin interrupciones, streaming fluido y una conexión segura. Únete a nosotros y experimenta la diferencia de una Internet de calidad.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ViewTransitions>
            <html lang="en">
                <body className={montserrat.className}>
                    <section className=" sm:min-h-screen  sm:h-full flex flex-col justify-between relative overflow-hidden">
                        {children}
                    </section>
                </body>
                <Toaster richColors />
            </html>
        </ViewTransitions>
    );
}
