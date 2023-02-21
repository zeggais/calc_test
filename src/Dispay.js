import "./Display.css";

export default function Display({ value }) {
  return (
    <div>
      <div className="display">{value}</div>
    </div>
  );
}
