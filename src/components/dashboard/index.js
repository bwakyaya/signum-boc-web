import React from "react";
import { useState } from "react";
import NewBillForm from "./new-bill";
import Drafts from "./drafts";
import Archives from "./archive";
import Profile from "./profile";

export default function Dashboard(props) {
  const [launcher, setLauncher] = useState(
    <Profile token={props.token} setToken={props.setToken} />
  );
  return (
    <div className="home-plate">
      <div className="boc-form-panel">
        <div className="options-panel">
          <figure className="new-bill-fig">
            <img
              className="new-bill-icon"
              alt="icon"
              src={require("./newbill.png")}
              onClick={() => {
                setLauncher(<NewBillForm token={props.token} />);
              }}
            ></img>
            <figcaption className="new-bill-label">New Bill</figcaption>
          </figure>
          <figure>
            <img
              className="draft-icon"
              alt="icon"
              src={require("./draft.png")}
              onClick={() => {
                setLauncher(<Drafts />);
              }}
            ></img>
            <figcaption className="draft-label">Drafts</figcaption>
          </figure>
          <figure>
            <img
              className="archive-icon"
              alt="icon"
              src={require("./archive.png")}
              onClick={() => {
                setLauncher(<Archives />);
              }}
            ></img>
            <figcaption className="archive-label">My Bills</figcaption>
          </figure>
          <figure>
            <img
              className="profile-icon"
              alt="icon"
              src={require("./images.png")}
              onClick={() => {
                setLauncher(
                  <Profile token={props.token} setToken={props.setToken} />
                );
              }}
            ></img>
            <figcaption className="profile-label">Profile</figcaption>
          </figure>
        </div>
        <div className="form-widgets">{launcher}</div>
      </div>
    </div>
  );
}
