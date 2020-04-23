import React, { useCallback } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { getRandomColor } from "../services/getRandomColor";

const Chart = ({ data }) => {
  const createLines = useCallback(
    () =>
      Object.keys(data[0])
        .filter(item => item !== "time")
        .map(item => (
          <Line
            key={item}
            type="monotone"
            dataKey={item}
            stroke={getRandomColor()}
            activeDot={{ r: 8 }}
          />
        )),
    [data]
  );

  return (
    <LineChart
      width={1000}
      height={500}
      data={data}
      margin={{
        top: 50
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Legend />
      {createLines()}
    </LineChart>
  );
};
export default Chart;
