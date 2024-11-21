import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const value = request.cookies.get("self-hosting")?.value.toString();

  if (!!value && value === "true") {
    return NextResponse.rewrite(new URL("/edge-middleware/true", request.url));
  } else {
    return NextResponse.rewrite(new URL("/edge-middleware/false", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/edge-middleware",
};
