import { MdOutlineLogout, MdOutlinePerson } from "react-icons/md";
import { Link } from "react-router-dom";

const More = ({ dropdown }) => {
  return (
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
  );
};

export default More;
