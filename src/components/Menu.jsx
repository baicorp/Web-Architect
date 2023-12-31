import React from "react";

function Menu({ onClick }) {
  return (
    <svg
      onClick={onClick}
      className="w-8 h-8"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12.5" cy="12.5" r="12.5" fill="black" />
      <line x1="5" y1="7.5" x2="20.125" y2="7.5" stroke="white" />
      <line x1="5" y1="11.5" x2="20.125" y2="11.5" stroke="white" />
      <line x1="5" y1="15.5" x2="20.125" y2="15.5" stroke="white" />
    </svg>
  );
}

export default Menu;
