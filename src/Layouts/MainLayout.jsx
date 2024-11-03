import React from "react";
import { Toaster } from 'react-hot-toast';
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

const MainLayout = () => {
  return (
    <div>
       <Toaster />
      {/* navbar */}
      <div className="h-16">
        <NavBar></NavBar>
      </div>
      <div className="min-h-[calc(100vh-232px)] py-12 container mx-auto">
        {/* dynamic */}
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
