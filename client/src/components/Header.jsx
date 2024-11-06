import { useState } from "react";
import {
  MdKeyboardArrowDown,
  MdOutlineLogout,
  MdOutlinePerson,
} from "react-icons/md";
import { RiNotification2Line, RiSearch2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [dropdown, setDropdown] = useState(false);
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
      </div>
      <div className="flex items-center gap-3 relative">
        <div className="relative cursor-pointer">
          <RiNotification2Line size={23} color="var(--gray-color)" />
          <span className="block absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500"></span>
        </div>
        <div>
          <img
            src="https://avatar.iran.liara.run/public"
            alt="profile picture"
            width={38}
            className="max-md:hidden"
          />
        </div>
        <div className="flex flex-col items-center md:mx-2 p-0">
          <span className="text-[15px] max-md:text-[13px] font-semibold">
            Ahmed Tarek
          </span>
          <span className="text-[var(--gray-color)] text-sm max-md:text-[12px] font-semibold">
            Manger
          </span>
        </div>
        <MdKeyboardArrowDown
          size={23}
          className={`cursor-pointer ${
            dropdown ? "rotate-180" : "rotate-0"
          } transition-all`}
          onClick={() => setDropdown(!dropdown)}
        />
        <div
          className={`absolute bg-white w-full pb-3 rounded-br-md rounded-bl-md h-fit shadow-lg right-0 ${
            dropdown ? "md:top-[48px] max-md:top-[63px]" : "-top-96"
          } transition-all`}
        >
          <ul className="mt-5 ml-5">
            <Link
              to={`/users/1212121212121`}
              className="flex items-center gap-2 text-lg font-semibold hover:text-gray-700"
            >
              <MdOutlinePerson size={22} /> Profile
            </Link>
            <div className="border-t pt-2 mt-3">
              <div
                className="w-fit flex items-center gap-2 text-lg font-semibold
              text-red-600 hover:text-red-800 cursor-pointer"
              >
                <MdOutlineLogout size={22} /> Logout
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
