import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/dashboard/dashboard";
import { Login } from "../pages/login/login";
import { FormRegister } from "../pages/register/register";

export const RoutesMain = () => (
  <Routes>
    <Route path="*" element={<Navigate to={"/login"} />} />
    <Route path="login" element={<Login />} />
    <Route path="register" element={<FormRegister />} />
    <Route path="dashboard" element={<Dashboard />} />
  </Routes>
);
