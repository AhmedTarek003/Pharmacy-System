import { MdCheck } from "react-icons/md";

const CheckBox = ({ label, toggleChecked, checked }) => {
  return (
    <div className="flex items-center">
      <input type="checkbox" id="modern-checkbox" className="hidden peer" />
      <label
        htmlFor="modern-checkbox"
        className="flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-md cursor-pointer
        peer-checked:bg-blue-500 peer-checked:border-transparent transition-colors duration-200 ease-in-out"
        onClick={() => toggleChecked()}
      >
        {checked && <MdCheck className="w-4 h-4 text-white" />}
      </label>
      <span className="ml-2 text-gray-700">{label}</span>
    </div>
  );
};

export default CheckBox;
