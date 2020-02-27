import React from "react";

function Resume() {
  return (
    <div className="embed-responsive embed-responsive-1by1">
      <iframe
        className="embed-responsive-item"
        src={process.env.PUBLIC_URL + "/Resume.pdf"}
      ></iframe>
    </div>
  );
}

export default Resume;
