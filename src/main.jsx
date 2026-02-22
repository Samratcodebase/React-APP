import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./components/Weather";
import UserStatus from "./components/UserStatus";
import Greeting from "./components/Greeting";
import Click from "./components/Events";
import UseTheSate from "./components/UseState";
import ComponentOne from "./components/Component";
import App from "./App";

createRoot(document.getElementById("root")).render(

    <App />

);
