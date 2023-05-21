import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protect = () => {
  const auth = JSON.parse(localStorage.getItem("ews"));
  console.log(auth);
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default Protect;
