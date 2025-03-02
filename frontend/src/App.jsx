import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Admin from "./pages/Admin.jsx";
import Registration from "./pages/Registration.jsx";
import Login from "./pages/Login.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="profile" element={<Profile />}/>
        <Route path="admin" element={<Admin />}/>
        <Route path="registration" element={<Registration />}/>
        <Route path="login" element={<Login />}/>
        </Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;
