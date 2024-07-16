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
            <body className={montserrat.className}>{children}</body>
            <Toaster richColors />
        </html>
    );
}
