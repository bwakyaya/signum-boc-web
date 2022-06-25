import React from "react";

export default function NewBOCButton() {
  return (
    <div className="create-button-panel">
      <button
        className="new-bill-button"
        onClick={() => {
          // return console.log("Smile for the camera");
          alert("Smile for the camera");
        }}
      >
        Create
      </button>
    </div>
  );
}
