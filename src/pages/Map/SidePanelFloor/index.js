import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "bloomer";
import SidePanelFloorEdit from "../SidePanelFloorEdit";

const SidePanelFloor = ({ floor, active, updateFloor, deleteFloor }) => {
  const [editing, setEditing] = useState(false);

  return editing ? (
    <SidePanelFloorEdit
      name={floor.name}
      onSave={name => {
        updateFloor({ ...floor, name });
        setEditing(false);
      }}
      onCancel={() => setEditing(false)}
    />
  ) : (
    <Link
      className={`floor${active ? " floor--active" : ""}`}
      to={`/map/${floor.officeId}/${floor.id}`}
    >
      <div className="floor-header">{floor.name}</div>
      <div className="floor-actions">
        <Button onClick={() => setEditing(true)}>
          <i className="material-icons md-36">edit</i>
        </Button>
        <Button
          onClick={e => {
            e.preventDefault();
            deleteFloor(floor.id);
          }}
        >
          <i className="material-icons md-36">delete</i>
        </Button>
      </div>
    </Link>
  );
};

export default SidePanelFloor;
