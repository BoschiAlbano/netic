import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "credentials",
            credentials: {
                email: {
                    label: "email",
                    type: "text",
                },
                password: {
                    label: "password",
                    type: "password",
                },
            },
            async authorize(credentials, req) {
                if (!credentials) {
                    throw new Error("Credenciales Indefinidas...");
                }

                const email = credentials.email;
                const password = credentials.password;

                console.log(email, password);
                // Base de datos
                const Empleado = await prisma.usuario.findUnique({
                    where: { Email: email },
                });

                console.log(Empleado);
                if (!Empleado) {
                    throw new Error("Usuario no registrado");
                }

                if (
                    email !== Empleado.Email &&
                    password !== Empleado.Password
                ) {
                    throw new Error("Usuario/contraseña no son correctos");
                }

                console.log("Auth Ok..");
                return {
                    name: Empleado.Email,
                    email: Empleado.Email,
                    roll: 1,
                };
            },
        }),
    ],
    pages: {
        signIn: "/admin/login",
        error: "/admin/login",
    },
    session: {
        maxAge: 28800, //3600 - 1 hora -> 8hs
        strategy: "jwt",
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_JWT_SECRET,
    debug: true,
    callbacks: {
        async jwt({ token, user, session, trigger }) {
            if (trigger === "update" && session?.name) {
                token.name = session.name;
            }

            if (user) {
                return {
                    ...token,
                    roll: user.roll,
                };
            }

            return token;
        },
        async session({ session, token, user }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    roll: token.roll,
                },
            };
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
