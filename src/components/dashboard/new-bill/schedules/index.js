import React, { useState, useEffect } from "react";
import "./items.css";
import ITable from "./items-table";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import NewItem from "./new-item";

const myData = [[]];
export default function CostItems(props) {
  const [items, setItems] = useState();
  const [open, setOpen] = React.useState(false);
  const [id, setId] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [data, setData] = useState(<ITable tableData={myData} />);

  useEffect(() => {
    props.setItems(myData);
    props.setItemId(id);
    // console.log(items);
  });

  function testTable() {
    if (myData) {
      return data;
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
          <DialogTitle>Cost Item</DialogTitle>
          <DialogContent>
            <NewItem setItems={setItems} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={() => {
                myData.push(items);
                setId(items[5]);
                setData(<ITable tableData={myData} />);
                // testTable();
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
