import { useState } from "react";
import SearchInput from "../../components/ui/SearchInput";
import Table from "../../components/ui/Table";
import { deleteAlert } from "../../utils/deleteAlert";
import { suppliers } from "../../utils/dummyDate";
import { Link } from "react-router-dom";
import CreateBottom from "../../components/ui/CreateBottom";

const Suppliers = () => {
  const [search, setSearch] = useState("");
  const columns = [
    { label: "name", key: "userName" },
    { label: "email", key: "email" },
    { label: "phone number", key: "phoneNumber" },
    { label: "address", key: "address" },
    {
      label: "Actions",
      key: "actions",
      render: (_, row) => (
        <div className="flex items-center gap-1">
          <Link
            to={`/suppliers/${row._id}`}
            className="bg-blue-200 text-blue-600 px-3 py-1 text-sm rounded-md"
          >
            Edit
          </Link>
          <div
            className="bg-red-200 text-red-600 px-3 py-1 text-sm rounded-md cursor-pointer"
            onClick={() => deleteAlert()}
          >
            delete
          </div>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="page-title">Suppliers</div>
      <CreateBottom
        text={"Add New Supplier"}
        link={"/suppliers/addnewsupplier"}
      />
      <div className="my-5 max-md:gap-3 md:px-5 max-md:px-1">
        <SearchInput search={search} setSearch={setSearch} />
      </div>
      <Table columns={columns} data={suppliers} />
    </div>
  );
};

export default Suppliers;
