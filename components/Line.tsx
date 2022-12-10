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

const creategradient = (
  ctx: CanvasRenderingContext2D,
  area: ChartArea,
  colours: string[]
) => {
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
  colours.map((colour, i) => {
    gradient.addColorStop(i, colour);
  });

  return gradient;
};

const Line = ({ stock }: { stock: string }) => {
  const chartRef = useRef<ChartJS>(null);
  const [gradient, setgradient] = useState<string | CanvasGradient>(
    "rgba(0, 0, 0, 0)"
  );

  useEffect(() => {
    const { ctx, chartArea } = chartRef.current!;

    if (!chartRef) return;

    setgradient(
      creategradient(ctx, chartArea, [
        "rgba(0, 0, 0, 0)",
        "rgba(75, 192, 192, 0.6)"
      ])
    );
  }, []);

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
