import { User } from "./types";

class AuthStorage {
  private readonly TOKEN_KEY = "auth_token";
  private readonly USER_KEY = "auth_user";

  private get isClient(): boolean {
    return typeof window !== "undefined";
  }

  setToken(token: string): void {
    if (this.isClient) {
      localStorage.setItem(this.TOKEN_KEY, token);
    }
  }

  getToken(): string | null {
    if (this.isClient) {
      return localStorage.getItem(this.TOKEN_KEY);
    }
    return null;
  }

  removeToken(): void {
    if (this.isClient) {
      localStorage.removeItem(this.TOKEN_KEY);
    }
  }

  setUser(user: User): void {
    if (this.isClient) {
      localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    }
  }

  getUser(): User | null {
    if (this.isClient) {
      const userData = localStorage.getItem(this.USER_KEY);
      return userData ? JSON.parse(userData) : null;
    }
    return null;
  }

  removeUser(): void {
    if (this.isClient) {
      localStorage.removeItem(this.USER_KEY);
    }
  }

  clear(): void {
    this.removeToken();
    this.removeUser();
  }
}

export const authStorage = new AuthStorage();
