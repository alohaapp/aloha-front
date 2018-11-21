import React from "react";
import { Button, Tag } from "bloomer";
import { Link } from "react-router-dom";
import Dropdown from "../../../components/Dropdown";
import SidePanelFloor from "../SidePanelFloor";
import SidePanelFloorAdder from "../SidePanelFloorAdder";

/* Get the id of the first floor for an office or "new" if no floors are defined */
const firstFloor = office =>
  office.floors && office.floors.length !== 0 ? office.floors[0].id : "new";

/* Returns html for the offices dropdown */
const renderDropdownItems = (offices, selectedOffice) =>
  offices.map(
    office =>
      selectedOffice === office.id ? (
        <div
          key={office.id}
          className="SidePanel-dropdown-item SidePanel-dropdown-item--active"
        >
          {office.name}
        </div>
      ) : (
        <Link key={office.id} to={`/map/${firstFloor(office)}`}>
          <div className="SidePanel-dropdown-item">{office.name}</div>
        </Link>
      )
  );

function SidePanel({ offices, officeId, floorId }) {
  if (!offices.length) {
    return null;
  }

  const office = offices.find(office => office.id === officeId);

  return (
    <div className="SidePanel">
      <Tag isColor="light">{offices.length}</Tag>
      <span id="Side-panel-office-legend">OFFICE</span>
      <div className="SidePanel-dropdown">
        <Dropdown
          trigger={<div className="Dropdown-button">{office.name}</div>}
        >
          {renderDropdownItems(offices, officeId)}
        </Dropdown>
        <Button>Edit</Button>
      </div>
      <div className="SidePanel-floors">
        {office.floors.map(floor => (
          <SidePanelFloor key={floor.id} floor={floor} />
        ))}
        <SidePanelFloorAdder />
      </div>
    </div>
  );
}

export default SidePanel;
