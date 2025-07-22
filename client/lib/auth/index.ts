// Types
export type {
  User,
  AuthResponse,
  AuthState,
  LoginCredentials,
  AuthContextType,
  AuthError,
} from "./types";

// Services
export { authService } from "./service";
export { authStorage } from "./storage";
export { authAPI } from "./api";

// Context and Provider
export { AuthProvider, useAuth } from "./context";

// Hooks
export {
  useLogin,
  useLogout,
  useCurrentUser,
  useAuthStatus,
  useRequireAuth,
} from "./hooks";

// Utilities
export {
  isTokenValid,
  decodeToken,
  isValidEmail,
  validatePassword,
  validateCredentials,
} from "./utils";

// Re-export for backward compatibility
export { authService as default } from "./service";
