import React, { Fragment, useContext } from "react";
import SidePanelFloor from "../SidePanelFloor";
import SidePanelFloorAdder from "../SidePanelFloorAdder";
import CRUDContext from "../../../components/CRUDContext";

const SidePanelFloors = ({ floors, officeId, floorId }) => {
  const { floorsCRUD } = useContext(CRUDContext);
  const addFloor = name => {
    floorsCRUD.create({ name, officeId });
  };
  const updateFloor = floor => {
    floorsCRUD.update(floor);
  };
  const deleteFloor = floorId => {
    floorsCRUD.del(floorId);
  };

  return (
    <Fragment>
      <div className="floors">
        {floors.map(floor => (
          <SidePanelFloor
            key={floor.id}
            floor={floor}
            active={floor.id === floorId}
            updateFloor={updateFloor}
            deleteFloor={deleteFloor}
          />
        ))}
      </div>
      <SidePanelFloorAdder addFloor={addFloor} />
    </Fragment>
  );
};

export default SidePanelFloors;
