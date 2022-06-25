import React from "react";
import BOCForm from "./boc-form";
import NewBOCButton from "./create-boc-button";
import Schedules from "./schedules-panel";
import Profile from "./profile-panel";

const Dashboard = (token) => {
  return (
    <div className="home-page">
      <Schedules />
      <NewBOCButton />
      <Profile />
    </div>
  );
};

export default Dashboard;
