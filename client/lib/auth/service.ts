import { AuthResponse, LoginCredentials, User } from "./types";
import { authStorage } from "./storage";
import { authAPI } from "./api";
import { isTokenValid } from "./utils";

class AuthService {
  isAuthenticated(): boolean {
    const token = authStorage.getToken();
    return isTokenValid(token);
  }

  getCurrentUser(): User | null {
    return authStorage.getUser();
  }

  getCurrentToken(): string | null {
    return authStorage.getToken();
  }

  async loginOrRegister(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const response = await authAPI.loginOrRegister(credentials);

      authStorage.setToken(response.token);
      authStorage.setUser(response.user);

      return response;
    } catch (error) {
      throw error;
    }
  }

  async verifyToken(): Promise<boolean> {
    const token = authStorage.getToken();
    if (!token) return false;

    if (!isTokenValid(token)) {
      this.logout();
      return false;
    }

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

  logout(): void {
    authStorage.clear();
  }

  getAuthHeader(): Record<string, string> {
    const token = authStorage.getToken();
    return authAPI.getAuthHeader(token);
  }

  async initialize(): Promise<{ isAuthenticated: boolean; user: User | null }> {
    const token = authStorage.getToken();
    const user = authStorage.getUser();

    if (!token || !user) {
      return { isAuthenticated: false, user: null };
    }

    const isValid = await this.verifyToken();

    return {
      isAuthenticated: isValid,
      user: isValid ? user : null,
    };
  }
}

export const authService = new AuthService();
