import React, { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Icon,
  Tag
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
      <Tag isColor="light">{offices.length}</Tag>
      <span id="Side-panel-office-legend">OFFICE</span>
      <Dropdown>
        <DropdownTrigger>
          <Button isOutlined aria-haspopup="true" aria-controls="dropdown-menu">
            <span>{findOffice(selectedOffice).name}</span>
            <Icon icon="angle-down" isSize="small" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownContent>
            {offices.map(office => (
              <DropdownItem
                key={office.id}
                onClick={() => setSelectedOffice(office.id)}
              >
                {office.name}
              </DropdownItem>
            ))}
          </DropdownContent>
        </DropdownMenu>
      </Dropdown>
      <Button>Edit</Button>
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
