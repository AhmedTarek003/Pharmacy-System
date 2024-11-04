import { Link } from "react-router-dom";

const Box = ({ title, number, color, link }) => {
  return (
    <Link
      to={link}
      style={{ backgroundColor: color }}
      className="min-w-72 min-h-[100px] flex flex-col justify-between p-3 items-center rounded-md shadow-lg text-white"
    >
      <div className="text-[22px] font-semibold">{title}</div>
      <div className="w-full h-[1px] bg-[#0000000c] my-2"></div>
      <div className="text-[20px] font-semibold">{number}</div>
    </Link>
  );
};

export default Box;
