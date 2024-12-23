import Layout from "./Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import MyNetwork from "./pages/MyNetwork";
import Messages from "./pages/Messages";
import Notification from "./pages/Notifications";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/ " element={<Home />} />
        <Route path="/jobs " element={<Jobs />} />
        <Route path="/messages " element={<Messages />} />
        <Route path="/mynetwork " element={<MyNetwork />} />
        <Route path="/notifications " element={<Notification />} />
      </Routes>
      <Home />
    </Layout>
  );
}

export default App;
