"use client";

import { getCookieHandler } from "@/actions/cookie";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

interface AuthState {
  token?: string;
  role?: string;
  isLoading: boolean;
}

export default function RenderAuthButton({
  className,
}: {
  className?: string;
}) {
  const [authState, setAuthState] = useState<AuthState>({
    isLoading: true,
  });

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check both token and role simultaneously
        const [tokenResult, roleResult] = await Promise.all([
          getCookieHandler("token"),
          getCookieHandler("role"),
        ]);

        setAuthState({
          token: tokenResult.success ? tokenResult.value : undefined,
          role: roleResult.success ? roleResult.value : undefined,
          isLoading: false,
        });
      } catch (error) {
        setAuthState({ isLoading: false });
      }
    };

    checkAuth();
  }, []);

  if (authState.isLoading) {
    return (
      <div className="h-10 w-28 bg-gray-200 animate-pulse rounded-md">
        {/* Loading skeleton */}
      </div>
    );
  }

  if (authState.token && authState.role) {
    const dashboardPath =
      authState.role === "owner" ? "/owner/gym" : "/member/gym";

    return (
      <Link
        href={dashboardPath}
        className={cn(
          "bg-gray-900 text-white hover:bg-black h-10 rounded-md px-5 flex items-center gap-2 transition-colors",
          className
        )}
      >
        <span>Dashboard</span>
      </Link>
    );
  }

  return (
    <Link
      href="/auth"
      className={cn(
        "bg-gray-900 text-white hover:bg-black h-10 rounded-md px-5 flex items-center gap-2 transition-colors",
        className
      )}
    >
      Get Started
    </Link>
  );
}
