import React from "react";
import BOCForm from "./boc-form";
import LeftPanel from "./left-panel";
const Dashboard = (token) => {
  return (
    <div className="home-plate">
      <LeftPanel />
      <div className="divider-div"></div>
      <BOCForm />
    </div>
  );
};

export default Dashboard;
