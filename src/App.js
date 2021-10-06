import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Fifth from "./components/Fifth";

function App() {
  let probs = new Array(5).fill(1);
  const [number, setNumber] = useState(-1);
  return (
    <div className="App">
      {probs.map((item, index) => (
        <button
          key={index}
          className="problem"
          onClick={() => setNumber(index)}
        >
          {index + 1}
        </button>
      ))}
      <div className="content">
        {number === 0 && <First />}
        {number === 1 && <Second />}
        {number === 2 && <Third />}
        {number === 3 && <Fourth />}
        {number === 4 && <Fifth />}
      </div>
    </div>
  );
}

export default App;
