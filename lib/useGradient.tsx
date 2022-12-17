import { ChartArea, Chart as ChartJS } from "chart.js";
import { useEffect, useState, RefObject } from "react";

export default function useGradient(
  chartRef: RefObject<ChartJS>,
  colours: string[]
) {
  const [gradient, setgradient] = useState<string | CanvasGradient>(
    "rgba(0, 0, 0, 0)"
  );

  useEffect(() => {
    const { ctx, chartArea } = chartRef.current!;

    if (!chartRef) return;
    const g = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    colours.map((colour, i) => {
      g.addColorStop(i, colour);
    });

    setgradient(g);
  }, []);

  return gradient;
}
