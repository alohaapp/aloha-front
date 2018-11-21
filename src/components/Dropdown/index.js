import React, { useState, useRef } from "react";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from "bloomer";
import "../../hooks/useClickOutside";
import useClickOutside from "../../hooks/useClickOutside";

function AlohaDropdown({ children, trigger }) {
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };

  const ref = useRef(null);
  useClickOutside(ref, () => setActive(false));

  return (
    <div className="Dropdown" ref={ref}>
      <Dropdown isActive={active}>
        <DropdownTrigger onClick={toggleActive}>{trigger}</DropdownTrigger>
        <DropdownMenu>
          <DropdownContent>
            {children.map((child, index) => (
              <DropdownItem key={index}>{child}</DropdownItem>
            ))}
          </DropdownContent>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default AlohaDropdown;
