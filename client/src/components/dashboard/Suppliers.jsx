import { suppliers } from "../../utils/dummyDate";

const Suppliers = () => {
  const sortedSuplliers = suppliers
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);

  return (
    <div className="bg-white flex-[6] max-h-60 overflow-auto rounded-md p-2 shadow-lg max-md:mb-3">
      <h1 className="text-[27px] font-bold border-b-2 pb-1 w-fit mx-auto text-gray-700 text-center">
        Suppliers
      </h1>
      <div className="overflow-x-auto mt-2">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">#</th>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Email</th>
              <th className="px-4 py-2 border-b">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {sortedSuplliers?.map((supplier, idx) => (
              <tr className="text-center" key={supplier?._id}>
                <td className="px-4 py-2 border-b">{idx + 1}</td>
                <td className="px-4 py-2 border-b">{supplier?.userName}</td>
                <td className="px-4 py-2 border-b">{supplier?.email}</td>
                <td className="px-4 py-2 border-b">{supplier?.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Suppliers;
