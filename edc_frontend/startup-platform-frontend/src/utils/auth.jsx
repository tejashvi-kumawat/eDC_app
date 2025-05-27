const TOKEN_KEY = 'startup_platform_token';

export const setStoredToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getStoredToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const removeStoredToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};
