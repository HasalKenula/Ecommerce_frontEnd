import { createContext, useContext, useEffect, useState } from "react";
import AuthContextType from "../type/AuthContextType";
import AuthProviderPropsType from "../type/AuthProviderPropsType";


export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  jwtToken: null,
  username: null,
  isAdmin: false, 
  loading: true,
  login: () => {},
  logout: () => {}
});


export function AuthProvider({ children }: AuthProviderPropsType) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [jwtToken, setJwtToken] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const isAdmin = username === "admin"; 

  function login(data: { token: string; username: string }) {
    setIsAuthenticated(true);
    setJwtToken(data.token);
    setUsername(data.username);
    localStorage.setItem("token", data.token);
    localStorage.setItem("username", data.username);
  }

  function logout() {
    setIsAuthenticated(false);
    setJwtToken(null);
    setUsername(null);
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUsername = localStorage.getItem("username");

    if (token && savedUsername) {
      setIsAuthenticated(true);
      setJwtToken(token);
      setUsername(savedUsername);
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        jwtToken,
        username,
        isAdmin, 
        loading,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}


export function useAuth() {
  return useContext(AuthContext);
}
