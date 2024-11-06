import { useState } from "react";
import CheckBox from "../components/ui/CheckBox";
import Sort from "../components/ui/Sort";
import FormField from "../components/ui/FormField";
import { reports } from "../utils/dummyDate";
import moment from "moment";
import { Link } from "react-router-dom";

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
            className="box-shadow rounded-md"
          >
            <div className="file-background text-center md:w-40 max-md:w-32 md:h-48 max-md:h-36 p-1 clip-path relative rounded-md cursor-pointer">
              <div className="w-10 h-10 bg-[#ccc] absolute -right-2 rotate-90 shadow-md"></div>
              <div className="pt-10 max-md:pt-3">
                <div
                  className="whitespace-nowrap text-[var(--sky-color)] font-semibold"
                  title={report?.reportType}
                >
                  {report?.reportType}
                </div>
                <div className="md:text-sm max-md:text-[12px] mt-3 max-md:mt-1 ml-2">
                  From :{" "}
                  <span className="text-red-400">
                    {moment(report?.weekStartDate).format("YYYY-MM-DD")}
                  </span>{" "}
                  <br />
                  To :{" "}
                  <span className="text-red-400">
                    {moment(report?.weekEndDate).format("YYYY-MM-DD")}
                  </span>
                </div>
                <div className="mt-5 md:text-sm max-md:text-[12px]">
                  Created :{" "}
                  <span className="font-semibold text-[var(--secondery-color)]">
                    {moment(report?.createdAt).format("YYYY-MM-DD")}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Reports;
