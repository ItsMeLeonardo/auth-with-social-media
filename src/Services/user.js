import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_API_URL;

const getToken = () => {
  try {
    const token = sessionStorage.getItem("token");
    return JSON.parse(token);
  } catch (error) {
    console.log({ error });
    return null;
  }
};

/**
 * @desc Create a new user in DB
 * @param user {Object}
 * @returns {Promise<any>}
 */
export const register = async ({ user }) => {
  const response = await axios.post(`${BASE_URL}/users`, user);
  return response.data;
};

/**
 * @desc auth user with email and password from the form
 * @param {String} email
 * @param {String} password
 * @returns {Promise<any>}
 */
export const login = async ({ email, password }) => {
  const response = await axios.post(`${BASE_URL}/auth`, { email, password });
  const data = response.data;
  console.log({ email, password });
  console.log({ data });
  if (data.error) {
    throw new Error(data.error);
  }

  return data;
};

/**
 * @desc get the data of user
 * @returns {Promise<any>}
 */
export const getUser = async () => {
  const token = getToken();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${BASE_URL}/users`, config);
  return response.data;
};

/**
 * @desc Update the data of user
 * @param {FormData} user user with data to edit
 * @returns {Promise<any>}
 */
export const editUserData = async ({ user }) => {
  const token = getToken();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(`${BASE_URL}/users/edit`, user, config);
  return response.data;
};
