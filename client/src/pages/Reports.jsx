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
    <div className="px-4 py-6 bg-gray-50 min-h-screen">
      <div className="text-2xl font-semibold text-gray-800 mb-6">Reports</div>
      <div className="my-5 md:flex items-center justify-between md:px-5 max-md:px-1">
        <div className="max-md:mb-3">
          <CheckBox
            label={"Select Specific Date"}
            toggleChecked={toggleChecked}
            checked={isChecked}
          />
          {isChecked && (
            <div className="flex items-center gap-3 mt-2">
              <FormField
                label={"Start Date"}
                type={"date"}
                name={"startDate"}
                value={dates.startDate}
                onChange={handleChange}
              />
              <FormField
                label={"End Date"}
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
          label="Sort Reports By"
          onChange={handleSelectChange}
        />
      </div>
      <div className="flex justify-center items-center gap-5 flex-wrap mt-10">
        {reports?.map((report) => (
          <Link
            to={`/reports/${report?._id}`}
            key={report?._id}
            className="relative w-60 h-72 bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-12 h-12 bg-blue-500 rounded-br-lg transform rotate-45 translate-x-3 translate-y-3"></div>
            <div className="flex justify-center items-center text-blue-500 text-5xl py-6">
              <FaFilePdf />
            </div>
            <div className="px-4 pb-4 text-center">
              <h2 className="text-lg font-semibold text-sky-600 mb-2">
                {report?.reportType}
              </h2>
              <div className="text-sm text-gray-600">
                <div>
                  <span className="font-semibold text-red-500">
                    Start Week:
                  </span>{" "}
                  {moment(report?.weekStartDate).format("YYYY-MM-DD")}
                </div>
                <div>
                  <span className="font-semibold text-red-500">End Week:</span>{" "}
                  {moment(report?.weekEndDate).format("YYYY-MM-DD")}
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                <span className="font-semibold text-secondary">
                  Created: {moment(report?.createdAt).format("YYYY-MM-DD")}
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
