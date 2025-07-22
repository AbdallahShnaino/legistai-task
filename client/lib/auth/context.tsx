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

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,
};

type AuthAction =
  | { type: "AUTH_LOADING" }
  | { type: "AUTH_SUCCESS"; payload: { user: User; token: string } }
  | { type: "AUTH_FAILURE" }
  | { type: "AUTH_LOGOUT" }
  | {
      type: "AUTH_INITIALIZED";
      payload: { isAuthenticated: boolean; user: User | null };
    };

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

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(authReducer, initialState);

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

  const logout = () => {
    authService.logout();
    dispatch({ type: "AUTH_LOGOUT" });
  };

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

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
