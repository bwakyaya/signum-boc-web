import ITable from "../schedules/items-table";
import React, { useState } from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

let data = [[]];
export default function Disbursements(props) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [disbursement, setDisbursement] = useState(<ITable tableData={data} />);

  // myData.push(props.disbursements);

  function testTable() {
    if (data) {
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
          <DialogContent>
            <div className="disbursementDetails">
              <input
                type="date"
                className="disbursementField"
                id="disbursementDate"
              />
              <label>Description</label>
              <textarea
                id="disbursementDescription"
                className="disbursementField"
              ></textarea>
              <label>Amount</label>
              <input
                type="number"
                id="disbursementAmount"
                className="disbursementField"
              ></input>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={() => {
                let disbursementAmount = Number(
                  document.getElementById("disbursementAmount").value
                );
                let disbursementTax = 0.18 * disbursementAmount;
                data.push([
                  "#",
                  document.getElementById("disbursementDate").value,
                  document.getElementById("disbursementDescription").value,
                  disbursementAmount,
                  disbursementTax,
                ]);
                props.setDisbursements(data);
                setDisbursement(
                  <ITable tableData={data} caller={"disbursements"} />
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
