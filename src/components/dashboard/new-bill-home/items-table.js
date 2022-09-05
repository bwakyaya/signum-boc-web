import "./items.css";
import React from "react";

class TableErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

function ITable(props) {
  // let caller = props.caller;
  let body = props.tableData;
  return <Table body={body} />;
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
        {body.map((row) => (
          <TableRow row={row} caller={caller} key={`${row[5]}`} />
        ))}
      </tbody>
    </table>
  );
}

function TableRow(props) {
  let row = props.row;
  return (
    <TableErrorBoundary>
      <tr>
        <td>{row[0]}</td>
        <td>{row[1]}</td>
        <td>{row[2]}</td>
        <td>{row[3]}</td>
        <td>{row[4]}</td>
        {/* {row.map((val, index) => (
          <td key={`key-${Date.now()}-${index}-cell`}>{val}</td>
      ))} */}
      </tr>
    </TableErrorBoundary>
  );
}

export default ITable;
