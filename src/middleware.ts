import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import userGet from "./actions/user-get";

export async function middleware(request: NextRequest) {
	const { data } = await userGet();
	if (data?.username && request.nextUrl.pathname.startsWith("/login")) {
		return NextResponse.redirect(new URL("/", request.url));
	}
	if (!data?.username && request.nextUrl.pathname.startsWith("/conta")) {
		return NextResponse.redirect(new URL("/login", request.url));
	}
	return NextResponse.next();
}

export const config = {
	matcher: ["/conta/:path*", "/login/:path*"],
};
