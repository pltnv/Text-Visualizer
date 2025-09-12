export const CHART_DEFAULT_OPTIONS = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 1000,
    easing: "easeOutQuart" as const,
  },
  plugins: {
    legend: {
      labels: {
        font: {
          size: 13,
        },
      },
    },
  },
};
