import { useState } from "react";
import FormField from "../../components/ui/FormField";
import SearchItems from "../../components/SearchItems";
import { medicines } from "../../utils/dummyDate";
import Button from "../../components/ui/Button";

const CreateInvoice = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <h1 className="page-title">create invoice</h1>
      <div className="w-[80%] mx-auto mt-5 relative">
        <FormField
          type={"text"}
          placeholder={"search..."}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search.trim() !== "" && <SearchItems medicines={medicines} />}
      </div>
      <div className="overflow-x-auto mt-5">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-6 py-2 text-left text-gray-600 uppercase font-semibold">
                id
              </th>
              <th className="px-6 py-2 text-left text-gray-600 uppercase font-semibold">
                medicine
              </th>
              <th className="px-6 py-2 text-left text-gray-600 uppercase font-semibold">
                Price per Unit
              </th>
              <th className="px-6 py-2 text-left text-gray-600 uppercase font-semibold">
                quantity
              </th>
              <th className="px-6 py-2 text-left text-gray-600 uppercase font-semibold">
                total
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {invoice?.medicines?.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 text-gray-800 border-b">
                    {item?.medicineId?._id}
                  </td>
                  <td className="px-6 py-4 text-gray-800 border-b">
                    {item?.medicineId?.medicineName}
                  </td>
                  <td className="px-6 py-4 text-gray-800 border-b">
                    ${item?.medicineId?.price}
                  </td>
                  <td className="px-6 py-4 text-gray-800 border-b">
                    {item?.quantity}
                  </td>
                  <td className="px-6 py-4 text-gray-800 border-b">
                    ${item?.medicineId?.price * item?.quantity}
                  </td>
                </tr>
              ))} */}
          </tbody>
        </table>
      </div>
      <div className="mb-3 mt-5 ml-5">
        Total Amount : <span className="font-bold">$200</span>
      </div>
      <Button text={"Submit"} />
    </div>
  );
};

export default CreateInvoice;
