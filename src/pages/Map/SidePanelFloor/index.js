import React from "react";
import { Link } from "react-router-dom";
import { Button } from "bloomer";

const SidePanelFloor = ({ floor, active }) => {
  return (
    <Link
      className={`floor${active ? " floor--active" : ""}`}
      to={`/map/${floor.id}`}
    >
      <div className="floor-header">{floor.name}</div>
      <div className="floor-actions">
        <Button>
          <i className="material-icons md-36">edit</i>
        </Button>
        <Button>
          <i className="material-icons md-36">delete</i>
        </Button>
      </div>
    </Link>
  );
};

export default SidePanelFloor;
