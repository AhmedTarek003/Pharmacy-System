import moment from "moment";
import { useSelector } from "react-redux";
import useGetAllOrders from "../../hooks/order/useGetAllOrders";

const RecentOrders = () => {
  useGetAllOrders();
  const { orders } = useSelector((state) => state.order);
  const pendingOrders = orders?.filter((order) => order.status === "pending");
  return (
    <div className="bg-white flex-[7] max-h-60 overflow-auto rounded-md p-2 shadow-lg">
      <h1 className="text-[27px] font-bold border-b-2 pb-1 w-fit mx-auto text-gray-700 text-center">
        Recent Orders
      </h1>
      <div className="overflow-x-auto mt-2">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">#</th>
              <th className="px-4 py-2 border-b">Supplier</th>
              <th className="px-4 py-2 border-b">Expected Date</th>
              <th className="px-4 py-2 border-b">Total Amount</th>
              <th className="px-4 py-2 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {pendingOrders?.map((order, idx) => (
              <tr className="text-center" key={order?._id}>
                <td className="px-4 py-2 border-b">{idx + 1}</td>
                <td className="px-4 py-2 border-b">
                  {order?.supplier?.userName}
                </td>
                <td className="px-4 py-2 border-b">
                  {moment(order?.expectedDate).format("YYYY-MM-DD")}
                </td>
                <td className="px-4 py-2 border-b">{order?.totalAmount}</td>
                <td className="px-4 py-2 border-b">{order?.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
