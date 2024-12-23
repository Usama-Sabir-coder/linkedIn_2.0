import React from "react";
import Sidebar from "../components/Sidebar";
import News from "../components/News";
import Feed from "../components/Feed";

const Home = () => {
  return (
    <div className="pt-20">
      <div className="max-w-6xl mx-auto flex justify-between gap-8">
        <Sidebar />
        <Feed />
        <News />
      </div>
    </div>
  );
};

export default Home;
