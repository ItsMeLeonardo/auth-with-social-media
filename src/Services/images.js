const BASE_URL = "https://api.unsplash.com";
const apiKey = import.meta.env.VITE_API_KEY_UNSPLASH;

export const searchImage = async ({ query = "nature", page = 1 } = {}) => {
  const url = `${BASE_URL}/search/photos?page=${page}&query=${query}&client_id=${apiKey}`;
  const response = await fetch(url);
  return await response.json();
};
