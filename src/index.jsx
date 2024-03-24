import React from "react";
import ReactDOM from "react-dom/client";
import Number from "./number";

const App = () => {
    return (
        <Number number={7} /> 
    );
  };

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App></App>);