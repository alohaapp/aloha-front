import React, { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Icon
} from "bloomer";
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
      <Dropdown>
        <DropdownTrigger>
          <Button isOutlined aria-haspopup="true" aria-controls="dropdown-menu">
            <span>Dropdown button</span>
            <Icon icon="angle-down" isSize="small" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownContent>
            {offices.map(office => (
              <DropdownItem onClick={() => setSelectedOffice(office.id)}>
                {office.name}
              </DropdownItem>
            ))}
          </DropdownContent>
        </DropdownMenu>
      </Dropdown>
      <div className="SidePanel-floors">
        {findOffice(selectedOffice).floors.map(floor => (
          <SidePanelFloor floor={floor} />
        ))}
        <SidePanelFloorAdder />
      </div>
    </div>
  );
}

export default SidePanel;
