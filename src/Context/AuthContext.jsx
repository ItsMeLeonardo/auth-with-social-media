import React, { useCallback, useState } from "react";

const AuthContext = React.createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const signIn = useCallback(({ email, password }) => {
    if (email && password) {
      setUser({ email, password });
    }
  }, []);

  const signOut = useCallback(() => {
    setUser(null);
  }, []);

  const value = {
    user,
    signIn,
    signOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider, AuthContext };
