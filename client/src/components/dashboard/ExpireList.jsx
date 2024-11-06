import moment from "moment";
import { medicines } from "../../utils/dummyDate";

const ExpireList = () => {
  const expireMedicines = medicines?.filter(
    (medicine) => medicine.expireDate < new Date().toISOString()
  );
  return (
    <div className="bg-red-600 flex-[7] max-h-72 overflow-auto rounded-md p-2 shadow-lg max-md:mb-3">
      <h1 className="text-[27px] font-bold border-b-2 pb-1 w-fit mx-auto text-white text-center">
        Expire List
      </h1>
      <div className="overflow-x-auto mt-2">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-white">#</th>
              <th className="px-4 py-2 border-b text-white">Medicine Name</th>
              <th className="px-4 py-2 border-b text-white">Expire Date</th>
              <th className="px-4 py-2 border-b text-white">Qty</th>
            </tr>
          </thead>
          <tbody>
            {expireMedicines?.map((medicine, idx) => (
              <tr className="text-center" key={medicine?._id}>
                <td className="px-4 py-2 border-b border-red-700">{idx + 1}</td>
                <td className="px-4 py-2 border-b border-red-700">
                  {medicine?.medicineName}
                </td>
                <td className="px-4 py-2 border-b border-red-700">
                  {moment(medicine?.expireDate).format("YYYY-MM-DD")}
                </td>
                <td className="px-4 py-2 border-b border-red-700">
                  {medicine?.stock}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpireList;
