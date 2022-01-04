import jwt_decode from "jwt-decode";

const secret = import.meta.env.VITE_SECRET;

export const extractUser = (token) => {
  if (!token) return null;
  try {
    return jwt_decode(token);
  } catch (err) {
    return null;
  }
};
