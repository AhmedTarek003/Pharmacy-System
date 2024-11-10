import moment from "moment";
import Sort from "../../components/ui/Sort";
import Table from "../../components/ui/Table";
import { invoices } from "../../utils/dummyDate";
import { Link } from "react-router-dom";

const Invoices = () => {
  const options = [
    { key: "First Added", value: "createdAt" },
    { key: "Last Added", value: "-createdAt" },
  ];
  const handleSelectChange = (selectedOption) => {
    console.log("Selected:", selectedOption);
  };
  const columns = [
    { label: "invoice", key: "_id" },
    {
      label: "total amount",
      key: "totalAmount",
    },
    {
      label: "Date",
      key: "createdAt",
      render: (value) => moment(value).format("YYYY-MM-DD"),
    },
    {
      label: "actions",
      key: "actions",
      render: (_, row) => (
        <div>
          <Link
            to={`/invoices/${row._id}`}
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
      <div className="page-title">Invoices</div>
      <div className="my-5 md:px-5 max-md:px-1">
        <Sort
          options={options}
          label="Sort Invoices By "
          onChange={handleSelectChange}
        />
      </div>
      <Table columns={columns} data={invoices} />
    </div>
  );
};

export default Invoices;
