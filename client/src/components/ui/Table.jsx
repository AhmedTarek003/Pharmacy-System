const Table = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow-md">
        <thead className="bg-gray-100 text-gray-800 uppercase text-sm">
          <tr>
            <th className="px-6 py-3 text-left font-semibold">#</th>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-6 py-3 text-left font-semibold"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-600">
          {data.map((row, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-50"
            >
              <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
              {columns.map((column) => (
                <td key={column.key} className="px-6 py-4 whitespace-nowrap">
                  {column.render
                    ? column.render(row[column.key], row)
                    : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
