import { gettingDate } from "./getDate";

export const settingChartData = (setChartData, prices1, prices2) => {
  setChartData({
    labels: prices1?.map((data) => gettingDate(data[0])),
    datasets: [
      {
        label: "Crypto 1",
        data: prices1?.map((data) => data[1]),
        borderWidth: 1,
        fill: false,
        backgroundColor: "rgba(58, 128, 233,0.1)",
        tension: 0.25,
        borderColor: "#3a80e9",
        pointRadius: 0,
        yAxisID: "crypto1",
      },
      prices2 && {
        label: "Crypto 2",
        data: prices2?.map((data) => data[1]),
        borderWidth: 1,
        fill: false,
        tension: 0.25,
        borderColor: "#61c96f",
        pointRadius: 0,
        yAxisID: "crypto2",
      },
    ].filter(Boolean), // Filter out undefined entries
  });
};
