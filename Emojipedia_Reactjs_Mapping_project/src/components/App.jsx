import React from "react";
import emojipedia from ".././emojipedia";
import Entry from "./Entry";

function giveValues(values) {
  return (
    <Entry
      key={values.id}
      name={values.name}
      character={values.emoji}
      description={values.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(giveValues)}</dl>
    </div>
  );
}

export default App;
