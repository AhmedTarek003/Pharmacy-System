import moment from "moment";
import useGetInvoice from "../../hooks/invoice/useGetInvoice";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../../components/ui/Loader";

const SingleInvoice = () => {
  const { id } = useParams();
  const { loading } = useGetInvoice(id);
  const { invoice } = useSelector((state) => state.invoice);

  return (
    <div className="p-5">
      <div className="bg-white p-3 rounded-md shadow-lg">
        <h1 className="page-title mb-5">invoice info</h1>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="mb-3 ml-5">
              <div>
                Date :{" "}
                <span>{moment(invoice?.createdAt).format("YYYY-MM-DD")}</span>
              </div>
              <div>
                Time : <span>{moment(invoice?.createdAt).format("hh:mm")}</span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-6 py-3 text-left text-gray-600 uppercase font-semibold">
                      id
                    </th>
                    <th className="px-6 py-3 text-left text-gray-600 uppercase font-semibold">
                      medicine
                    </th>
                    <th className="px-6 py-3 text-left text-gray-600 uppercase font-semibold">
                      Price per Unit
                    </th>
                    <th className="px-6 py-3 text-left text-gray-600 uppercase font-semibold">
                      quantity
                    </th>
                    <th className="px-6 py-3 text-left text-gray-600 uppercase font-semibold">
                      total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {invoice?.medicines?.map((item, index) => (
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
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mb-3 mt-5 ml-5">
              Total Amount :{" "}
              <span className="font-bold">${invoice?.totalAmount}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleInvoice;
