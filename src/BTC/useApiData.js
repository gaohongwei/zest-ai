import { useState, useEffect } from "react";
import axios from "axios";
import { BTCUrL, OkStatus } from "./Constant";

function useApiData(time) {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchData() {
    const { data: apiData, status } = await axios.get(BTCUrL);
    if (status === OkStatus) {
      const { data: row } = apiData;
      const { amount } = row;
      setData([
        ...data,
        { ...row, time_stamp: Date.now(), count, amount: parseFloat(amount) },
      ]);
    }
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count) => count + 1);
    }, time);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    fetchData();
  }, [count]);

  return { data };
}

export { useApiData };
