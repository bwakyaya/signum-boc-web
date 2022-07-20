import "./items.css";
import ITable from "./items-table";
import React, { useState } from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

const myData = [["", "", "", "", ""]];
export default function Disbursements() {
  const [disbursement, setDisbursement] = useState(
    <ITable tableData={myData} />
  );
  return (
    <div className="items-contens">
      {disbursement}
      <div className="add-button-div">
        <AddCircleRoundedIcon
          className="add-button"
          onClick={() => {
            myData.push([
              "gdfg",
              "gdfff",
              "hdf gsdsjk dbfksfjnf ksfjngks djn,jsdg vjdsnkgj kgjfgkdfj gdkfjgnkd fjgkdfjgn kdfjgndfkjgnd fkgjndf kgjndfk gdfjgnkdfgjkdfng",
              "hfjfggr",
              "tgdfgdf",
            ]);
            setDisbursement(<ITable tableData={myData} />);
          }}
        ></AddCircleRoundedIcon>
      </div>
    </div>
  );
}
