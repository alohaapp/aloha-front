import React, { useState, useContext } from "react";
import Modal from "../../../components/Modal";
import OfficesEditItem from "../OfficesEditItem";
import CRUDContext from "../../../components/CRUDContext";

function OfficesEdit({ offices, isActive, closeOfficesEdit }) {
  const [officesEdited, setOfficesEdited] = useState([...offices]);
  const [officesDeleted, setOfficesDeleted] = useState([]);
  const { officesCRUD } = useContext(CRUDContext);

  const updateOffice = (index, name = "") => {
    const updated = [...officesEdited];
    updated[index] = { ...updated[index], name, updated: true };
    setOfficesEdited(updated);
  };

  const deleteOffice = index => {
    const updated = [...officesEdited];
    if (updated[index].id) {
      setOfficesDeleted([...officesDeleted, updated[index].id]);
    }
    updated.splice(index, 1);
    setOfficesEdited(updated);
  };

  const onConfirm = () => {
    officesDeleted.forEach(officeId => {
      officesCRUD.del(officeId);
    });
    officesEdited.forEach(office => {
      if (office.id) {
        officesCRUD.update({ id: office.id, name: office.name });
      } else if (office.name) {
        officesCRUD.create({ name: office.name });
      }
    });
    closeOfficesEdit();
  };
  const onCancel = () => {
    closeOfficesEdit();
  };

  return (
    <Modal
      className="OfficesEdit"
      isActive={isActive}
      title="Offices"
      onConfirm={onConfirm}
      onCancel={onCancel}
    >
      <ul>
        {officesEdited.map((office, index) => {
          return (
            <OfficesEditItem
              key={index}
              office={office}
              index={index}
              updateOffice={updateOffice}
              deleteOffice={deleteOffice}
            />
          );
        })}
      </ul>
      <div
        className={`office-add`}
        onClick={() => updateOffice(officesEdited.length)}
      >
        <i className="material-icons md-18">add</i>
        <span>Add another office</span>
      </div>
    </Modal>
  );
}

export default OfficesEdit;
