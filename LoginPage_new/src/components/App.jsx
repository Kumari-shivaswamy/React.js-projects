import React, { useState } from "react";

function App() {
  const [buttonText, setButtonText] = useState("Submit");
  const [mouseOver, setValuesMouseEvent] = useState(false);
  function MouseOver() {
    setValuesMouseEvent(true);
  }
  function MouseOut() {
    setValuesMouseEvent(false);
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: mouseOver ? "black" : "white" }}
        onMouseOver={MouseOver}
        onMouseOut={MouseOut}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default App;
