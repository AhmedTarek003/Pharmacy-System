const RecentOrders = () => {
  return (
    <div className="bg-white flex-[7] max-h-60 overflow-auto rounded-md p-2 shadow-lg">
      <h1 className="text-[27px] font-bold border-b-2 pb-1 w-fit mx-auto text-gray-700 text-center">
        Recent Orders
      </h1>
      <div className="overflow-x-auto mt-2">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">ID</th>
              <th className="px-4 py-2 border-b">Supplier</th>
              <th className="px-4 py-2 border-b">Expected Date</th>
              <th className="px-4 py-2 border-b">Total Amount</th>
              <th className="px-4 py-2 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="px-4 py-2 border-b">kdjkdfksdkf</td>
              <td className="px-4 py-2 border-b">ahmed</td>
              <td className="px-4 py-2 border-b">dkdkd</td>
              <td className="px-4 py-2 border-b">30</td>
              <td className="px-4 py-2 border-b">30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
