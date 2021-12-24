import React from "react";

function UseJavaScriptToCreateHTML() {
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement("h1", {}, "My App 2")
  );
}

export default UseJavaScriptToCreateHTML;
