
import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  function calculateBMI(e) {
    e.preventDefault();

    const w = Number(weight);
    const h = Number(height);

    if (weight === "" || height === "" || w <= 0 || h <= 0) {
      setError("Please enter valid weight and height.");
      setBmi(null);
      setCategory("");
      return;
    }

    const heightInMeters = h / 100;
    const result = w / (heightInMeters * heightInMeters);

    setBmi(result.toFixed(2));
    setError("");

    if (result < 18.5) {
      setCategory("Underweight");
    } else if (result < 25) {
      setCategory("Normal weight");
    } else if (result < 30) {
      setCategory("Overweight");
    } else {
      setCategory("Obesity range");
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h1>BMI Calculator</h1>
        <p>Calculate your Body Mass Index</p>

        <form onSubmit={calculateBMI}>
          <label>Weight (kg)</label>
          <input
            type="number"
            min="0.1"
            step="any"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter weight in kg"
          />

          <label>Height (cm)</label>
          <input
            type="number"
            min="0.1"
            step="any"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter height in cm"
          />

          <button type="submit">Calculate BMI</button>
        </form>

        {error && <p className="error">{error}</p>}

        {bmi !== null && (
          <div className="result">
            <h2>Your BMI: {bmi}</h2>
            <p>Category: {category}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
