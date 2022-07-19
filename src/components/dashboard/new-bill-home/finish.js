import React, { Component } from "react";
import "./finish.css";

class Finish extends Component {
  render() {
    return (
      <div className="save-button-div">
        <input
          type="button"
          value="Save"
          className="save-button"
          onClick={() => {
            alert("Hey guys, I have just been ");
          }}
        ></input>
      </div>
    );
  }
}
export default Finish;
