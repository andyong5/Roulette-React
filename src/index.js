import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <h1>Yelp Rouletette</h1>
    <div className="center">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);


reportWebVitals();
