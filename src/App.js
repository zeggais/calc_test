import { useState } from "react";
import "./App.css";
import Display from "./Dispay";
import Keyboard from "./Keyboard";
import isNumber from "./toolbox";

function App() {
  const [numToDisplay, setNumToDisplay] = useState(0);

  const handleOnClick = (buttonName) => {
    if (isNumber(buttonName)) {
      setNumToDisplay(buttonName);
    }
  };

  return (
    <div className="App">
      <Display value={numToDisplay} />
      <Keyboard onClick={handleOnClick} />
    </div>
  );
}

export default App;
