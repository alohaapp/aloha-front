import React, { useState } from "react";
import { Button } from "bloomer";

const SidePanelFloorEdit = ({ name, onCancel, onSave }) => {
  const [newName, setNewName] = useState(name || "");
  return (
    <div className="floor">
      <div className="floor-header">
        <input
          type="text"
          value={newName}
          name="name"
          onChange={event => {
            setNewName(event.target.value);
          }}
        />
      </div>
      <div className="floor-actions">
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={() => onSave(newName)}>Save</Button>
      </div>
    </div>
  );
};

export default SidePanelFloorEdit;
