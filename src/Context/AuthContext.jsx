import React, { useCallback, useState } from "react";

const AuthContext = React.createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const SignIn = useCallback(({ email, password }) => {
    if (email && password) {
      setUser({ email, password });
    }
  }, []);

  const SignOut = useCallback(() => {
    setUser(null);
  }, []);

  const value = {
    user,
    SignIn,
    SignOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider, AuthContext };
