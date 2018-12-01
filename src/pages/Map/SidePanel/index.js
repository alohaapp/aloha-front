import React, { Fragment, useContext, useState } from "react";
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
      <div className="side-panel">
        {offices.length !== 0 && (
          <Fragment>
            <div className="office-selector">
              <Dropdown
                trigger={
                  <div className="Dropdown-button">
                    <div className="office-info__selector">
                      <Tag>{offices.length}</Tag>
                      <span className="office-info__legend">
                        {offices.length === 1 ? "OFFICE" : "OFFICES"}
                      </span>
                      <i className="material-icons md-36">
                        keyboard_arrow_down
                      </i>
                    </div>
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
            <div className="office-info">{office.name}</div>
          </Fragment>
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
