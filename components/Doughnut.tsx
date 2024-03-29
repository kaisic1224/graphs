import { Chart } from "react-chartjs-2";
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
  ArcElement
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartJSTitle,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);

const options = {};

const Doughnut = () => {
  return (
    <Chart
      type='doughnut'
      data={{
        labels: ["Red", "GOOGL", "AMZ"],
        datasets: [{ label: "market share", data: [25, 35, 45] }]
      }}
    />
  );
};
export default Doughnut;
