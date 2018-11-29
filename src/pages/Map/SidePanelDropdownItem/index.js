import React from "react";
import { Link } from "react-router-dom";

function SidePanelDropdownItem({ office, active, firstFloor }) {
  console.log(office);
  console.log(firstFloor);
  return active ? (
    <div className="SidePanel-dropdown-item SidePanel-dropdown-item--active">
      {office.name}
    </div>
  ) : (
    <Link to={`/map/${firstFloor ? firstFloor.id : "new"}`}>
      <div className="SidePanel-dropdown-item">{office.name}</div>
    </Link>
  );
}

export default SidePanelDropdownItem;
