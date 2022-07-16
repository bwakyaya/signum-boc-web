import React, { useState } from "react";
import "./items.css";
import ITable from "./items-table";

const myData = [[]];
export default function CostItems() {
  const [data, setData] = useState();
  return (
    <div>
      <div className="add-button-div">
        <button
          width="30px"
          height="30px"
          alt="Add Button"
          className="add-button"
          onClick={() => {
            myData.push(["gdfg", "gdfff", "hdfgsd", "hfjfggr", "tgdfgdf"]);
            setData(<ITable tableData={myData} />);
          }}
        >
          Add Item
        </button>
      </div>
      {data}
    </div>
  );
}
