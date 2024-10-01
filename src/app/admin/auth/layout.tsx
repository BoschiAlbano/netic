import { authOptions } from "@/lib/authOption";
import { getServerSession } from "next-auth/next";
import NavmenuComponent from "./home/components/navmenu.component";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getServerSession(authOptions);
    console.log("session: ");
    console.log(session);
    return (
        <div className="flex overflow-hidden w-screen min-h-svh h-full ">
            <NavmenuComponent session={session} />
            <main className="relative flex-1 overflow-y-auto h-screen z-10">
                <div className="py-4 px-4 h-full ">
                    <div className="rounded-lg  w-full h-full relative m-0 p-0 bg-gray-50">
                        {/* Contenido */}
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
