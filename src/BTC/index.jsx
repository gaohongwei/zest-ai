import React from "react";
import { Tabs } from "antd";
import { useApiData } from "./useApiData";
import { TableView } from "./TableView";
import { ChartView } from "./ChartView";
// 3600, 18000
const CycleTime = 18000;
const { TabPane } = Tabs;
const BTC = () => {
  const { data } = useApiData(CycleTime);
  console.log("data", data);
  return (
    <div style={{ margin: "5%" }}>
      <div style={{ textAlign: "center" }}>
        <h1> BTC Data</h1>
      </div>

      <Tabs defaultActiveKey="table">
        <TabPane tab="Table" key="table">
          <TableView rows={data} />
        </TabPane>
        <TabPane tab="Chart" key="chart">
          <ChartView rows={data} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export { BTC };
