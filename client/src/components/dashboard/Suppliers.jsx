const Suppliers = () => {
  return (
    <div className="bg-white flex-[5] max-h-60 overflow-auto rounded-md p-2 shadow-lg max-md:mb-3">
      <h1 className="text-[27px] font-bold border-b-2 pb-1 w-fit mx-auto text-gray-700 text-center">
        Suppliers
      </h1>
      <div className="overflow-x-auto mt-2">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">ID</th>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Email</th>
              <th className="px-4 py-2 border-b">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="px-4 py-2 border-b">kdjkdfksdkf</td>
              <td className="px-4 py-2 border-b">ahmed</td>
              <td className="px-4 py-2 border-b">dkdkd</td>
              <td className="px-4 py-2 border-b">30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Suppliers;
