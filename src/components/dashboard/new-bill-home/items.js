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
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [data, setData] = useState(
    <ITable tableData={myData} caller={"items"} />
  );

  useEffect(() => {
    // props.setItems(data);
    console.log(items);
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
                // myData.push([
                //   "#",
                //   "20th/06/2022",
                //   "To the advocate for filing a plaint skdjfksjbfke nskdfks",
                //   "200000",
                //   "80000",
                // ]);
                myData.push(items);
                setData(<ITable tableData={myData} />);
                testTable();
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
