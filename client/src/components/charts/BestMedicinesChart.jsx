import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const BestMedicinesChart = ({ data }) => {
  return (
    <div className="overflow-x-auto mt-3 flex justify-center ">
      <BarChart
        width={600}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="medicineId.medicineName" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="medicineId.price" fill="#8884d8" name="price" />
        <Bar dataKey="quantitySold" fill="#82ca9d" name="sold" />
        <Bar dataKey="medicineId.stock" fill="#ffc658" name="stock" />
      </BarChart>
    </div>
  );
};

export default BestMedicinesChart;
