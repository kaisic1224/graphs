import { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as ChartJSTitle,
  Tooltip,
  Legend,
  Filler,
  ChartArea,
  ChartOptions
} from "chart.js";
import { Chart } from "react-chartjs-2";
import useGradient from "../lib/useGradient";

const MONTHES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const options: ChartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: "top" as const
    },
    title: {
      display: true,
      text: "Chart.js Line Chart"
    },
    tooltip: {}
  },
  scales: {
    yAxes: {
      border: {
        color: "white"
      }
    },
    xAxes: {
      border: {
        color: "white"
      },
      ticks: {
        display: false
      }
    }
  }
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartJSTitle,
  Tooltip,
  Legend,
  Filler
);

const Line = ({ stock }: { stock: string }) => {
  const chartRef = useRef<ChartJS>(null);
  const gradient = useGradient(chartRef, [
    "rgba(0, 0, 0, 0)",
    "rgba(75, 192, 192, 0.6)"
  ]);

  return (
    <>
      <Chart
        ref={chartRef}
        type='line'
        datasetIdKey={stock}
        options={options}
        data={{
          labels: MONTHES.map((month) => month.substring(0, 3)),
          datasets: [
            {
              label: "Price",
              fill: true,
              data: [65, 59, 80, 81, 56, 55, 40],
              backgroundColor: gradient,
              pointHoverRadius: 8,
              pointRadius: 5,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.3
            }
          ]
        }}
      />
    </>
  );
};
export default Line;
