import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";

import "./globals.css";
import { Toaster } from "sonner";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import MenuComponent from "@/components/menu/menu.component";
// import ParticlesComponent from "@/components/particles/particles";
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
        <html lang="en">
            <body className={montserrat.className}>
                <section className=" sm:min-h-screen sm:h-full flex flex-col justify-between relative overflow-hidden">
                    {/* circulos */}
                    {/* <div className="z-30 circulo-fixed bg-[#fa00f613] top-0 right-0"></div>
                    <div className="z-30 circulo-fixed bg-[#fa00f613] bottom-0 sm:right-[60%] right-[50%]"></div>
                    <div className="z-30 circulo-fixed bg-[#3021721f] sm:top-0 top-[20%] right-[50%]"></div>
                    <div className="z-30 circulo-fixed bg-[#3021721f] sm:bottom-[0%] bottom-[20%]  sm:right-[10%] right-[0%]"></div> */}

                    <MenuComponent />

                    <Header />

                    <section className="z-40 ">{children}</section>
                    <Footer />
                </section>
            </body>
            <Toaster richColors />
        </html>
    );
}
