import "./items.css";
import ITable from "./items-table";
import React, { useState, useEffect } from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const myData = [[]];
export default function Disbursements(props) {
  let disbursements = [["Transport to file plea",20000],["Airtime to contact witnesses", 50000],  ["Transport to serve summons", 70000]];
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [disbursement, setDisbursement] = useState(
    <ITable tableData={myData} />
  );
  useEffect(() => {
    props.setDisbursements(disbursement);
  });
  function testTable() {
    if (myData) {
      return disbursement;
    }
  }
  return (
    <div className="all-elements">
      <div className="table-button">
        {testTable()}
        <div className="add-button-div">
          <AddCircleRoundedIcon
            className="add-button"
            onClick={handleClickOpen}
          ></AddCircleRoundedIcon>
        </div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Disbursement</DialogTitle>
          <DialogContent></DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={() => {
                myData.push([
                  "#",
                  "17th Sept. 2022",
                  "Transport to serve summons",
                  "50000",
                  "",
                ]);
                setDisbursement(
                  <ITable tableData={myData} caller={"disbursements"} />
                );
                handleClose();
              }}
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
