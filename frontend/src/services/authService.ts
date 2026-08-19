import api from "./api";

interface LoginResponse {
  access_token: string;
  token_type: string;
}

const TOKEN_KEY = "devfolio_access_token";

export async function login(
  username: string,
  password: string,
): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>("/auth/login", {
    username,
    password,
  });

  localStorage.setItem(TOKEN_KEY, response.data.access_token);

  return response.data;
}

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function logout(): void {
  localStorage.removeItem(TOKEN_KEY);
}

export function isAuthenticated(): boolean {
  return Boolean(getToken());
}