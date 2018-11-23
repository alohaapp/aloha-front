import React from "react";
import { Link } from "react-router-dom";

/* Get the id of the first floor for an office or "new" if no floors are defined */
const firstFloor = office =>
  office.floors && office.floors.length !== 0 ? office.floors[0].id : "new";

function SidePanelDropdownItem({ office, active }) {
  return active ? (
    <div className="SidePanel-dropdown-item SidePanel-dropdown-item--active">
      {office.name}
    </div>
  ) : (
    <Link to={`/map/${firstFloor(office)}`}>
      <div className="SidePanel-dropdown-item">{office.name}</div>
    </Link>
  );
}

export default SidePanelDropdownItem;
