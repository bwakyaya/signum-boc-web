import React from "react";
import BOCHome from "./bill-home";
import LeftPanel from "./left-panel";
const Dashboard = (token) => {
  return (
    <div className="home-plate">
      <LeftPanel />
      <div className="divider-div"></div>
      <BOCHome />
    </div>
  );
};

export default Dashboard;
