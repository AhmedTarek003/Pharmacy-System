import { useState } from "react";
import CheckBox from "../components/ui/CheckBox";
import Sort from "../components/ui/Sort";
import FormField from "../components/ui/FormField";
import { reports } from "../utils/dummyDate";
import moment from "moment";
import { Link } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";

const Reports = () => {
  const [isChecked, setIsChecked] = useState(false);
  const toggleChecked = () => {
    setIsChecked(!isChecked);
  };
  const [dates, setDates] = useState({
    startDate: "",
    endDate: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDates({
      ...dates,
      [name]: value,
    });
  };
  const options = [
    { key: "Orders", value: "Orders" },
    { key: "Weekly Revenue", value: "Weekly Revenue" },
    { key: "Best Selling Medicines", value: "Best Selling Medicines" },
  ];
  const handleSelectChange = (selectedOption) => {
    console.log("Selected:", selectedOption);
  };
  return (
    <div>
      <div className="page-title">Medicines List</div>
      <div className="my-5 flex items-center max-md:gap-3 justify-between md:px-5 max-md:px-1">
        <div>
          <CheckBox
            label={"Select Specific Date"}
            toggleChecked={toggleChecked}
            checked={isChecked}
          />
          {isChecked && (
            <div className="flex items-center md:gap-3 max-md:flex-col mt-1">
              <FormField
                label={"startDate"}
                type={"date"}
                name={"startDate"}
                value={dates.startDate}
                onChange={handleChange}
              />
              <FormField
                label={"endDate"}
                type={"date"}
                name={"endDate"}
                value={dates.endDate}
                onChange={handleChange}
              />
            </div>
          )}
        </div>
        <Sort
          options={options}
          label="Sort Reports By "
          onChange={handleSelectChange}
        />
      </div>
      <div className="flex justify-center items-center gap-5 flex-wrap mt-10">
        {reports?.map((report) => (
          <Link
            to={`/reports/${report?._id}`}
            key={report?._id}
            className="relative max-md:w-fit w-44 h-48 bg-white border border-gray-300 rounded-lg shadow-lg py-4 px-1
            cursor-pointer hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            <div
              className="absolute top-0 right-0 w-10 h-10 bg-blue-500 rounded-br-lg transform
            rotate-45 translate-x-2 translate-y-2"
            ></div>
            <div className="flex justify-center items-center text-blue-500 text-4xl">
              <FaFilePdf />
            </div>
            <div className="text-xs text-center mt-3">
              <h2 className="text-[16px] whitespace-nowrap text-sky-600 font-semibold">
                {report?.reportType}
              </h2>
              <div className="mt-4 text-left ml-2">
                <div className="text-sm whitespace-nowrap">
                  start week :{" "}
                  <span className="text-red-400 font-semibold">
                    {moment(report?.weekStartDate).format("YYYY-MM-DD")}
                  </span>
                </div>
                <div className="text-sm whitespace-nowrap">
                  end week :{" "}
                  <span className="text-red-400 font-semibold">
                    {moment(report?.weekEndDate).format("YYYY-MM-DD")}
                  </span>
                </div>
              </div>
              <div className="text-[15px] whitespace-nowrap mt-5">
                created :{" "}
                <span className="text-[var(--secondery-color)] font-semibold">
                  {moment(report?.createdAt).format("YYYY-MM-DD")}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Reports;
