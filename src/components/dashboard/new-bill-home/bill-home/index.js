import React, { useState } from "react";
import NewBillForm from "..";
import Drafts from "../../drafts-home";
import Archives from "../../archive-home";
import Profile from "../../profile-home";

export default function BOCHome(props) {
  const [launcher, setLauncher] = useState(<Profile token={props.token} setToken={props.setToken} />);
  return (
    <div className="boc-form-panel">
      <div className="margin"></div>
      <div className="options-panel">
        <figure className="new-bill-fig">
          <img
            className="new-bill-icon"
            alt="icon"
            src="newbill.png"
            onClick={() => {
              setLauncher(<NewBillForm />);
            }}
          ></img>
          <figcaption className="new-bill-label">New Bill</figcaption>
        </figure>
        <figure>
          <img
            className="draft-icon"
            alt="icon"
            src="draft.png"
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
            src="archive.png"
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
            src="images.png"
            onClick={() => {
              setLauncher(<Profile token={props.token} setToken={props.setToken} />);
            }}
          ></img>
          <figcaption className="profile-label">Profile</figcaption>
        </figure>
      </div>
      <div className="form-widgets">{launcher}</div>
    </div>
  );
}
