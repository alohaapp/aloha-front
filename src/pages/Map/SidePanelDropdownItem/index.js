import React from "react";
import { Link } from "react-router-dom";

function SidePanelDropdownItem({ office, active, firstFloor }) {
  return active ? (
    <div className="SidePanel-dropdown-item SidePanel-dropdown-item--active">
      {office.name}
    </div>
  ) : (
    <Link to={`/map/${office.id}/${firstFloor ? firstFloor.id : ""}`}>
      <div className="SidePanel-dropdown-item">{office.name}</div>
    </Link>
  );
}

export default SidePanelDropdownItem;
