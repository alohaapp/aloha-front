import React from "react";

const SidePanel = ({ offices, setFloor }) => {
  return (
    <div className="side-panel">
      {offices.map(office => (
        <Office office={office} setFloor={setFloor} />
      ))}
    </div>
  );
};

export default SidePanel;
