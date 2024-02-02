import React from "react";
import "./NavigationButton.css";

function NavigationButton({ href, title, width, background }) {
  return (
    <a href={href}>
      <div
        className="navigation-button"
        style={{ width: width, background: background }}
      >
        <p>{title}</p>
      </div>
    </a>
  );
}

export default NavigationButton;
