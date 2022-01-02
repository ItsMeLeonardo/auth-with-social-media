import React, { useCallback, useState } from "react";
import { login, register } from "../Services/user";

const AuthContext = React.createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  /**
   * @description this function is used to login the user
   * @param {object} user with password and email
   * @param {function} callback function to be called after login
   */
  const signUp = useCallback(({ email, password }, callback) => {
    setLoading(true);
    login({ email, password })
      .then((data) => {
        setUser(data);
        callback();
      })
      .catch((err) => {
        setError(err.message);
        setTimeout(() => setError(null), 4000);
      })
      .finally(() => setLoading(false));
  }, []);

  /**
   * @description this function is for closing the session of user
   * @type {(function(): void)|*}
   */
  const signOut = useCallback(() => {
    setUser(null);
  }, []);

  /**
   * @description this function is used to register a new user
   * @param {object} user with name - username - password - email
   * @param {function} callback function to be called after register
   */
  const signIn = useCallback(({ user }, callback) => {
    setLoading(true);
    register({ user })
      .then((data) => {
        setUser(data);
        callback();
      })
      .catch((err) => {
        setError(err.message);
        setTimeout(() => setError(null), 4000);
      })
      .finally(() => setLoading(false));
  }, []);

  const value = {
    user,
    signIn,
    signOut,
    signUp,
    loading,
    error,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider, AuthContext };
