import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./components/Weather";
import UserStatus from "./components/UserStatus";
import Greeting from "./components/Greeting"
createRoot(document.getElementById("root")).render(
  <StrictMode>
 
    <Greeting timeOfDay={"morning"} />
  </StrictMode>,
);
