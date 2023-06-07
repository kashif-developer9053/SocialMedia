import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Topbar from "./components/topbar/Topbar";
import ProfileSetting from "./pages/setting/setting";

function App() {
  return (

   
    

    <BrowserRouter>
    
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/timeline" element={<Home/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/setting" element={<ProfileSetting/>} />



      

    </Routes>
    
    
    </BrowserRouter>

  );
}

export default App;
