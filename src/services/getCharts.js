import { data } from "../utils/data";

export const getCharts = timestamp =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(data[timestamp]);
    }, 500)
  );
