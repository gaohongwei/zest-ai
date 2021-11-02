import Plot from "react-plotly.js";
import lodash from "lodash/lodash";
import { MathRegression } from "./mathRegression";
import { getAxis } from "./chartLayout";
const ComChart = ({ data, chartConfig }) => {
  const { xColumn, yColumn } = chartConfig;

  function getAxisLabel({ axis, column }) {
    const columnName = column || "";
    return `axis=${columnName}`;
  }

  function getLayout() {
    const xLabel = getAxisLabel({
      axis: "xAxis",
      column: xColumn,
    });
    const yLabel = getAxisLabel({
      axis: "yAxis",
      column: yColumn,
    });
    const xaxis = getAxis(xLabel);
    const yaxis = getAxis(yLabel);

    const title = `${yLabel}, ${xLabel}`;
    return {
      title,
      xaxis,
      yaxis,
    };
  }

  function getData({ column }) {
    if (lodash.isEmpty(data) || lodash.isEmpty(column)) return [];
    return data.map((item) => item[column]);
  }

  const xData = getData({ column: xColumn });
  const yData = getData({ column: yColumn });

  const { xArray, yArray } = MathRegression({ xArray: xData, yArray: yData });
  const plotData = [
    {
      x: xData,
      y: yData,
      mode: "markers",
      name: "Orginal Points",
    },
    {
      x: xArray,
      y: yArray,
      mode: "lines+markers",
      name: "Fitted Line",
    },
  ];

  return <Plot data={plotData} layout={getLayout()} />;
};

export { ComChart };
