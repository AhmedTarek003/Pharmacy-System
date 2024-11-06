import moment from "moment";
import Sort from "../components/ui/Sort";
import Table from "../components/ui/Table";
import { orders } from "../utils/dummyDate";
import { Link } from "react-router-dom";

const PharmacyStock = () => {
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
          className={`px-2 py-1 rounded-md text-sm bg-blue-200 text-blue-700`}
        >
          {value}
        </span>
      ),
    },
    {
      label: "actions",
      key: "actions",
      render: (_, row) => (
        <div className="flex items-center gap-1">
          <Link
            to={`/purshases/${row._id}`}
            className="bg-gray-200 text-gray-600 px-3 py-1 text-sm rounded-md"
          >
            Details
          </Link>
          <button className="bg-green-200 text-green-600 px-3 py-1 text-sm rounded-md">
            Add To List
          </button>
        </div>
      ),
    },
  ];
  const confirmedOrders = orders.filter(
    (order) => order.status === "confirmed"
  );
  return (
    <div>
      <div className="page-title">Pharmacy Stock</div>
      <div className="my-5 md:px-5 max-md:px-1">
        <Sort
          options={options}
          label="Sort Stock By "
          onChange={handleSelectChange}
        />
      </div>
      <Table columns={columns} data={confirmedOrders} />
    </div>
  );
};

export default PharmacyStock;
