import { AuthResponse, LoginCredentials, AuthError } from "./types";

class AuthAPI {
  private readonly BASE_URL = "http://127.0.0.1:5000/api/v1/auth";

  // Login or register user
  async loginOrRegister(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const response = await fetch(`${this.BASE_URL}/login-or-register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Authentication failed");
      }

      const data: AuthResponse = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error("Network error occurred");
    }
  }

  // Verify token with backend
  async verifyToken(token: string): Promise<boolean> {
    try {
      const response = await fetch(`${this.BASE_URL}/verify`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.ok;
    } catch (error) {
      console.error("Token verification failed:", error);
      return false;
    }
  }

  // Get authorization header for API requests
  getAuthHeader(token: string | null): Record<string, string> {
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
}

export const authAPI = new AuthAPI();
