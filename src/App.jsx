import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import MyNetwork from "./pages/MyNetwork";
import Messages from "./pages/Messages";
import Notification from "./pages/Notifications";

function App() {
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
