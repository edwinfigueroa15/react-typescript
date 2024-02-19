import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";

export const AppRouter: React.FC<{}> = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}