import React, { useState } from "react";
import "./items.css";
import ITable from "./items-table";
// import NewItem from "./new-item";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

const myData = [["", "", "", "", ""]];
export default function CostItems() {
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
        ></AddCircleRoundedIcon>
      </div>
    </div>
  );
}
