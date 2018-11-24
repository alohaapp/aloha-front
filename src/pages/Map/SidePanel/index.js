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
      <div className="office-info">
        <Tag>{offices.length}</Tag>
        <span className="office-info__legend">
          {offices.length === 1 ? "OFFICE" : "OFFICES"}
        </span>
      </div>
      {offices.length !== 0 && (
        <div className="office-selector">
          <Dropdown
            trigger={
              <div className="Dropdown-button">
                {office.name}
                <i className="material-icons md-36">keyboard_arrow_down</i>
              </div>
            }
          >
            {offices.map(office => (
              <SidePanelDropdownItem
                key={office.id}
                office={office}
                active={office.id === officeId}
              />
            ))}
          </Dropdown>
          <Button className="button is-small">Edit</Button>
        </div>
      )}
      <div className="floors">
        {office.floors.map(floor => (
          <SidePanelFloor key={floor.id} floor={floor} />
        ))}
        <SidePanelFloorAdder addFloor={name => void name} />
      </div>
    </div>
  );
}

export default SidePanel;
