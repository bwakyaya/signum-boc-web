import React, { useState, useEffect } from "react";
import "./summary.css";
// import SaveIcon from "@mui/icons-material/Save";
// import Button from "@mui/material/Button";
import "./summary.css";
// import axios from "axios";

const courtsList = [
"",
"The Chief Magistrate's Court of Mengo",
"Buganda Road Court",
"Nakawa High Court",
"Court of Appeal",
"Supreme Court",
"Jinja High Court",
"Mbale High Court",
];
const divisions = ["", "Civil Division", "Criminal Division"];
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
  const[summary, setSummary]=useState();
// async function getCourts(token) {
// const url = "http://localhost:5000/courts";
// const formData = new FormData();
// formData.append("token", props.token);
// const config = {
//   headers: {
//     "content-type": "multipart/form-data",
//   },
// };
// return await axios
//   .post(url, formData, config)
//   .then((data) => data)
//   .then((Data) => {
//     console.log(Data);
//   });
// }
// async function getDivisions(token) {
// const url = "http://localhost:5000/divisions";
// const formData = new FormData();
// formData.append("token", props.token);
// const config = {
//   headers: {
//     "content-type": "multipart/form-data",
//   },
// };
// return await axios
//   .post(url, formData, config)
//   .then((data) => data)
//   .then((Data) => {
//     console.log(Data);
//   });
// }


useEffect(() => {
  props.setSummary(summary) ;
  billSummary.court=document.getElementById("courts").value = billSummary.court;
  billSummary.division = document.getElementById("divisions").value = billSummary.division;
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

function dropdown(arr) {
return arr.map((item) => {
  return <option key={item}>{item}</option>;
});
}

return (
<div className="summary-component">
  <div className="court-div">
    <label className="court-label">Court</label>
    <select
      onChange={() => {
        billSummary.court=document.getElementById("courts").value;
        setSummary(billSummary);
      }}
      id="courts"
    >
      {dropdown(courtsList)}
    </select>
  </div>
  <div className="division-div">
    <label className="division-label">Division</label>
    <select
      onChange={() => {
        billSummary.division = document.getElementById("divisions").value;
        setSummary(billSummary);
      }}
      id="divisions"
    >
      {dropdown(divisions)}
    </select>
  </div>
  <div className="taxation-div">
    <label className="taxation-label">Taxation Number</label>
    <input
      id="taxationNumberId"
      type="number"
      // placeholder="Number"
      className="taxation-field"
      required
      onChange={()=>{billSummary.taxationNumber = document.getElementById("taxationNumberId").value
      setSummary(billSummary);
    }}
    ></input>
    <label className="taxation-year-label">Taxation Year</label>
    <input
      id="taxationNumberYear"
      type="number"
      // placeholder="Year"
      className="taxation-year"
      onChange={()=>{billSummary.taxationYear = document.getElementById("taxationNumberYear").value
      setSummary(billSummary);
    }}
    ></input>
  </div>
  <div className="suit-div">
    <label className="suit-label">Civil Suit Number</label>
    <input
      id="suit-field"
      type="number"
      // placeholder="Number"
      className="suit-field"
      onChange={()=>{billSummary.suitNumber = document.getElementById("suit-field").value
      setSummary(billSummary);
    }}
    ></input>
    <label className="suit-year-label">Civil Suit Year</label>
    <input
      type="number"
      // placeholder="Year"
      className="suit-year"
      id="suit-year"
      onChange={()=>{
        billSummary.suitYear = document.getElementById("suit-year").value;
        setSummary(billSummary);
      }}
    ></input>
  </div>
  <div className="plaintiff-div">
    <label className="plaintiff-label">Plaintiff(s)</label>
    <textarea
      id="Plaintiffs"
      type="text"
      className="plaintiff-field"
      // placeholder="Plaintiff(s)"
      onChange={()=>{billSummary.plaintiffs = document.getElementById("Plaintiffs").value;
      setSummary(billSummary);
    }}
    ></textarea>{" "}
  </div>
  <div className="defendant-div">
    <label className="defendant-label">Defendant(s)</label>
    <textarea
      id="defendants"
      type="text"
      className="defendant-field"
      onChange={()=>{
        billSummary.defendants = document.getElementById("defendants").value;
        setSummary(billSummary);
      }}
      // placeholder="Defendant(s)"
    ></textarea>
  </div>
  <div className="dated-div">
    <label className="location-label">Location</label>
    <input
      id="location"
      type="text"
      // placeholder="Location"
      className="location-field"
      onChange={()=>{
        billSummary.location = document.getElementById("location").value;
        setSummary(billSummary);
      }}
    ></input>
    <label className="date-label">Date</label>
    <input 
    type="date" 
    className="date-picker" 
    id="dateSelector" 
    onChange={()=>{
      billSummary.date  = document.getElementById("dateSelector").value;
      setSummary(billSummary);
    }}
    ></input>
  </div>
  {
  /* <Button
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
     
      props.setSummary(billSummary);
    }}
  >
    Save
  </Button> */}
</div>
);
}
