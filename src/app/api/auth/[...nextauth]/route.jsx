import NextAuth from "next-auth";
import prisma from "@/app/lib/prismadb";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProviders from "next-auth/providers/google";

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProviders({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "name@email.com" },
                password: { label: "Password", type: "text" },
                username: { label: "Username", type: "text", placeholder: "Name" },
            },
            async authorize(credentials){
                const user = { id: 1, name: "Joel", email: 'joelbjoseph03@gmail.com' }
                return user;
            },
        }),
    ],
    secret: process.env.SECRET,
    session: {
        strategy: "jwt",
    },
    debug: process.env.NODE_ENV === "development",
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }