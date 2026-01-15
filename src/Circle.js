export default function Circle({ x, y, colour }) {
  return (
    <div
      style={{
        position: "absolute",
        top: `${y - 50}px`,
        left: `${x - 50}px`,
        backgroundColor: colour || "red",
      }}
      className="circle"
    ></div>
  );
}
