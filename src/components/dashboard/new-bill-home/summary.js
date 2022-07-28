import React, { useState, useEffect } from "react";
import "./summary.css";
import SimpleListMenu from "./selected-menu";
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import "./summary.css";

const courtsList = [
  "Courts",
  "The Chief Magistrate's Court of Mengo",
  "Buganda Road Court",
  "Nakawa High Court",
  "Court of Appeal",
  "Supreme Court",
  "Jinja High Court",
  "Mbale High Court",
];
const divisions = ["Divisions", "Civil Division", "Criminal Division"];
const billSummary = {
  court: "",
  division: "",
  taxationNumber: "",
  taxationYear: "",
  suitNumber: "",
  suitYear: "",
  plaintiffs: "",
  defendants: "",
  location: "",
  date: "",
};
export default function SummaryPage(props) {
  // const [summaryData, setSummaryData] = useState(billSummary);
  const [court, setCourt] = useState();
  const [division, setDivision] = useState();

  useEffect(() => {
    document.getElementById("taxationNumberId").value =
      billSummary.taxationNumber;
    document.getElementById("taxationNumberYear").value =
      billSummary.taxationYear;
    document.getElementById("suit-field").value = billSummary.suitNumber;
    document.getElementById("suit-year").value = billSummary.suitYear;
    document.getElementById("Plaintiffs").value = billSummary.plaintiffs;
    document.getElementById("defendants").value = billSummary.defendants;
    document.getElementById("location").value = billSummary.location;
    document.getElementById("dateSelector").value = billSummary.date;
  });

  return (
    <div className="summary-component">
      <div className="court-div">
        <label className="court-label">Court</label>
        <SimpleListMenu
          items={courtsList}
          parent={"courts"}
          setCourt={setCourt}
        />
      </div>
      <div className="division-div">
        <label className="division-label">Division</label>
        <SimpleListMenu
          items={divisions}
          parent={"divisions"}
          setDivision={setDivision}
        />
      </div>
      <div className="taxation-div">
        <label className="taxation-label">Taxation Number</label>
        <input
          id="taxationNumberId"
          type="number"
          placeholder="Number"
          className="taxation-field"
          required
        ></input>
        <label className="taxation-year-label">Taxation Year</label>
        <input
          id="taxationNumberYear"
          type="number"
          placeholder="Year"
          className="taxation-year"
        ></input>
      </div>
      <div className="suit-div">
        <label className="suit-label">Civil Suit Number</label>
        <input
          id="suit-field"
          type="number"
          placeholder="Number"
          className="suit-field"
        ></input>
        <label className="suit-year-label">Civil Suit Year</label>
        <input
          type="number"
          placeholder="Year"
          className="suit-year"
          id="suit-year"
        ></input>
      </div>
      <div className="plaintiff-div">
        <label className="plaintiff-label">
          Plaintiff(Each Entitu Name on a new line)
        </label>
        <textarea
          id="Plaintiffs"
          type="text"
          className="plaintiff-field"
          placeholder="Plaintiff(s)"
        ></textarea>{" "}
      </div>
      <div className="defendant-div">
        <label className="defendant-label">
          Defendant(Each Entitu Name on a new line)
        </label>
        <textarea
          id="defendants"
          type="text"
          className="defendant-field"
          placeholder="Defendant(s)"
        ></textarea>
      </div>
      <div className="dated-div">
        <label className="location-label">Location</label>
        <input
          id="location"
          type="text"
          placeholder="Location"
          className="location-field"
        ></input>
        <label className="date-label">Date</label>
        <input type="date" className="date-picker" id="dateSelector"></input>
      </div>
      <Button
        className="save-parts"
        variant="contained"
        startIcon={<SaveIcon />}
        onClick={() => {
          billSummary.court = court;
          billSummary.division = division;
          billSummary.taxationNumber =
            document.getElementById("taxationNumberId").value;
          billSummary.taxationYear =
            document.getElementById("taxationNumberYear").value;
          billSummary.suitNumber = document.getElementById("suit-field").value;
          billSummary.suitYear = document.getElementById("suit-year").value;
          billSummary.plaintiffs = document.getElementById("Plaintiffs").value;
          billSummary.defendants = document.getElementById("defendants").value;
          billSummary.location = document.getElementById("location").value;
          billSummary.date = document.getElementById("dateSelector").value;
          // setSummaryData(billSummary);
          props.setSummary(billSummary);
        }}
      >
        Create
      </Button>
    </div>
  );
}
