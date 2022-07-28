import React from "react";
import BOCHome from "./new-bill-home/bill-home";
const Dashboard = (props) => {
  return (
    <div className="home-plate">
      {/* <LeftPanel /> */}
      <BOCHome token={props.token} setToken={props.setToken}/>
    </div>
  );
};

export default Dashboard;
