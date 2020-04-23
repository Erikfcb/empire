import axios from "axios";
import moment from "moment";

const baseURL = "https://www.fxempire.com/api/v1/en/markets/aapl/chart";

export const getCharts = timestamp =>
  axios
    .get(baseURL + "?time=" + timestamp)
    .then(({ data }) =>
      data
        .slice(0, 5)
        .map(item => ({ ...item, date: moment(item.date).fromNow() }))
    );
