import React, { useState } from "react";
import { Button, Tag } from "bloomer";
import Dropdown from "../../../components/Dropdown";
import SidePanelFloor from "../SidePanelFloor";
import SidePanelFloorAdder from "../SidePanelFloorAdder";

function SidePanel({ offices, officeId, floorId }) {
  const [selectedOffice, setSelectedOffice] = useState(officeId);
  if (!offices.length) {
    return null;
  }

  const findOffice = officeId => offices.find(office => office.id === officeId);
  const selectedOfficeData = findOffice(selectedOffice);

  return (
    <div className="SidePanel">
      <Tag isColor="light">{offices.length}</Tag>
      <span id="Side-panel-office-legend">OFFICE</span>
      <div className="SidePanel-dropdown">
        <Dropdown
          trigger={
            <div className="Dropdown-button">{selectedOfficeData.name}</div>
          }
        >
          {offices.map(office => (
            <div
              key={office.id}
              className="SidePanel-dropdown-item"
              onClick={() => setSelectedOffice(office.id)}
            >
              {office.name}
            </div>
          ))}
        </Dropdown>
        <Button>Edit</Button>
      </div>
      <div className="SidePanel-floors">
        {selectedOfficeData.floors.map(floor => (
          <SidePanelFloor key={floor.id} floor={floor} />
        ))}
        <SidePanelFloorAdder />
      </div>
    </div>
  );
}

export default SidePanel;
