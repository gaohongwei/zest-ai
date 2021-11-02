import moment from "moment";
const TableColumns = [
  {
    title: "Base",
    dataIndex: "base",
    key: "base",
  },

  {
    title: "Currency",
    dataIndex: "currency",
    key: "currency",
  },

  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Count",
    dataIndex: "count",
    key: "count",
  },
  {
    title: "TimeStamp",
    dataIndex: "time_stamp",
    key: "time_stamp",
    render: (text, record, index) => {
      const raw = record["time_stamp"];
      const d = new Date(raw);
      const datestring = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
      return datestring;
    },
  },
];

export { TableColumns };
