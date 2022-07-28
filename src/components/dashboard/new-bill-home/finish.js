import React, { Component } from "react";
import "./finish.css";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";

class Finish extends Component {
  render() {
    return (
      <div className="save-button-div">
        <Button
          className="save-button"
          variant="contained"
          startIcon={<SaveIcon />}
          onClick={() => {
            alert("Hey guys, I have just been ");
          }}
        >
          Complete
        </Button>
      </div>
    );
  }
}
export default Finish;
