import React, { useState } from "react";
import SidePanelFloorEdit from "../SidePanelFloorEdit";

const SidePanelFloorAdder = ({ addFloor }) => {
  const [adding, setAdding] = useState(false);

  return adding ? (
    <SidePanelFloorEdit onSave={addFloor} onCancel={() => setAdding(false)} />
  ) : (
    <div
      className={`Site-card${adding && " SidePanelFloorAdder--active"}`}
      onClick={() => setAdding(true)}
    >
      <i className="material-icons md-36">add</i>
      <span>Add another floor</span>
    </div>
  );
};

export default SidePanelFloorAdder;
