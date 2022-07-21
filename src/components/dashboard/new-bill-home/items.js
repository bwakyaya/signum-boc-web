import React, { useState } from "react";
import "./items.css";
import ITable from "./items-table";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import NewItem from "./new-item";

const myData = [["", "", "", "", ""]];
export default function CostItems() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [data, setData] = useState(<ITable tableData={myData} />);
  return (
    <div className="items-contens">
      {/* <NewItem /> */}

      {data}
      <div className="add-button-div">
        <AddCircleRoundedIcon
          // variant="contained"
          // startIcon={<AddIcon />}
          className="add-button"
          onClick={
            handleClickOpen
            //   () => {
            //   myData.push([
            //     "gdfg",
            //     "gdfff",
            //     "hdf gsdsjk dbfksfjnf ksfjngks djn,jsdg vjdsnkgj kgjfgkdfj gdkfjgnkd fjgkdfjgn kdfjgndfkjgnd fkgjndf kgjndfk gdfjgnkdfgjkdfng",
            //     "hfjfggr",
            //     "tgdfgdf",
            //   ]);
            //   setData(<ITable tableData={myData} />);
            // }
          }
        ></AddCircleRoundedIcon>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Cost Item</DialogTitle>
        <DialogContent>
          <NewItem />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
