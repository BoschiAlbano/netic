"use client";
const YouTubePlayer = dynamic(() => import("react-player/youtube"), {
    ssr: false,
});
import dynamic from "next/dynamic";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

interface video {
    url: string;
    titulo: string;
    descripcion: string;
}

const videos: video[] = [
    {
        url: "https://www.youtube.com/watch?v=3u2YVX7eW24",
        titulo: "Instalando un entorno para desplegar apps #MERN en un servidor dedicado con #DonWeb",
        descripcion:
            "En este directo, los invitados de #donweb nos muestran cómo instalar desde cero un entorno para desplegar una app con stack #MERN en un servidor dedicado con #Ubuntu para enseñar a los participantes del #Devathon para que puedan desplegar sus proyectos en esta edición.",
    },
    {
        url: "https://www.youtube.com/watch?v=C3NhmT__Mn4",
        titulo: "Nodejs & MySQL Deploy gratuito en Railway",
        descripcion:
            "Aprende a hacer deploy o desplegar tus aplicaciones de Nodejs y MySQL usando un servicio de la nube conocido como railway.app Railway es un servicio de Platform as a Service (PaaS) que te permite desplegar aplicaciones de multiples lenguajes mas bases de datos usando Github, además tiene plantes gratuitos y ofrece un dominio gratuito, por lo que te nos permitirá nuestras aplicaciones web. En este ejemplo desplegaremos una aplicación de Nodejs y MySQL desde cero.",
    },
    {
        url: "https://www.youtube.com/watch?v=NsaAN6diuw4",
        titulo: "¿Donde desplegar bases de datos de SQL para proyectos reales?",
        descripcion:
            "Esta es una lista de algunos servicios de la nube que te permiten desplegar bases de datos SQL (como MySQL, PostgreSQL, SQL Server y otros) en producción para proyectos reales. Entre estos podemos encontrar a AWS RDS, Google Cloud SQL, Railway, Render.com, Digitalocean manage databases, planetscale y neon.",
    },
    {
        url: "https://www.youtube.com/watch?v=NsaAN6diuw4",
        titulo: "¿Donde desplegar bases de datos de SQL para proyectos reales?",
        descripcion:
            "Esta es una lista de algunos servicios de la nube que te permiten desplegar bases de datos SQL (como MySQL, PostgreSQL, SQL Server y otros) en producción para proyectos reales. Entre estos podemos encontrar a AWS RDS, Google Cloud SQL, Railway, Render.com, Digitalocean manage databases, planetscale y neon.",
    },
];

const TutorialesComponent2 = () => {
    return (
        <>
            <section className=" grid place-items-center sm:w-[80%] w-[95%] relative">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={false}
                    // autoHeight={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    id="mySwiper"
                >
                    {videos.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className="">
                                <div className=" w-[100%] h-[100%] aspect-video rounded-[5px] overflow-hidden   flex flex-col gap-4 justify-center items-center ">
                                    <YouTubePlayer
                                        url={item.url}
                                        key={index}
                                        controls
                                        // muted
                                        // loop
                                        width={"100%"}
                                        height={"100%"}
                                        fallback={
                                            <p className=" text-black">
                                                Cargando...
                                            </p>
                                        }
                                        style={{ background: "#ffff" }}
                                    />
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </section>
        </>
    );
};

export default TutorialesComponent2;
