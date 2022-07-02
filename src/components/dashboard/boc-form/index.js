import React from "react";

export default function BOCForm() {
  return (
    <div className="boc-form-panel">
      <div className="options-panel">
        <figure className="new-bill-fig">
          <img className="new-bill-icon" alt="icon" src="newbill.png"></img>
          <figcaption className="new-bill-label">New Bill</figcaption>
        </figure>
        <figure>
          <img className="draft-icon" alt="icon" src="draft.png"></img>
          <figcaption className="draft-label">Drafts</figcaption>
        </figure>
        <figure>
          <img className="archive-icon" alt="icon" src="archive.png"></img>
          <figcaption className="archive-label">My Bills</figcaption>
        </figure>
        <figure>
          <img className="profile-icon" alt="icon" src="images.png"></img>
          <figcaption className="profile-label">Profile</figcaption>
        </figure>
      </div>
    </div>
  );
}
