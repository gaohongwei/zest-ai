import React from "react";
import { Table } from "antd";
import { TableColumns } from "./TableColumns";
const TableView = ({ rows }) => {
  // console.log("rows", rows);
  return (
    <div>
      <Table dataSource={rows} columns={TableColumns} />;
    </div>
  );
};

export { TableView };
