import "./items.css"
import React, { Component } from 'react';

class ITable extends Component {
	render() {
		// let heading = ['ITEM', 'DATE', 'PARTICULARS','AMOUNT', 'TAXED OFF'];
		let body = this.props.tableData;			
		return (
			<div >
				<Table body={body} />,
			</div>
		);
	}
}

class Table extends Component {
	render() {
		// var heading = this.props.heading;
		var body = this.props.body;
		return (
			<table >
				<thead>
					<tr>
                    <th className="item">ITEM </th><th className="date">DATE</th> <th className="particulars">PARTICULARS </th><th className="amount">AMOUNT</th> <th className="tax">TAXED OFF</th>
					</tr>
				</thead>
				<tbody>
					{body.map(row => <TableRow row={row} />)}
				</tbody>
			</table>
		);
	}
}

class TableRow extends Component {
	render() {
		var row = this.props.row;
		return (
			<tr>
				{row.map(val => <td>{val}</td>)}
			</tr>
		)
	}
}

export default ITable;
