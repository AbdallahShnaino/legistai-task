import { AuthResponse, LoginCredentials, User } from "./types";
import { authStorage } from "./storage";
import { authAPI } from "./api";
import { isTokenValid } from "./utils";

class AuthService {
  // Check if user is authenticated
  isAuthenticated(): boolean {
    const token = authStorage.getToken();
    return isTokenValid(token);
  }

  // Get current user
  getCurrentUser(): User | null {
    return authStorage.getUser();
  }

  // Get current token
  getCurrentToken(): string | null {
    return authStorage.getToken();
  }

  // Login or register user
  async loginOrRegister(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const response = await authAPI.loginOrRegister(credentials);

      // Store token and user data
      authStorage.setToken(response.token);
      authStorage.setUser(response.user);

      return response;
    } catch (error) {
      throw error;
    }
  }

  // Verify token with backend
  async verifyToken(): Promise<boolean> {
    const token = authStorage.getToken();
    if (!token) return false;

    // First check if token is expired locally
    if (!isTokenValid(token)) {
      this.logout();
      return false;
    }

    // Then verify with backend
    try {
      const isValid = await authAPI.verifyToken(token);
      if (!isValid) {
        this.logout();
      }
      return isValid;
    } catch (error) {
      console.error("Token verification failed:", error);
      this.logout();
      return false;
    }
  }

  // Logout user
  logout(): void {
    authStorage.clear();
  }

  // Get authorization header for API requests
  getAuthHeader(): Record<string, string> {
    const token = authStorage.getToken();
    return authAPI.getAuthHeader(token);
  }

  // Initialize auth state (useful for app startup)
  async initialize(): Promise<{ isAuthenticated: boolean; user: User | null }> {
    const token = authStorage.getToken();
    const user = authStorage.getUser();

    if (!token || !user) {
      return { isAuthenticated: false, user: null };
    }

    // Verify token is still valid
    const isValid = await this.verifyToken();

    return {
      isAuthenticated: isValid,
      user: isValid ? user : null,
    };
  }
}

export const authService = new AuthService();
