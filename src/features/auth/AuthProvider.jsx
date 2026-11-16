import { useMemo, useState } from 'react';
import { AuthContext } from './AuthContext';

const STORAGE_KEY = 'hotel-prince-user';

const readStoredUser = () => {
  const storedUser = localStorage.getItem(STORAGE_KEY);
  return storedUser ? JSON.parse(storedUser) : null;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(readStoredUser);

  const login = (nextUser) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser));
    setUser(nextUser);
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  };

  const value = useMemo(() => ({ user, login, logout }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
