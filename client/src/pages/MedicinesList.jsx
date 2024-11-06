import { useEffect, useState } from "react";
import Table from "../components/ui/Table";
import { medicines } from "../utils/dummyDate";
import moment from "moment";
import SearchInput from "../components/ui/SearchInput";
import { Link } from "react-router-dom";
import Sort from "../components/ui/Sort";
import FilterMedicines from "../components/FilterMedicines";
import { deleteAlert } from "../utils/deleteAlert";

const MedicinesList = () => {
  const [data, setData] = useState(medicines);
  const filterOptions = ["all", "available", "outStock", "expired"];
  const [activeFilter, setActiveFilter] = useState("all");
  useEffect(() => {
    if (activeFilter === "available") {
      setData(() =>
        medicines.filter(
          (medicine) =>
            medicine.expireDate > new Date().toISOString() && medicine.stock > 0
        )
      );
    } else if (activeFilter === "expired") {
      setData(() =>
        medicines.filter(
          (medicine) => medicine.expireDate < new Date().toISOString()
        )
      );
    } else if (activeFilter === "outStock") {
      setData(() => medicines.filter((medicine) => medicine.stock <= 0));
    } else {
      setData(medicines);
    }
  }, [activeFilter]);
  const [search, setSearch] = useState("");
  const options = [
    { key: "First Added", value: "createdAt" },
    { key: "Last Added", value: "-createdAt" },
    { key: "Close To Expiration", value: "expireDate" },
  ];
  const handleSelectChange = (selectedOption) => {
    console.log("Selected:", selectedOption);
  };
  const columns = [
    { label: "Medicine Name", key: "medicineName" },
    { label: "Company", key: "company" },
    {
      label: "Expire Date",
      key: "expireDate",
      render: (value) => moment(value).format("YYYY-MM-DD"),
    },
    { label: "Price", key: "price" },
    { label: "Stock", key: "stock" },
    {
      label: "Actions",
      key: "actions",
      render: (_, row) => (
        <div className="flex items-center gap-1">
          <Link
            to={`/medicineslist/${row._id}`}
            className="bg-blue-200 text-blue-600 px-3 py-1 text-sm rounded-md cursor-pointer"
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
      <div className="page-title">Medicines List</div>
      <FilterMedicines
        queryName={"medicines"}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        filterOptions={filterOptions}
      />
      <div className="my-5 flex items-center max-md:gap-3 justify-between md:px-5 max-md:px-1">
        <SearchInput search={search} setSearch={setSearch} />
        <Sort
          options={options}
          label="Sort Medicines By "
          onChange={handleSelectChange}
        />
      </div>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default MedicinesList;
