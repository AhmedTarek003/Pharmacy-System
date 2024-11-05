import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Home = () => {
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
