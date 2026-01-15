import Circle from "./Circle";
export default function CircleWrapper({ circles }) {
  return (
    <div>
      {circles.map((circle) => (
        <Circle
          key={circle.id}
          x={circle.x}
          y={circle.y}
          colour={circle?.colour}
        />
      ))}
    </div>
  );
}
