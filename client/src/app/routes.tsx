import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CatalogPage from "../pages/AboutPage/CatalogPage";
import AuthenticationPage from "../pages/AuthenticationPage/AuthenticationPage";
import AccountPage from "./../pages/AccountPage/AccountPage";
import AboutPage from "./../pages/CatalogPage/AboutPage";

export const useRoutes = (isAuthenticated: boolean) => {
     const defaultRoutes = (
          <>
               <Route path="/catalog" element={<CatalogPage />} />
               <Route path="/about" element={<AboutPage />} />
               <Route path="*" element={<Navigate replace to={"/catalog"} />} />
          </>
     );
     if (isAuthenticated) {
          return (
               <Routes>
                    <Route path="/account" element={<AccountPage />} />
                    {defaultRoutes}
               </Routes>
          );
     }
     return (
          <Routes>
               <Route path="/authentication" element={<AuthenticationPage />} />
               {defaultRoutes}
          </Routes>
     );
};
