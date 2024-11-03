import React, { useState } from "react";

function App() {
  setInterval(getTime, 1000);
  let time = new Date().toLocaleTimeString();
  var [currentTime, setTime] = useState(time);

  function getTime() {
    let updatedtime = new Date().toLocaleTimeString();
    return setTime(updatedtime);
  }
  return (
    <div className="container">
      <h1>{currentTime}</h1>
    </div>
  );
}

export default App;
