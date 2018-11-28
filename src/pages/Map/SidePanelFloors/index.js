import React, { useContext } from "react";
import SidePanelFloor from "../SidePanelFloor";
import SidePanelFloorAdder from "../SidePanelFloorAdder";
import CRUDContext from "../../../components/CRUDContext";

const SidePanelFloors = ({ floors, officeId, floorId }) => {
  const { floorsCRUD } = useContext(CRUDContext);
  const addFloor = name => {
    floorsCRUD.create({ name, officeId });
  };
  const onDelete = floorId => {
    floorsCRUD.del(floorId);
  };

  return (
    <div className="SidePanelFloors">
      {floors.map(floor => (
        <SidePanelFloor
          key={floor.id}
          floor={floor}
          active={floor.id === floorId}
          onDelete={onDelete}
        />
      ))}
      <SidePanelFloorAdder addFloor={addFloor} />
    </div>
  );
};

export default SidePanelFloors;
