"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useRequireAuth } from "@/lib/auth/hooks";

interface AuthGuardProps {
  children: React.ReactNode;
  redirectTo?: string;
}

export default function AuthGuard({
  children,
  redirectTo = "/join-us",
}: AuthGuardProps) {
  const { isAuthenticated, isLoading, checkAuth } = useRequireAuth(redirectTo);
  const router = useRouter();

  useEffect(() => {
    // For development, temporarily bypass authentication
    if (process.env.NODE_ENV === "development") {
      return;
    }

    if (!isLoading) {
      const isAuth = checkAuth();
      if (!isAuth) {
        router.push(redirectTo);
      }
    }
  }, [isLoading, checkAuth, router, redirectTo]);

  // For development, temporarily bypass authentication
  if (process.env.NODE_ENV === "development") {
    return <>{children}</>;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect to join-us
  }

  return <>{children}</>;
}
