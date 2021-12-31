export const register = async ({ name, username, email, password }) => {
  const user = {
    name,
    username,
    email,
    password,
  };
  return Promise.resolve(user);
};
