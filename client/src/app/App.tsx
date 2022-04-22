import React, { useEffect, useState } from "react";

import styles from "./App.module.css";
import Preloader from "../components/preloader/Preloader";
import ClosePreloader from "./../hooks/closePreloader";
import { useRoutes } from "./routes";
import { useAuth } from "./../hooks/auth.hook";
import { AuthContext } from "./../context/authContext";

function App() {
     const { isPreloaderOn } = ClosePreloader();

     const { token, login, logout, userID } = useAuth();
     const isAuthenticated = !!token;
     const routes = useRoutes(isAuthenticated);

     return (
          <AuthContext.Provider value={{ token, login, logout, userID, isAuthenticated }}>
               <div className={styles.App} id="App">
                    {isPreloaderOn ? <Preloader /> : null}
                    {routes}
               </div>
          </AuthContext.Provider>
     );
}

export default App;
