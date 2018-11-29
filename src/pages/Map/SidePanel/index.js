import React, { useContext, useState } from "react";
import { Button, Tag } from "bloomer";
import Dropdown from "../../../components/Dropdown";
import SidePanelFloors from "../SidePanelFloors";
import OfficesEdit from "../OfficesEdit";
import SidePanelDropdownItem from "../SidePanelDropdownItem";
import CRUDContext from "../../../components/CRUDContext";

function SidePanel({ officeId, floorId }) {
  const [isOfficesEditOpened, setIsOfficesEditOpened] = useState(false);

  const { officesCRUD, floorsCRUD } = useContext(CRUDContext);
  const offices = officesCRUD.store;
  const floors = floorsCRUD.store;

  const office = offices.find(office => office.id === officeId);

  return (
    offices &&
    floors && (
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
                  firstFloor={floors.find(
                    floor => floor.officeId === office.id
                  )}
                  active={office.id === officeId}
                />
              ))}
            </Dropdown>
            <Button
              onClick={() => setIsOfficesEditOpened(true)}
              className="button is-small"
            >
              Edit
            </Button>
            {isOfficesEditOpened ? (
              <OfficesEdit
                offices={offices}
                isActive={isOfficesEditOpened}
                closeOfficesEdit={() => {
                  setIsOfficesEditOpened(false);
                }}
              />
            ) : null}
          </div>
        )}
        <SidePanelFloors
          floors={floors.filter(floor => floor.officeId === officeId)}
          floorId={floorId}
          officeId={officeId}
        />
      </div>
    )
  );
}

export default SidePanel;
