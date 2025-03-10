import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Admin from "./pages/Admin.jsx";
import Registration from "./pages/Registration.jsx";
import Login from "./pages/Login.jsx";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext.jsx";
const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="registration" element={<Registration />} />
            <Route path="login" element={<Login />} />
            {user && user.role === "admin" && (
              <Route path="admin" element={<Admin />} />
            )}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
