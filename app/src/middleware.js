import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
    const session = await getToken({ req:request, secret: process.env.SECRET });
    if(!session) {
        return NextResponse.redirect(new URL('/api/auth/signin', request.url));
    }
    
    return NextResponse.next()
}

export const config = {
    matcher: '/u/:path*'
}
