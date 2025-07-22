export type {
  User,
  AuthResponse,
  LoginCredentials,
  AuthState,
  AuthContextType,
  AuthError,
} from "./auth/types";

export { authService } from "./auth/service";
export { authStorage } from "./auth/storage";
export { authAPI } from "./auth/api";

export {
  isTokenValid,
  decodeToken,
  isValidEmail,
  validatePassword,
  validateCredentials,
} from "./auth/utils";

export { AuthProvider, useAuth } from "./auth/context";

export {
  useLogin,
  useLogout,
  useCurrentUser,
  useAuthStatus,
  useRequireAuth,
} from "./auth/hooks";

export { authService as default } from "./auth/service";
