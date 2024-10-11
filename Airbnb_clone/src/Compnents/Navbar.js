import React from "react";
import airbnb_logo from "../../src/Assets/airbnb.png";

function Navbar() {
  return (
    <nav className="Navbar">
      <img src={airbnb_logo} alt="logo" />
    </nav>
  );
}
export default Navbar;
