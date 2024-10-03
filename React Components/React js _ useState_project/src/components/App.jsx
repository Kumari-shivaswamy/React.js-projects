import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [inputValue, setValue] = useState("");

  function handleOnchange(event) {
    setName(event.target.value);
  }
  function handleOnClick(event) {
    setValue(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {inputValue} </h1>
      <form onSubmit={handleOnClick}>
        <input
          type="text"
          placeholder="What's your name?  "
          onChange={handleOnchange}
        />
        <button onClick={handleOnClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
