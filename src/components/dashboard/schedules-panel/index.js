import React from "react";
import MyTreeView from "./schedule-tree";

export default function Schedules() {
  return (
    <div className="schedules">
      <div className="system-title"> Bill of Costs</div>
      <MyTreeView />
    </div>
  );
}
