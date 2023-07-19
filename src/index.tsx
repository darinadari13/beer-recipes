import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RegularRouter from "./router/ReactRouter";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<RegularRouter />);
