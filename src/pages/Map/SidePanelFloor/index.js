import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "bloomer";
import SidePanelFloorEdit from "../SidePanelFloorEdit";
import Confirm from "../../../components/Confirm";

const SidePanelFloor = ({ floor, active, updateFloor, deleteFloor }) => {
  const [editing, setEditing] = useState(false);
  const [isDeleteConfirmOpened, setIsDeleteConfirmOpened] = useState(false);

  const confirmDelete = () => {
    deleteFloor(floor.id);
    setIsDeleteConfirmOpened(false);
  };

  return editing ? (
    <SidePanelFloorEdit
      name={floor.name}
      onSave={name => {
        updateFloor({ ...floor, name });
        setEditing(false);
      }}
      onCancel={() => setEditing(false)}
    />
  ) : (
    <div className="SidePanelFloor">
      <Link
        className={`floor${active ? " floor--active" : ""}`}
        to={`/map/${floor.officeId}/${floor.id}`}
      >
        <div className="floor-header">{floor.name}</div>
        <div className="floor-actions">
          <Button onClick={() => setEditing(true)}>
            <i className="material-icons md-36">edit</i>
          </Button>
          <Button
            onClick={e => {
              e.preventDefault();
              setIsDeleteConfirmOpened(true);
            }}
          >
            <i className="material-icons md-36">delete</i>
          </Button>
        </div>
      </Link>
      {isDeleteConfirmOpened ? (
        <Confirm
          isActive={isDeleteConfirmOpened}
          onConfirm={confirmDelete}
          onCancel={() => setIsDeleteConfirmOpened(false)}
          title="Delete floor"
          content={`Are you sure you want to delete the floor ${
            floor.name
          } and your workstations?`}
        />
      ) : null}
    </div>
  );
};

export default SidePanelFloor;
