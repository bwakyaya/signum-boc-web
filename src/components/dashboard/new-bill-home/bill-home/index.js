import React, { useState } from "react";
import NewBillForm from "..";
import Drafts from "../../drafts-home";
import Archives from "../../archive-home";
import Profile from "../../profile-home";

export default function BOCHome() {
  const [launcher, setLauncher] = useState(null);
  function getComponent() {
    let Component;
    switch (launcher) {
      case "new-bill":
        Component = <NewBillForm />;
        break;
      case "drafts":
        Component = <Drafts />;
        break;
      case "archives":
        Component = <Archives />;
        break;
      case "profile":
        Component = <Profile />;
        break;
      default:
        Component = null;
        break;
    }
    return Component;
  }

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
              setLauncher("new-bill");
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
              setLauncher("drafts");
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
              setLauncher("archives");
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
              setLauncher("profile");
            }}
          ></img>
          <figcaption className="profile-label">Profile</figcaption>
        </figure>
      </div>
      <div className="form-widgets">{getComponent()}</div>
    </div>
  );
}
