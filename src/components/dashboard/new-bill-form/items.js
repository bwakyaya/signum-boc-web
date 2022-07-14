import React, { useState } from "react";
import "./items.css";

let data = [];
export default function CostItems() {
  const [tableData, setTableData] = useState([]);
  return (
    <div>
      <table>
        <tr>
          <th className="item">ITEM</th>
          <th className="date">DATE</th>
          <th className="particulars">PARTICULARS</th>
          <th className="amount">AMOUNT</th>
          <th className="tax">TAXED OFF</th>
        </tr>
        {addRow(tableData)}
      </table>
      <div className="add-button-div">
        <button
          width="30px"
          height="30px"
          alt="Add Button"
          className="add-button"
          onClick={() => {
            data.push(["hfdfdfv", "nghdgf", "LKSDJF", "LDJF", "kdjfgkljdf"]);
            setTableData(data);
            console.log(tableData);
          }}
        >
          ADD
        </button>
      </div>
    </div>
  );
}

function addRow(a, b, c, d, e) {
  return (
    <tr className="data-row">
      <th>{a}</th>
      <th>{b}</th>
      <th>{c}</th>
      <th>{d}</th>
      <th>{e}</th>
    </tr>
  );
}
