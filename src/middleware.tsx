import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  const { url, cookies } = request;

  let accessToken = cookies.get("accessToken");

  const isAuthPage = url.includes("/login") || url.includes("/register");

  if (isAuthPage && accessToken) {
    return NextResponse.redirect(new URL("/home", url));
  }

  if (isAuthPage) {
    return NextResponse.next();
  }

  if (!accessToken) {
    return NextResponse.redirect(new URL("/", url));
  }

  return NextResponse.next();
}

export const config = { matcher: ["/login", "/register", "/home", "/tasks"] };
