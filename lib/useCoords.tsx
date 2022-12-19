import { useEffect, useState } from "react";

export default function useCoords() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const context = (e: MouseEvent) => {
    e.preventDefault();
    const { clientX, clientY } = e;
    setCoords({ x: clientX, y: clientY });
    console.log(coords);
  };
  const click = (e: MouseEvent) => {};

  useEffect(() => {
    document.addEventListener("contextmenu", context);
    document.addEventListener("click", click);
    return () => {
      document.addEventListener("contextmenu", context);
      document.addEventListener("click", click);
    };
  }, []);
}
