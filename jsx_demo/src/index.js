//Create a react app from scratch.
import React from "react";
import ReactDom from "react-dom";

//create a contant and inject it inside any items in div
const platform = "UDEMY";
const challengeNumber = 0;

//create a constant which gives first and last name sperately
const firstName = "Kumari";
const secondName = "Shivaswamy";

//It should have a h1
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
ReactDom.render(
  <div>
    <h1>
      Creating React app from scratch challenge From {platform} challenge-Number
      is {5 * 10}
    </h1>
    <p>My name is {firstName + " " + secondName}</p>
    <ul>
      <li>I Will do this</li>
      <li>I am powerful</li>
      <li>I am a fast learner</li>
    </ul>
  </div>,
  document.getElementById("root")
);
