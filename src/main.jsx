import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";

const clerk_key = import.meta.env.VITE_CLERK_KEY;

if (!clerk_key) {
  throw Error("Key was not Found");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ClerkProvider publishableKey={clerk_key}>
        <App />
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>
);
