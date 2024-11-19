import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const InvoicesChart = ({ data }) => {
  const COLORS = [
    "#4f46e5",
    "#ff6347",
    "#00d1b2",
    "#fbbf24",
    "#6366f1",
    "#9b55e9",
  ];

  return (
    <div className="overflow-x-auto mt-3 flex justify-center flex-col">
      <h3 className="mx-auto text-2xl capitalize">Monthly Invoices Count</h3>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            dataKey="invoice"
            nameKey="_id"
            outerRadius={150}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InvoicesChart;
