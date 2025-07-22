export interface User {
  id: number;
  email: string;
}

export interface AuthResponse {
  message: string;
  token: string;
  user: User;
  action: "login" | "register";
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<AuthResponse>;
  logout: () => void;
  verifyToken: () => Promise<boolean>;
}

export interface AuthError {
  message: string;
  code?: string;
}
