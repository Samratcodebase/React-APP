import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./components/Weather";
import UserStatus from "./components/UserStatus";
import Greeting from "./components/Greeting";
import Click from "./components/Events";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserStatus />
    <Click />
  </StrictMode>,
);
