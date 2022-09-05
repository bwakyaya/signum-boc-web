import React, { useState, useEffect } from "react";
import "./items.css";
import ScheduleTree from "./schedule-tree";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ListIcon from "@mui/icons-material/List";

export default function NewItem(props) {
  const [computedAmount, setComputedAmount] = useState();
  const [open, setOpen] = React.useState(false);
  const [paragraph, setParagraph] = useState();
  const [id, setId] = useState();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    document.getElementById("paragraph").value = paragraph;
  });

  return (
    <div className="new-item-form">
      <label className="new-item-date-label">Date</label>
      <input type="date" className="new-item-date-field" id="item-date"></input>
      <Button onClick={handleClickOpen} startIcon={<ListIcon />}>
        Item
      </Button>
      <textarea
        className="input-field"
        type="text"
        id="paragraph"
        value={paragraph}
        onChange={() => {}}
      ></textarea>

      <button
        onClick={() => {
          let tax = 0.18 * computedAmount;
          props.setItems([
            "#",
            document.getElementById("item-date").value,
            document.getElementById("paragraph").value,
            computedAmount,
            tax,
            id,
          ]);
        }}
      >
        Add Item
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Cost Item</DialogTitle>
        <DialogContent>
          <ScheduleTree
            setParagraph={setParagraph}
            setComputedAmount={setComputedAmount}
            setId={setId}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
