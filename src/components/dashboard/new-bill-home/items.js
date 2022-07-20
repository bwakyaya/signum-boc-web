import React, { useState } from "react";
import "./items.css";
import ITable from "./items-table";
import NewItem from "./new-item";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const myData = [["", "", "", "", ""]];
export default function CostItems() {
  const [data, setData] = useState(<ITable tableData={myData} />);
  return (
    <div>
      {/* <NewItem /> */}
      <div className="add-button-div">
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          className="add-button"
          onClick={() => {
            myData.push([
              "gdfg",
              "gdfff",
              "hdf gsdsjk dbfksfjnf ksfjngks djn,jsdg vjdsnkgj kgjfgkdfj gdkfjgnkd fjgkdfjgn kdfjgndfkjgnd fkgjndf kgjndfk gdfjgnkdfgjkdfng",
              "hfjfggr",
              "tgdfgdf",
            ]);
            setData(<ITable tableData={myData} />);
          }}
        >
          Add Item
        </Button>
      </div>
      {data}
    </div>
  );
}
