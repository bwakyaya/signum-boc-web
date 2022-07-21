import React from "react";
import "./items.css";

export default function NewItem() {
  return (
    <div className="new-item-form">
      <label className="new-item-date-label">Date</label>
      <input type="date" className="new-item-date-field"></input>
      <label className="new-item-particulars-label">Particulars</label>
      <input type="text" className="new-item-particulars-field"></input>
      <label className="new-item-amount-label">Amount</label>
      <input type="number" className="new-item-amount-field"></input>
      <label className="new-item-tax-label">Taxed Off</label>
      <input type="number" className="new-item-tax-field"></input>
    </div>
  );
}
