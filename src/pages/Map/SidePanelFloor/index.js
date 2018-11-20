import React from "react";
import { Link } from "react-router-dom";
import { Button } from "bloomer";

const SidePanelFloor = ({ floor }) => {
  return (
    <Link to={`/map/${floor.id}`}>
      <div className="Site-card">
        <div className="Site-card-header">{floor.name}</div>
        <div className="Site-card-actions">
          <Button>
            <i className="material-icons md-36">edit</i>
          </Button>
          <Button>
            <i className="material-icons md-36">delete</i>
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default SidePanelFloor;
