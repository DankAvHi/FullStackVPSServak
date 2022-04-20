import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CatalogPage from "../pages/AboutPage/CatalogPage";

export const useRoutes = () => {
     return (
          <Routes>
               <Route path="/catalog" element={<CatalogPage />} />
               <Route path="*" element={<Navigate replace to={"/catalog"} />} />
          </Routes>
     );
};
