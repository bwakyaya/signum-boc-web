import React from "react";
import "./finish.css";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import axios from "axios";

async function handleBillUpload(summary, items, disbursements) {
  const url = "http://localhost:5000/authenticate";
  const formData = new FormData();
  formData.append("summary", summary);
  formData.append("items", items);
  formData.append("disbursements", disbursements);
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  return await axios
    .post(url, formData, config)
    .then((data) => data)
    .then((Data) => {
      if (Data.data === "Success") {
        alert("Bill saved successfully");
      } else {
        alert("Oops! Problem occurred while uploading bill");
      }
    });
}

export default function Finish(props) {
  const summary = props.summary;
  const items = props.items;
  const disbursements = props.disbursements;

  return (
    <div className="save-button-div">
      <Button
        className="save-button"
        variant="contained"
        startIcon={<SaveIcon />}
        onClick={() => {
          handleBillUpload(summary, items, disbursements);
        }}
      >
        Complete
      </Button>
    </div>
  );
}
