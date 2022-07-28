import React from "react";
import "./finish.css";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";

export default function Finish(props) {
  const summary = props.summary;
  // const items = props.items;
  // const disbursements = props.disbursements;
  return (
    <div className="save-button-div">
      <Button
        className="save-button"
        variant="contained"
        startIcon={<SaveIcon />}
        onClick={() => {
          alert(summary.date);
        }}
      >
        Complete
      </Button>
    </div>
  );
}
