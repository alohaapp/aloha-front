import React, { useState } from "react";
import { Button, Tag } from "bloomer";
import SidePanelOfficeDropdown from "../SidePanelOfficeDropdown";
import SidePanelFloor from "../SidePanelFloor";
import SidePanelFloorAdder from "../SidePanelFloorAdder";

function SidePanel({ offices, officeId, floorId }) {
  const [selectedOffice, setSelectedOffice] = useState(officeId);
  if (!offices.length) {
    return null;
  }

  const findOffice = officeId => offices.find(office => office.id === officeId);

  return (
    <div className="SidePanel">
      <Tag isColor="light">{offices.length}</Tag>
      <span id="Side-panel-office-legend">OFFICE</span>
      <SidePanelOfficeDropdown
        findOffice={findOffice}
        setSelectedOffice={setSelectedOffice}
        selectedOffice={selectedOffice}
        offices={offices}
      />
      <Button>Edit</Button>
      <div className="SidePanel-floors">
        {findOffice(selectedOffice).floors.map(floor => (
          <SidePanelFloor key={floor.id} floor={floor} />
        ))}
        <SidePanelFloorAdder />
      </div>
    </div>
  );
}

export default SidePanel;
