import React, { useState, useRef } from "react";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from "bloomer";
import useClickOutside from "../../hooks/useClickOutside";

function Autocomplete({ children, onChange, value }) {
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };

  const ref = useRef(null);
  useClickOutside(ref, () => setActive(false));

  return (
    <div className="Dropdown" ref={ref}>
      <Dropdown isActive={active}>
        <DropdownTrigger onClick={toggleActive}>
          <div className="filter-username-trigger">
            <input
              type="text"
              placeholder="Select user"
              value={value}
              onChange={onChange}
            />
            <i className="material-icons">keyboard_arrow_down</i>
          </div>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownContent>
            {children.map((child, index) => (
              <DropdownItem onClick={() => setActive(false)} key={index}>
                {child}
              </DropdownItem>
            ))}
          </DropdownContent>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default Autocomplete;
