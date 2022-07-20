import React, { Component } from "react";
import "./finish.css";
import Button from "@mui/material/Button";
import FileUploadIcon from "@mui/icons-material/FileUpload";

class Finish extends Component {
  render() {
    return (
      <div className="save-button-div">
        <Button
          className="save-button"
          variant="contained"
          startIcon={<FileUploadIcon />}
          onClick={() => {
            alert("Hey guys, I have just been ");
          }}
        >
          Save Bill
        </Button>
      </div>
    );
  }
}
export default Finish;
