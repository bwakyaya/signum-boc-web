import React, {useState, useEffect} from "react";
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

export default function SummaryPage(props) {
  const [summaryData, setSummaryData] = useState();
  const [court, setCourt] = useState();
  const [division, setDivision] = useState();
  const [taxationNumber , setTaxationNumber]=useState();
  const [taxationYear , setTaxationYear]=useState();
  const [suitNumber , setSuitNumber]=useState();
  const [suitYear , setSuitYear]=useState();
  const [plaintiffs , setPlaintiffs]=useState();
  const [defendants , setDefendants]=useState();
  const [locatoin , setLocatoin]=useState();
  const [date , setDate]=useState();

  function reset(){ setSummaryData({court: court, division:division, taxationNumber:taxationNumber, taxationYear:taxationYear, suitNumber:suitNumber, suitYear:suitYear, plaintiffs:plaintiffs, defendants:defendants, locatoin:locatoin, date:date});
}

  return (
    <div className="summary-component">
      <div className="court-div">
        <label className="court-label">Court</label>
        <SimpleListMenu items={courtsList} parent={"courts"} setCourt={setCourt}/>
      </div>
      <div className="division-div">
        <label className="division-label">Division</label>
        <SimpleListMenu items={divisions} parent={"divisions"} setDivision={setDivision}/>
      </div>
      <div className="taxation-div">
        <label className="taxation-label">Taxation Number</label>
        <input
          id="taxationNumberId"
          type="number"
          placeholder="Number"
          className="taxation-field"
          required
          onChange={()=>{setTaxationNumber(document.getElementById("taxationNumberId").value)
          reset()}}
        ></input>
        <label className="taxation-year-label">Taxation Year</label>
        <input
        id="taxationNumberYear"
          type="number"
          placeholder="Year"
          className="taxation-year"
          onChange={()=>{setTaxationYear(document.getElementById("taxationNumberYear").value)
          reset()}}
        ></input>
      </div>
      <div className="suit-div">
        <label className="suit-label">Civil Suit Number</label>
        <input
          id="suit-field"
          type="number"
          placeholder="Number"
          className="suit-field"
          onChange={()=>{setSuitNumber(document.getElementById("suit-field").value)
          reset()}}
        ></input>
        <label className="suit-year-label">Civil Suit Year</label>
        <input type="number" placeholder="Year" className="suit-year" 
          id="suit-year"
          onChange={()=>{setSuitYear(document.getElementById("suit-year").value)
          reset()}}
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
          onChange={()=>{setPlaintiffs(document.getElementById("Plaintiffs").value)
          reset()}}
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
          onChange={()=>{setDefendants(document.getElementById("defendants").value)
          reset()}}
        ></textarea>
      </div>
      <div className="dated-div">
        <label className="location-label">Location</label>
        <input
        id="location"
          type="text"
          placeholder="Location"
          className="location-field"
          onChange={()=>{setLocatoin(document.getElementById("location").value)
          reset()}}
        ></input>
        <label className="date-label">Date</label>
        <input type="date" className="date-picker" id="dateSelector" onChange={()=>{setDate(document.getElementById("dateSelector").value)
      reset()} }></input>
      </div>
      <Button
          className="save-parts"
          variant="contained"
          startIcon={<SaveIcon />}
          onClick={() => {
            reset()
            if(summaryData){
              props.setSummary(summaryData)
            }
          }}
        >
          Create
        </Button>
    </div>
  );
  }
