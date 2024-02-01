import React from "react";
import "./HeaddingText.css";
function HeaddingText({ headding, color, href }) {
  return (
    <a href={href} className="pt-[20px] pl-[28px]">
      <h1 className="headding-text" style={{ color: color ? color : "#fff" }}>
        {headding}
      </h1>
    </a>
  );
}

export default HeaddingText;
