const BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const register = async ({ user }) => {
  console.log({ user });
  const response = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  if (data.error) return Promise.reject(data.error);
  return data;
};

export const login = async ({ email, password }) => {
  const response = await fetch(`${BASE_URL}/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (data.error) return Promise.reject(data.error);
  return data;
};
