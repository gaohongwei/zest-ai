import React from "react";
import { ComChart } from "./ComChart";

const ChartView = ({ rows }) => {
  // console.log("rows", rows);
  // return <div>{JSON.stringify(rows, null, 2)}</div>;
  const data = rows;
  const chartConfig = { xColumn: "count", yColumn: "amount" };
  return <ComChart data={data} chartConfig={chartConfig} />;
};

export { ChartView };
