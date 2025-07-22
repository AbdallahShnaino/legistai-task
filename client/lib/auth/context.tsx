"use client";

import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from "react";
import {
  AuthState,
  AuthContextType,
  LoginCredentials,
  AuthResponse,
  User,
} from "./types";
import { authService } from "./service";

// Initial state
const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,
};

// Action types
type AuthAction =
  | { type: "AUTH_LOADING" }
  | { type: "AUTH_SUCCESS"; payload: { user: User; token: string } }
  | { type: "AUTH_FAILURE" }
  | { type: "AUTH_LOGOUT" }
  | {
      type: "AUTH_INITIALIZED";
      payload: { isAuthenticated: boolean; user: User | null };
    };

// Reducer
function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "AUTH_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "AUTH_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
      };
    case "AUTH_FAILURE":
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case "AUTH_LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case "AUTH_INITIALIZED":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.user ? authService.getCurrentToken() : null,
        isAuthenticated: action.payload.isAuthenticated,
        isLoading: false,
      };
    default:
      return state;
  }
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Initialize auth state on mount
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const { isAuthenticated, user } = await authService.initialize();
        dispatch({
          type: "AUTH_INITIALIZED",
          payload: { isAuthenticated, user },
        });
      } catch (error) {
        console.error("Auth initialization failed:", error);
        dispatch({ type: "AUTH_FAILURE" });
      }
    };

    initializeAuth();
  }, []);

  // Login function
  const login = async (
    credentials: LoginCredentials
  ): Promise<AuthResponse> => {
    dispatch({ type: "AUTH_LOADING" });

    try {
      const response = await authService.loginOrRegister(credentials);

      dispatch({
        type: "AUTH_SUCCESS",
        payload: {
          user: response.user,
          token: response.token,
        },
      });

      return response;
    } catch (error) {
      dispatch({ type: "AUTH_FAILURE" });
      throw error;
    }
  };

  // Logout function
  const logout = () => {
    authService.logout();
    dispatch({ type: "AUTH_LOGOUT" });
  };

  // Verify token function
  const verifyToken = async (): Promise<boolean> => {
    try {
      const isValid = await authService.verifyToken();
      if (!isValid) {
        dispatch({ type: "AUTH_LOGOUT" });
      }
      return isValid;
    } catch (error) {
      dispatch({ type: "AUTH_LOGOUT" });
      return false;
    }
  };

  const contextValue: AuthContextType = {
    ...state,
    login,
    logout,
    verifyToken,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

// Hook to use auth context
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
