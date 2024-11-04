import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="flex md:gap-1">
      <Sidebar />
      <div className="flex-[10] overflow-auto h-screen">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
