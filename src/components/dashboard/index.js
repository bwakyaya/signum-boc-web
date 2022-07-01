import React from "react";
import BOCForm from "./boc-form";
import Schedules from "./schedules-panel";
const Dashboard = (token) => {
  return (
    <div className="home-page">
      <Schedules />
      <div className="divider-div"></div>
      <BOCForm />
    </div>
  );
};

export default Dashboard;
