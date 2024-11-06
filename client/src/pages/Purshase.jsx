import { useEffect, useState } from "react";
import Sort from "../components/ui/Sort";
import Table from "../components/ui/Table";
import { orders } from "../utils/dummyDate";
import moment from "moment";
import { Link } from "react-router-dom";
import FilterMedicines from "../components/FilterMedicines";

const Purshase = () => {
  const [data, setData] = useState(orders);
  const filterOptions = ["all", "pending", "confirmed", "received", "canceled"];
  const [activeFilter, setActiveFilter] = useState("all");
  useEffect(() => {
    if (activeFilter === "pending") {
      setData(() => orders.filter((order) => order.status === "pending"));
    } else if (activeFilter === "confirmed") {
      setData(() => orders.filter((order) => order.status === "confirmed"));
    } else if (activeFilter === "received") {
      setData(() => orders.filter((order) => order.status === "received"));
    } else if (activeFilter === "canceled") {
      setData(() => orders.filter((order) => order.status === "canceled"));
    } else {
      setData(orders);
    }
  }, [activeFilter]);

  const options = [
    { key: "First Added", value: "createdAt" },
    { key: "Last Added", value: "-createdAt" },
  ];
  const handleSelectChange = (selectedOption) => {
    console.log("Selected:", selectedOption);
  };

  const columns = [
    { label: "order", key: "_id" },
    {
      label: "supplier",
      key: "supplier",
      render: (value) => <span>{value.userName}</span>,
    },
    {
      label: "Expected Date",
      key: "expectedDate",
      render: (value) => moment(value).format("YYYY-MM-DD"),
    },
    { label: "Total Amount", key: "totalAmount" },
    {
      label: "status",
      key: "status",
      render: (value) => (
        <span
          className={`px-2 py-1 rounded-md text-sm ${
            (value === "pending" && "bg-yellow-200 text-yellow-600") ||
            (value === "received" && "bg-green-200 text-green-700") ||
            (value === "confirmed" && "bg-blue-200 text-blue-700") ||
            (value === "canceled" && "bg-red-200 text-red-600")
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      label: "actions",
      key: "actions",
      render: (_, row) => (
        <div>
          <Link
            to={`/purshases/${row._id}`}
            className="bg-gray-200 text-gray-600 px-3 py-1 text-sm rounded-md"
          >
            Details
          </Link>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="page-title">Purshases</div>
      <Link
        to={"/purshases/makeorder"}
        className=" block bg-[var(--background-color)] hover:bg-[var(--secondery-color)]
      w-fit px-6 py-3 ml-6 rounded-lg text-white uppercase tracking-wider my-5 shadow-lg"
      >
        Make Order
      </Link>
      <FilterMedicines
        queryName={"orders"}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        filterOptions={filterOptions}
      />
      <div className="my-5 md:px-5 max-md:px-1">
        <Sort
          options={options}
          label="Sort Purshases By "
          onChange={handleSelectChange}
        />
      </div>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default Purshase;
