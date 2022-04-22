import { useCallback, useEffect, useState } from "react";

export const useAuth = () => {
     const storageName: string = "userData";
     const [token, setToken] = useState<string | null>(null);
     const [userID, setUserID] = useState<number | null>(null);

     const login = useCallback((jwtToken, id) => {
          setToken(jwtToken);
          setUserID(id);

          localStorage.setItem(storageName, JSON.stringify({ userID: id, token: jwtToken }));
     }, []);

     const logout = useCallback(() => {
          setToken(null);
          setUserID(null);

          localStorage.removeItem(storageName);
     }, []);

     useEffect(() => {
          const data = JSON.parse(String(localStorage.getItem(storageName)));

          if (data && data.token && data.userID) {
               login(data.token, data.userID);
          }
     }, [login]);

     return { login, logout, token, userID };
};
