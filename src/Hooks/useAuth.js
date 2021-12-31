import { AuthContext } from "../Context/AuthContext";
import React from "react";

export function useAuth() {
  return React.useContext(AuthContext);
}
