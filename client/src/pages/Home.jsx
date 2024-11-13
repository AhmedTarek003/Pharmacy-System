import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Sidebar from "../components/Sidebar";
import { useEffect } from "react";

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    localStorage.setItem("path", location.pathname);
  }, [location]);
  return (
    <div className="md:flex md:gap-1">
      <Sidebar />
      <div className="md:flex-[10] md:overflow-auto h-screen">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
