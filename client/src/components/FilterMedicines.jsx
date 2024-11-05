import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FilterMedicines = ({ activeFilter, setActiveFilter }) => {
  const filterOptions = ["all", "available", "expired"];
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const filter = queryParams.get("medicines") || "all";
    setActiveFilter(filter);

    if (!queryParams.has("medicines") || !filterOptions.includes(filter)) {
      queryParams.set("medicines", "all");
      navigate(`?${queryParams.toString()}`, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search, navigate]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    const newQueryParams = new URLSearchParams(location.search);
    newQueryParams.set("medicines", filter);
    navigate(`?${newQueryParams.toString()}`, { replace: true });
  };

  return (
    <div className="flex justify-center items-center mt-5">
      {filterOptions.map((filter, idx) => (
        <button
          key={idx}
          className={`${
            activeFilter === filter
              ? "bg-blue-500 text-white"
              : "bg-white text-black hover:bg-blue-500 hover:text-white"
          } px-2 py-[3px] ${
            idx === 0 && "rounded-tl-md rounded-bl-md border-r"
          } ${
            idx === filterOptions.length - 1 &&
            "rounded-tr-md rounded-br-md border-l"
          }`}
          onClick={() => handleFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterMedicines;

// <div className="flex justify-center items-center mt-5">
// <button
//   className={`${
//     activeFilter === "All"
//       ? "bg-blue-500 text-white"
//       : "bg-white text-black hover:bg-blue-500 hover:text-white"
//   } px-2 py-[3px] rounded-tl-md
// rounded-bl-md border-r `}
//   onClick={() => handleFilterChange("All")}
// >
//   All
// </button>
//   <button
//     className={`${
//       activeFilter === "Available"
//         ? "bg-blue-500 text-white"
//         : "bg-white text-black hover:bg-blue-500 hover:text-white"
//     } px-2 py-[3px]`}
//     onClick={() => handleFilterChange("Available")}
//   >
//     Available
//   </button>
//   <button
//     className={`${
//       activeFilter === "Expired"
//         ? "bg-blue-500 text-white"
//         : "bg-white text-black hover:bg-blue-500 hover:text-white"
//     } px-2 py-[3px] rounded-tr-md
//   rounded-br-md border-l `}
//     onClick={() => handleFilterChange("Expired")}
//   >
//     Expired
//   </button>
// </div>;
