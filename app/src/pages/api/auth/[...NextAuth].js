import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '~/prisma';

export default NextAuth({
    secret: process.env.SECRET.replace(/\\n/gm, '\n'),
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async session({ session, user, token }) {
            if (session?.user) {
                session.user.id = token.sub;
            }

            return session;
        },
    },
});
