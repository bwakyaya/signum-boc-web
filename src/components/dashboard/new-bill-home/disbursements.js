import "./items.css";
import ITable from "./items-table";
import React, { useState } from "react";

const myData = [["", "", "", "", ""]];
export default function Disbursements() {
  const [disbursement, setDisbursement] = useState(
    <ITable tableData={myData} />
  );
  return (
    <div>
      <div className="add-button-div">
        <button
          width="30px"
          height="30px"
          alt="Add Button"
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
        >
          Add Item
        </button>
      </div>
      {disbursement}
    </div>
  );
}
