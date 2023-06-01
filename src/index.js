import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Join from "./Join";
import JoinOk from "./JoinOk";
import Main from "./Main";
import Login from "./Login";
import Character from "./character";
import MyComponent from "./pages/Start";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <MyComponent/>
        </BrowserRouter>
    </React.StrictMode>
);