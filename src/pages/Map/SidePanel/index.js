import React from "react";
import { Button, Tag } from "bloomer";
import Dropdown from "../../../components/Dropdown";
import SidePanelFloor from "../SidePanelFloor";
import SidePanelFloorAdder from "../SidePanelFloorAdder";
import SidePanelDropdownItem from "../SidePanelDropdownItem";

function SidePanel({ offices, officeId, floorId }) {
  const office = offices.find(office => office.id === officeId);

  return (
    <div className="SidePanel">
      <Tag isColor="light">{offices.length}</Tag>
      <span id="Side-panel-office-legend">OFFICE</span>
      {offices.length !== 0 && (
        <div className="SidePanel-dropdown">
          <Dropdown
            trigger={<div className="Dropdown-button">{office.name}</div>}
          >
            {offices.map(office => (
              <SidePanelDropdownItem
                key={office.id}
                office={office}
                active={office.id === officeId}
              />
            ))}
          </Dropdown>
          <Button>Edit</Button>
        </div>
      )}
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
