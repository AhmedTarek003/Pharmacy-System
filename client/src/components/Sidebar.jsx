import { Link, NavLink } from "react-router-dom";
import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { FaChartSimple, FaFileInvoice } from "react-icons/fa6";
import { GiFiles, GiMedicines } from "react-icons/gi";
import { MdOutlineMenu, MdOutlinePeople } from "react-icons/md";
import { useEffect, useState } from "react";
import Overlay from "./Overlay";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    if (openMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  });
  return (
    <>
      <div className="md:hidden">
        <MdOutlineMenu
          size={30}
          className={`absolute top-4 left-1 z-[99] ${
            openMenu ? "rotate-90" : "rotate-0"
          } transition-all`}
          onClick={() => setOpenMenu(!openMenu)}
        />
        <div
          className={`absolute top-0 ${
            openMenu ? "left-0" : "-left-96"
          } z-[98] w-56 h-screen shadow-lg bg-white pt-6`}
        >
          <h1 className="text-center mt-5 h1 text-[var(--dark-color)] border-b-2 pb-3 shadow-md">
            Elshfa Pharmacy
          </h1>
          <Link
            to={"/invocies/create_invoice"}
            className="block text-center bg-[var(--background-color)] hover:bg-[var(--secondery-color)]
      text-white p-[9px] mt-3 text-[20px] rounded-md shadow-md transition-all"
          >
            create invoice
          </Link>
          <div className="bg-[#ccc] shadow-md mt-5 w-full h-[1px]"></div>
          <ul className="mt-3 p-3">
            <NavLink
              onClick={() => setOpenMenu(false)}
              to={"/dashboard"}
              className="flex items-center gap-2 p-2 rounded-md text-lg font-semibold 
          hover:bg-[var(--sky-color)] hover:text-white
            transition-all"
            >
              <AiOutlineDashboard /> <span>Dashboard</span>
            </NavLink>
            <NavLink
              onClick={() => setOpenMenu(false)}
              to={"/medicineslist"}
              className="flex items-center gap-2 mt-2 p-2 rounded-md text-lg font-semibold 
          hover:bg-[var(--sky-color)] hover:text-white
            transition-all"
            >
              <GiMedicines /> <span>Medicines List</span>
            </NavLink>
            <NavLink
              onClick={() => setOpenMenu(false)}
              to={"/purshases"}
              className="flex items-center gap-2 mt-2 p-2 rounded-md text-lg font-semibold 
          hover:bg-[var(--sky-color)] hover:text-white
            transition-all"
            >
              <AiOutlineShoppingCart /> <span>Purshases</span>
            </NavLink>
            <NavLink
              onClick={() => setOpenMenu(false)}
              to={"/pharmacystock"}
              className="flex items-center gap-2 mt-2 p-2 rounded-md text-lg font-semibold 
          hover:bg-[var(--sky-color)] hover:text-white
            transition-all"
            >
              <FaChartSimple /> <span>Pharmacy Stock</span>
            </NavLink>
            <NavLink
              onClick={() => setOpenMenu(false)}
              to={"/suppliers"}
              className="flex items-center gap-2 mt-2 p-2 rounded-md text-lg font-semibold 
          hover:bg-[var(--sky-color)] hover:text-white
            transition-all"
            >
              <MdOutlinePeople /> <span>Suppliers</span>
            </NavLink>
            <NavLink
              onClick={() => setOpenMenu(false)}
              to={"/invoices"}
              className="flex items-center gap-2 mt-2 p-2 rounded-md text-lg font-semibold 
          hover:bg-[var(--sky-color)] hover:text-white
            transition-all"
            >
              <FaFileInvoice /> <span>Invoices</span>
            </NavLink>
            <NavLink
              onClick={() => setOpenMenu(false)}
              to={"/reports"}
              className="flex items-center gap-2 mt-2 p-2 rounded-md text-lg font-semibold 
          hover:bg-[var(--sky-color)] hover:text-white
            transition-all"
            >
              <GiFiles /> <span>Reports</span>
            </NavLink>
          </ul>
        </div>
      </div>
      <div className="flex-[2] h-screen shadow-lg bg-white max-md:hidden">
        <h1 className="text-center mt-5 h1 text-[var(--dark-color)] border-b-2 pb-3 shadow-md">
          Elshfa Pharmacy
        </h1>
        <Link
          to={"/invocies/create_invoice"}
          className="block text-center bg-[var(--background-color)] hover:bg-[var(--secondery-color)]
      text-white p-[9px] mt-3 text-[20px] rounded-md shadow-md transition-all"
        >
          create invoice
        </Link>
        <div className="bg-[#ccc] shadow-md mt-5 w-full h-[1px]"></div>
        <ul className="mt-3 p-3">
          <NavLink
            to={"/dashboard"}
            className="flex items-center gap-2 p-2 rounded-md text-lg font-semibold 
          hover:bg-[var(--sky-color)] hover:text-white
            transition-all"
          >
            <AiOutlineDashboard /> <span>Dashboard</span>
          </NavLink>
          <NavLink
            to={"/medicineslist"}
            className="flex items-center gap-2 mt-2 p-2 rounded-md text-lg font-semibold 
          hover:bg-[var(--sky-color)] hover:text-white
            transition-all"
          >
            <GiMedicines /> <span>Medicines List</span>
          </NavLink>
          <NavLink
            to={"/purshases"}
            className="flex items-center gap-2 mt-2 p-2 rounded-md text-lg font-semibold 
          hover:bg-[var(--sky-color)] hover:text-white
            transition-all"
          >
            <AiOutlineShoppingCart /> <span>Purshases</span>
          </NavLink>
          <NavLink
            to={"/pharmacystock"}
            className="flex items-center gap-2 mt-2 p-2 rounded-md text-lg font-semibold 
          hover:bg-[var(--sky-color)] hover:text-white
            transition-all"
          >
            <FaChartSimple /> <span>Pharmacy Stock</span>
          </NavLink>
          <NavLink
            to={"/suppliers"}
            className="flex items-center gap-2 mt-2 p-2 rounded-md text-lg font-semibold 
          hover:bg-[var(--sky-color)] hover:text-white
            transition-all"
          >
            <MdOutlinePeople /> <span>Suppliers</span>
          </NavLink>
          <NavLink
            to={"/invoices"}
            className="flex items-center gap-2 mt-2 p-2 rounded-md text-lg font-semibold 
          hover:bg-[var(--sky-color)] hover:text-white
            transition-all"
          >
            <FaFileInvoice /> <span>Invoices</span>
          </NavLink>
          <NavLink
            to={"/reports"}
            className="flex items-center gap-2 mt-2 p-2 rounded-md text-lg font-semibold 
          hover:bg-[var(--sky-color)] hover:text-white
            transition-all"
          >
            <GiFiles /> <span>Reports</span>
          </NavLink>
        </ul>
      </div>
      {openMenu && <Overlay />}
    </>
  );
};

export default Sidebar;
