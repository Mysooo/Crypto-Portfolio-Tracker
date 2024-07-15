export const chartOptions = {
    scales: {
      crypto1: {
        type: 'linear',
        position: 'left',
        title: {
          display: true,
          text: 'Price of Crypto 1',
        },
      },
      crypto2: {
        type: 'linear',
        position: 'right',
        title: {
          display: true,
          text: 'Price of Crypto 2',
        },
        grid: {
          drawOnChartArea: false, // Don't draw grid lines on the right Y-axis
        },
      },
    },
  };
  