import React, { createContext, useState, useContext, ReactNode } from "react";

import Admin from "../api/AdminFakeAPI";

interface AuthContextType {
  isAdmin: boolean;
  handleLogin: (adminName: string, password: string) => boolean;
  handleLogout: () => void;
}

const defaultContextValue: AuthContextType = {
  isAdmin: false,
  handleLogin: () => false,
  handleLogout: () => {},
};

export const AuthContext = createContext<AuthContextType>(defaultContextValue);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const handleLogin = (adminName: string, password: string): boolean => {
    if (adminName === Admin.adminName && password === Admin.passWord) {
      setIsAdmin(true);
      return true;
    }

    return false;
  };

  const handleLogout = () => {
    setIsAdmin(false);
  };

  const contextValue: AuthContextType = {
    isAdmin,
    handleLogin,
    handleLogout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
