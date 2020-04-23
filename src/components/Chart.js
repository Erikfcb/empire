import React, { useCallback } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { getRandomColor } from "../services/functions/getRandomColor";

const Chart = ({ data }) => {
  const createLines = useCallback(
    () =>
      Object.keys(data[0])
        .filter(item => item !== "date")
        .map(item => <Bar key={item} dataKey={item} fill={getRandomColor()} />),
    [data]
  );

  return (
    <BarChart
      width={1000}
      height={500}
      data={data}
      margin={{
        top: 50
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis domain={["auto", "auto"]} />
      <Tooltip />
      <Legend />
      {createLines()}
    </BarChart>
  );
};

export default Chart;
