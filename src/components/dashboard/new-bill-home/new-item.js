import React from "react";

export default function NewItem(){
    return(<div>
        <form>
            <label>Date</label>
            <input type="date"></input>
            <label>Particulars</label>
            <input type="text"></input>
            <label>Amount</label>
            <input type="number"></input>
            <label>Taxed Off</label>
            <input type="number"></input>
        </form>
    </div>);
}