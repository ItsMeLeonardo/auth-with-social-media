import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const register = async ({ user }) => {
  const response = await axios.post(`${BASE_URL}/users`, user);
  return response.data;
};

export const login = async ({ email, password }) => {
  const response = await axios.post(`${BASE_URL}/auth`, { email, password });
  return response.data;
};

export const getUser = async ({ token, userId }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${BASE_URL}/users/${userId}`, config);
  return response.data;
};
