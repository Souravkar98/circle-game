import "./styles.css";
import CircleWrapper from "./CircleWrapper";
import { useEffect, useState } from "react";
export default function App() {
  const [circles, setCircles] = useState([]);
  function randomColor() {
    const n = Math.floor(Math.random() * 0xffffff);
    return "#" + n.toString(16).padStart(6, "0");
  }
  const handleClick = (e) => {
    const { clientX, clientY } = e;

    const newCircle = { x: clientX, y: clientY };

    setCircles((prev) => {
      let oldCircles = structuredClone(prev);
      const newColour = randomColor();

      oldCircles.forEach((circle) => {
        const dx = newCircle.x - circle.x;
        const dy = newCircle.y - circle.y;
        const distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
        if (distance < 100) {
          circle.colour = newColour;
          newCircle.colour = newColour;
        }
      });
      oldCircles.push(newCircle);
      return oldCircles;
    });
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  console.log(circles);
  return (
    <div className="App">
      <CircleWrapper circles={circles} />
    </div>
  );
}
