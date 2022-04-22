import { createContext } from "react";

type authContextType = {
     login: (jwtToken: any, id: any) => void;
     logout: () => void;
     token: string | null;
     userID: number | null;
     isAuthenticated: boolean;
};

const initialContext: authContextType = {
     login: () => {},
     logout: () => {},
     token: null,
     userID: null,
     isAuthenticated: false,
};

export const AuthContext: React.Context<authContextType> = createContext(initialContext);
