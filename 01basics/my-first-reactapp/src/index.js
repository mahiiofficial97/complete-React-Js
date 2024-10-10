import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Mycomponent from "./component/Mycomponent";
import Mycomponent3 from "./component/Mycomponent3";
//2 fnction impliments or function defination Area

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Mycomponent />
  </React.StrictMode>
);

//exportt function
