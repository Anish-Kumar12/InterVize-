import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../convex/_generated/api";

if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
  throw new Error("NEXT_PUBLIC_CONVEX_URL is not defined");
}

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.next(); 
  }

  const url = new URL(req.nextUrl);

  try {
    const user = await convex.query(api.users.getUserByClerkId, { clerkId: userId });

    if (!user) {
      return NextResponse.next(); 
    }

    const { role } = user;

    if (role === "default" && url.pathname !== "/") {
      return NextResponse.redirect(new URL("/", req.url));
    }

    if (role === "candidate" && !url.pathname.startsWith("/meetings") && url.pathname !== "/") {
      return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Convex query error:", error);
    return NextResponse.next(); 
  }
});

// Middleware Matcher
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
