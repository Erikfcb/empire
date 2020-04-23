import axios from "axios";
import moment from "moment";

const baseURL = "https://www.fxempire.com/api/v1/en/markets/aapl/chart";

export const getCharts = (timestamp, setCharts) =>
  axios
    .get(baseURL + "?time=" + timestamp)
    .then(({ data }) =>
      setCharts(
        data
          .slice(0, 5)
          .map(item => ({ ...item, date: moment(item.date).fromNow() }))
      )
    );
