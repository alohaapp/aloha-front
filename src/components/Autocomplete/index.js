import React, { useState, useRef } from "react";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from "bloomer";
import useClickOutside from "../../hooks/useClickOutside";

function Autocomplete({ children, onChange, value, onLeave }) {
  const [active, setActive] = useState(false);

  const ref = useRef(null);
  useClickOutside(ref, () => {
    if (active) {
      onLeave();
      setActive(false);
    }
  });

  return (
    <div className="Dropdown" ref={ref}>
      <Dropdown isActive={active}>
        <DropdownTrigger>
          <div className="filter-username-trigger">
            <input
              type="text"
              value={value}
              onChange={onChange}
              onFocus={() => {
                setActive(true);
              }}
            />
            <i className="material-icons">keyboard_arrow_down</i>
          </div>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownContent>
            {children.map((child, index) => (
              <DropdownItem
                onClick={() => {
                  onLeave();
                  setActive(false);
                }}
                key={index}
              >
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
