import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiNotification2Line, RiSearch2Line } from "react-icons/ri";
import SearchItems from "./../SearchItems";
import Notifications from "./Notifications";
import More from "./More";
import { useSelector } from "react-redux";
import useGetUser from "../../hooks/user/useGetUser";
import useGetAllMedicines from "../../hooks/medicine/useGetAllMedicines";
import useGetAllNotifications from "../../hooks/notification/useGetAllNotifications";

const Header = () => {
  const [search, setSearch] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);

  useGetAllMedicines(search);
  const { medicines } = useSelector((state) => state.medicine);
  const inStockMedicines = medicines?.filter((medicine) => medicine?.stock > 0);

  useGetUser();
  const { user } = useSelector((state) => state.user);
  useGetAllNotifications();
  const { notifications } = useSelector((state) => state.notification);
  const unReadedNotifications = notifications.filter((n) => !n.read);

  return (
    <div
      className="bg-white pb-[5px] pt-[3px] mt-[5px] px-10 rounded-lg
    flex items-center justify-between select-none"
    >
      <div className="flex items-center gap-1 md:ml-8 relative">
        <RiSearch2Line
          className={`text-gray-400 absolute ${
            isFocus ? "right-4" : "right-48"
          } transition-all max-md:hidden`}
        />
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setIsFocus(true)}
          onBlur={() => {
            setIsFocus(false), setSearch("");
          }}
          className="px-2 py-[5px] rounded-md w-[95%] focus:outline-gray-200 focus:pr-9"
        />
        {search.trim() !== "" && <SearchItems medicines={inStockMedicines} />}
      </div>
      <div className="flex items-center gap-3 relative">
        <div
          className="relative cursor-pointer"
          onClick={() => setOpenNotifications(!openNotifications)}
        >
          <RiNotification2Line size={23} color="var(--gray-color)" />
          {unReadedNotifications?.length > 0 && (
            <span className="block absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500"></span>
          )}
        </div>
        <div className="flex flex-col items-center md:mx-2 p-0">
          <span className="text-[15px] max-md:text-[13px] font-semibold capitalize">
            {user?.userName}
          </span>
          <span className="text-[var(--gray-color)] text-sm max-md:text-[12px] font-semibold capitalize">
            {user?.role}
          </span>
        </div>
        <MdKeyboardArrowDown
          size={23}
          className={`cursor-pointer ${
            dropdown ? "rotate-180" : "rotate-0"
          } transition-all`}
          onClick={() => setDropdown(!dropdown)}
        />
        <More dropdown={dropdown} />
        {openNotifications && (
          <Notifications setOpenNotifications={setOpenNotifications} />
        )}
      </div>
    </div>
  );
};

export default Header;
