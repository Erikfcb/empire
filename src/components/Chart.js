import React, { useCallback } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

import { getRandomColor } from "../utils";

const Chart = ({ data }) => {
  const createLines = useCallback(
    () =>
      Object.keys(data[0])
        .filter(item => item !== "date")
        .map(item => <Bar key={item} dataKey={item} fill={getRandomColor()} />),
    [data]
  );

  return (
    <ResponsiveContainer width={"90%"} height={500}>
      <BarChart
        data={data}
        margin={{
          top: 50
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={["auto", "auto"]} width={100} />
        <Tooltip />
        <Legend />
        {createLines()}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
