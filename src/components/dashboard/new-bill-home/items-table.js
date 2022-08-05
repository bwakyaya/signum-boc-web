import "./items.css";
import React from "react";

function ITable(props) {
  let caller = props.caller;
  let body = props.tableData;
  return <Table body={body} caller={caller} />;
}

function Table(props) {
  let caller = props.caller;
  let body = props.body;
  return (
    <table className="dataTable">
      <thead>
        <tr>
          <th className="item">ITEM </th>
          <th className="date">DATE</th>
          <th className="particulars">PARTICULARS </th>
          <th className="amount">AMOUNT</th>
          <th className="tax">TAXED OFF</th>
        </tr>
      </thead>
      <tbody>
        {body.map((row, index) => (
          <TableRow
            row={row}
            caller={caller}
            body={body}
            key={`key-${index}-${caller}-row`}
          />
        ))}
      </tbody>
    </table>
  );
}

function TableRow(props) {
  let caller = props.caller;
  let body = props.body;
  let row = props.row;
  return (
    <tr key={`$-${caller}-${body.indexOf(row)}`}>
      {row.map((val, index) => (
        <td key={`key-${caller}-${index}-cell`}>{val}</td>
      ))}
    </tr>
  );
}

export default ITable;
