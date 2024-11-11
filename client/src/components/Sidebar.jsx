import { Link, NavLink } from "react-router-dom";
import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { FaChartSimple, FaFileInvoice } from "react-icons/fa6";
import { GiFiles, GiMedicines } from "react-icons/gi";
import { MdOutlineMenu, MdOutlinePeople } from "react-icons/md";
import { useEffect, useState } from "react";
import Overlay from "./Overlay";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (openMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [openMenu]);

  const menuLinks = [
    { to: "/dashboard", icon: <AiOutlineDashboard />, label: "Dashboard" },
    { to: "/medicineslist", icon: <GiMedicines />, label: "Medicines List" },
    { to: "/purshases", icon: <AiOutlineShoppingCart />, label: "Purshases" },
    { to: "/pharmacystock", icon: <FaChartSimple />, label: "Pharmacy Stock" },
    { to: "/suppliers", icon: <MdOutlinePeople />, label: "Suppliers" },
    { to: "/invoices", icon: <FaFileInvoice />, label: "Invoices" },
    { to: "/reports", icon: <GiFiles />, label: "Reports" },
  ];

  return (
    <>
      {isMobile ? (
        <div>
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
            } z-[98] w-56 h-screen shadow-lg bg-white pt-6 transition-all`}
          >
            <h1 className="text-center mt-5 h1 text-[var(--dark-color)] border-b-2 pb-3 shadow-md">
              Elshfa Pharmacy
            </h1>
            <Link
              to={"/invoices/create_invoice"}
              className="block text-center bg-[var(--background-color)] hover:bg-[var(--secondery-color)] text-white p-[9px] mt-3 text-[20px] rounded-md shadow-md transition-all"
              onClick={() => setOpenMenu(false)}
            >
              create invoice
            </Link>
            <div className="bg-[#ccc] shadow-md mt-5 w-full h-[1px]"></div>
            <ul className="mt-3 p-3">
              {menuLinks.map(({ to, icon, label }) => (
                <NavLink
                  key={to}
                  onClick={() => setOpenMenu(false)}
                  to={to}
                  className="flex items-center gap-2 mt-2 p-2 rounded-md text-lg font-semibold hover:bg-[var(--sky-color)] hover:text-white transition-all"
                >
                  {icon} <span>{label}</span>
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex-[2] h-screen shadow-lg bg-white">
          <h1 className="text-center mt-5 h1 text-[var(--dark-color)] border-b-2 pb-3 shadow-md">
            Elshfa Pharmacy
          </h1>
          <Link
            to={"/invoices/create_invoice"}
            className="block text-center bg-[var(--background-color)] hover:bg-[var(--secondery-color)] text-white p-[9px] mt-3 text-[20px] rounded-md shadow-md transition-all"
          >
            create invoice
          </Link>
          <div className="bg-[#ccc] shadow-md mt-5 w-full h-[1px]"></div>
          <ul className="mt-3 p-3">
            {menuLinks.map(({ to, icon, label }) => (
              <NavLink
                key={to}
                to={to}
                className="flex items-center gap-2 mt-2 p-2 rounded-md text-lg font-semibold hover:bg-[var(--sky-color)] hover:text-white transition-all"
              >
                {icon} <span>{label}</span>
              </NavLink>
            ))}
          </ul>
        </div>
      )}
      {openMenu && <Overlay />}
    </>
  );
};

export default Sidebar;
