import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { DashboardPage } from "./pages/Dashboard";

export const AppRouter: React.FC<{}> = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
    )
}