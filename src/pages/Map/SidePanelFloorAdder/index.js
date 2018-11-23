import React, { useState } from "react";

const SidePanelFloorAdder = () => {
  const [adding, setAdding] = useState(false);

  const addCard = (
    <div onClick={() => setAdding(true)}>
      <i className="material-icons md-36">add</i>
      <span>Add another floor</span>
    </div>
  );
  const promptCard = (
    <div>
      <input type="text" />
      <div onClick={() => setAdding(false)}>
        <i className="material-icons md-18">cancel</i>
      </div>
    </div>
  );

  return (
    <div className={`floor-add ${adding && "SidePanelFloorAdder--active"}`}>
      {adding ? promptCard : addCard}
    </div>
  );
};

export default SidePanelFloorAdder;
