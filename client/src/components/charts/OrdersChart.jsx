import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const OrdersChart = ({ data }) => {
  return (
    <div className="overflow-x-auto mt-3 flex justify-center ">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="_id" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Bar dataKey="totalOrders" fill="#4f46e5" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrdersChart;
