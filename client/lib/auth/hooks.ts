"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./context";
import { LoginCredentials } from "./types";
import { validateCredentials } from "./utils";

/**
 * Hook for login functionality with validation
 */
export function useLogin() {
  const { login, isLoading } = useAuth();
  const router = useRouter();

  const loginWithValidation = useCallback(
    async (credentials: LoginCredentials, redirectTo: string = "/") => {
      // Validate credentials
      const errors = validateCredentials(
        credentials.email,
        credentials.password
      );
      if (errors.length > 0) {
        throw new Error(errors[0]);
      }

      try {
        const response = await login(credentials);

        // Redirect after successful login
        router.push(redirectTo);

        return response;
      } catch (error) {
        throw error;
      }
    },
    [login, router]
  );

  return {
    login: loginWithValidation,
    isLoading,
  };
}

/**
 * Hook for logout functionality
 */
export function useLogout() {
  const { logout } = useAuth();
  const router = useRouter();

  const logoutAndRedirect = useCallback(
    (redirectTo: string = "/join-us") => {
      logout();
      router.push(redirectTo);
    },
    [logout, router]
  );

  return {
    logout: logoutAndRedirect,
  };
}

/**
 * Hook to get current user information
 */
export function useCurrentUser() {
  const { user, isAuthenticated, isLoading } = useAuth();

  return {
    user,
    isAuthenticated,
    isLoading,
  };
}

/**
 * Hook for authentication status checks
 */
export function useAuthStatus() {
  const { isAuthenticated, isLoading, verifyToken } = useAuth();

  const checkAuthStatus = useCallback(async () => {
    if (!isAuthenticated) return false;
    return await verifyToken();
  }, [isAuthenticated, verifyToken]);

  return {
    isAuthenticated,
    isLoading,
    checkAuthStatus,
  };
}

/**
 * Hook for protected routes - redirects if not authenticated
 */
export function useRequireAuth(redirectTo: string = "/join-us") {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  const checkAuth = useCallback(() => {
    if (!isLoading && !isAuthenticated) {
      router.push(redirectTo);
      return false;
    }
    return isAuthenticated;
  }, [isAuthenticated, isLoading, router, redirectTo]);

  return {
    isAuthenticated,
    isLoading,
    checkAuth,
  };
}
