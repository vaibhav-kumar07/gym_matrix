import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define public routes that don't require authentication
const publicRoutes = ["/", "/about", "/contact", "/trainers", "/classes"];

// Auth routes that should not be accessible when logged in
const authRoutes = ["/auth", "/auth/login", "/auth/register"];

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Get token and role from cookies
  const token = request.cookies.get("token")?.value;
  const role = request.cookies.get("role")?.value;

  // Function to check if the path starts with a specific prefix
  const pathStartsWith = (prefix: string) => pathname.startsWith(prefix);

  // Function to check if it's a public route
  const isPublicRoute = publicRoutes.some((route) => pathname === route);

  // Function to check if it's an auth route
  const isAuthRoute = authRoutes.some(
    (route) => pathname === route || pathname.startsWith(route)
  );

  // If user has either token or role, they shouldn't access auth routes
  if (token || role) {
    if (isAuthRoute) {
      // Redirect based on role (if exists) or default to member
      const redirectPath = role === "owner" ? "/owner" : "/member";
      return NextResponse.redirect(new URL(redirectPath, request.url));
    }
  }

  // If user is authenticated (has token)
  if (token) {
    // Check role-based access
    if (pathStartsWith("/owner") && role !== "owner") {
      return NextResponse.redirect(new URL("/member/gym", request.url));
    }

    if (pathStartsWith("/member") && role !== "member") {
      return NextResponse.redirect(new URL("/owner/gym", request.url));
    }

    // Allow access to role-specific routes if role matches
    return NextResponse.next();
  }

  // If user is not authenticated
  if (!token) {
    // Allow access to public routes and auth routes
    if (isPublicRoute || isAuthRoute) {
      return NextResponse.next();
    }

    // Redirect to login for protected routes
    if (pathStartsWith("/owner") || pathStartsWith("/member")) {
      return NextResponse.redirect(new URL(`/auth`, request.url));
    }
  }

  // Default: allow access
  return NextResponse.next();
}

// Configure paths that should trigger the middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
};
