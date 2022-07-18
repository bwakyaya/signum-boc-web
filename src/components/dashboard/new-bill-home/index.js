import React from "react";
// import FormTabs from "./form-tabs";
import SummaryPage from "./summary";
import CostItems from "./items";
import Disbursements from "./disbursements";

export default function NewBillForm() {
  return (
    <div className="body">
      <SummaryPage />
      <CostItems />
      <label>Disbursements</label>
      <Disbursements />
    </div>
  );
}
