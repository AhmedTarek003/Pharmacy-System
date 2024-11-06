import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Sort = ({ options, label, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0].key);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelected(option.key);
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-between md:w-full rounded-md border
          border-gray-300 shadow-sm md:px-4 max-md:px-1 py-2 bg-white text-sm font-medium
          text-gray-700 hover:bg-gray-50 focus:outline-none
          focus:ring-2 focus:ring-offset-2 focus:ring-[#ddd]"
          aria-expanded={isOpen}
        >
          {label}: {selected}
          <MdKeyboardArrowDown
            size={23}
            className={`${isOpen ? "rotate-180" : "rotate-0"} transition-all`}
          />
        </button>
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-full rounded-md bg-white shadow-lg">
          <div className="rounded-md bg-white shadow-xs">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {option.key}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sort;
