export default interface AuthContextType {
  isAuthenticated: boolean;
  jwtToken: string | null;
  username: string | null;
  isAdmin: boolean; 
  loading: boolean;
  login: (data: { token: string; username: string }) => void;
  logout: () => void;
}
