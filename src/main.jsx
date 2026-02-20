import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./components/Weather";
import UserStatus from "./components/UserStatus";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserStatus loggedIn={true} isAdmin={true} />
  </StrictMode>,
);
