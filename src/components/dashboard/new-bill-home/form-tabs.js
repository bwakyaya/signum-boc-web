import React, { useState } from "react";
import SummaryPage from "./summary";
import CostItems from "./items";
import Disbursements from "./disbursements";
import Finish from "./finish";
import "./form-tabs.css";

export default function FormTabs() {
  const [tab, setTab] = useState();
  return (
    <div>
      <div className="tab-panel">
        <input
          type="button"
          value="Summary"
          className="tab-button"
          onClick={() => {
            setTab(<SummaryPage />);
          }}
        ></input>
        <input
          type="button"
          value="Cost Items"
          className="tab-button"
          onClick={() => {
            setTab(<CostItems />);
          }}
        ></input>
        <input
          type="button"
          value="Disbursements"
          className="tab-button"
          onClick={() => {
            setTab(<Disbursements />);
          }}
        ></input>
        <input
          type="button"
          value="Finish"
          className="tab-button"
          onClick={() => {
            setTab(<Finish />);
          }}
        ></input>
      </div>
      <div className="tab-content">{tab}</div>
    </div>
  );
}
