interface JWTPayload {
  exp?: number;
  iat?: number;
  sub?: string;
  [key: string]: unknown;
}

export function isTokenValid(token: string | null): boolean {
  if (!token) return false;

  try {
    const payload = JSON.parse(atob(token.split(".")[1])) as JWTPayload;
    const currentTime = Date.now() / 1000;

    return payload.exp ? payload.exp > currentTime : false;
  } catch (error) {
    console.error("Error validating token:", error);
    return false;
  }
}

export function decodeToken(token: string | null): JWTPayload | null {
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split(".")[1])) as JWTPayload;
    return payload;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePassword(password: string): {
  isValid: boolean;
  message?: string;
} {
  if (!password) {
    return { isValid: false, message: "Password is required" };
  }

  if (password.length < 5) {
    return {
      isValid: false,
      message: "Password must be at least 5 characters",
    };
  }

  return { isValid: true };
}

export function validateCredentials(email: string, password: string): string[] {
  const errors: string[] = [];

  if (!email) {
    errors.push("Email is required");
  } else if (!isValidEmail(email)) {
    errors.push("Please enter a valid email address");
  }

  const passwordValidation = validatePassword(password);
  if (!passwordValidation.isValid && passwordValidation.message) {
    errors.push(passwordValidation.message);
  }

  return errors;
}
