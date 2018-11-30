import React, { useState } from "react";
import { Button } from "bloomer";

const SidePanelFloorEdit = ({ name, onCancel, onSave }) => {
  const [newName, setNewName] = useState(name || "");
  return (
    <div className="floor floor-edit">
      <div className="floor-header">
        <input
          type="text"
          placeholder="Enter floor name"
          value={newName}
          name="name"
          onChange={event => {
            setNewName(event.target.value);
          }}
        />
      </div>
      <div className="floor-actions">
        <Button className="is-small is-light" onClick={onCancel}>
          Cancel
        </Button>
        <Button className="is-small is-primary" onClick={() => onSave(newName)}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default SidePanelFloorEdit;
