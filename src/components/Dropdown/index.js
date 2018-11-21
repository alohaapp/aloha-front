import React, { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from "bloomer";

function SidePanelOfficeDropdown({
  findOffice,
  setSelectedOffice,
  selectedOffice,
  offices
}) {
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <Dropdown isActive={active}>
      <DropdownTrigger>
        <Button
          isOutlined
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={toggleActive}
        >
          <span>{findOffice(selectedOffice).name}</span>
          <i className="material-icons md-48">keyboard_arrow_down</i>
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
  );
}

export default SidePanelOfficeDropdown;
