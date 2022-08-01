import React, { useState, useEffect } from "react";
import "./items.css";
import ScheduleTree from "./schedule-tree";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ListIcon from "@mui/icons-material/List";

let paragraphItem = "";
let itemData = [];
export default function NewItem(props) {
  const [open, setOpen] = React.useState(false);
  const [paragraph, setParagraph] = useState(paragraphItem);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    itemData.push(
      "#",
      document.getElementById("paragraph").value,
      document.getElementById("item-date").value,
      document.getElementById("item-amount").value,
      document.getElementById("item-tax").value
    );
    props.setItem(itemData);
    setOpen(false);
  };
  useEffect(() => {
    paragraphItem = paragraph;
    document.getElementById("paragraph").value = paragraphItem;
  });

  return (
    <div className="new-item-form">
      <label className="new-item-date-label">Date</label>
      <input type="date" className="new-item-date-field" id="item-date"></input>
      <label className="new-item-particulars-label">Particulars</label>
      <Button onClick={handleClickOpen} startIcon={<ListIcon />}>
        Schedule
      </Button>
      <textarea
        className="input-field"
        type="text"
        id="paragraph"
        value={paragraphItem}
        onChange={() => {}}
      ></textarea>
      <label className="new-item-amount-label">Considetation</label>
      <input
        type="number"
        className="new-item-amount-field"
        id="item-amount"
      ></input>
      <label className="new-item-tax-label">Taxed Off</label>
      <input type="number" className="new-item-tax-field" id="item-tax"></input>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Cost Item</DialogTitle>
        <DialogContent>
          <ScheduleTree setParagraph={setParagraph} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
