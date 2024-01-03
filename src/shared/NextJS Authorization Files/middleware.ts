import { NextRequest, NextResponse } from "next/server";
import { isTokenValid } from "../lib/token/jwt";


export const config = {
  matcher: "/lk/:path*",
};

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  url.pathname = "/";
  const { cookies } = req;

  const nowUnix = (+new Date() / 1e3) | 0;
  const token = req.cookies?.get("access_token");
  const refresh_token = req.cookies?.get("refresh_token");
  
  if(!token && !refresh_token) {
    return
  } 

  const newResponse = NextResponse.next();

  let tokenIsValid = isTokenValid(token, "customer");

  if (!tokenIsValid && !!refresh_token) {
    const response = await fetch(`${process.env.BASE_URL}/user/refresh_token`, {
      body: JSON.stringify({
        refresh_token: refresh_token,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const { access_token } = await response.json();
    const access_token_decoded: { exp: number } = parseJwt(access_token);

    newResponse.cookies.set("token", access_token, {
      path: "/",
      maxAge: access_token_decoded.exp - nowUnix,
    });

    tokenIsValid = true;
  }

  return tokenIsValid ? newResponse : NextResponse.redirect(url);
}