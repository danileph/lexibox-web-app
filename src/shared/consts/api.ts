export const BASE_API = 'http://localhost:8090';

export const API_ENDPOINTS = {
  register: () => `${BASE_API}/api/v1/auth/register`,
  signIn: () => `${BASE_API}/sign-in`,
} as const;
