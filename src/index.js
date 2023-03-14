import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const doubled = numbers.map((number) => {
  return <li key={number}>{number}</li>;
});

root.render(<ul>{doubled}</ul>);
