import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; // Importing Chart as ChartJS from chart.js/auto

function LineChart({ chartData, height = 400 }) {
  const options = {
    plugins: {
      legend: {
        display: chartData.datasets.length > 1,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
  };

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
}

export default LineChart;
