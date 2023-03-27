import { useState, useMemo } from "react";
import "./App.css";

const DEFAULT_WEIGHT = 50;
const DEFAULT_HEIGHT = 150;

function App() {
  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const [weight, setWeight] = useState(DEFAULT_WEIGHT);

  function onHeightChange(event) {
    const inputHeight = event.target.value;
    setHeight(inputHeight);
  }

  function onWeightChange(event) {
    const inputWeight = event.target.value;
    setWeight(inputWeight);
  }

  const output = useMemo(() => {
    const calculatedHeight = height / 100;
    return (weight / (calculatedHeight * calculatedHeight)).toFixed(1);
  }, [weight, height]);

  return (
    <main>
      <h1>BIM Calculator</h1>
      <div>
        <p className="slider-output">Weight: {weight} kg</p>
        <input
          className="input-slider"
          type="range"
          onChange={onWeightChange}
          step="1"
          min="40"
          max="220"
        />
        <p className="slider-output">Height: {height} cm</p>
        <input
          className="input-slider"
          type="range"
          onChange={onHeightChange}
          step="1"
          min="140"
          max="220"
        />
      </div>
      <div className="output-section">
        <p>Your BIM is</p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
}

export default App;
