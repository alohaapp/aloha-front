import React from "react";
import { Button } from "bloomer";

function OfficesEditItem({ office, index, updateOffice, deleteOffice }) {
  return (
    <li>
      <input
        type="text"
        name="name"
        value={office.name}
        onChange={event => {
          updateOffice(index, event.target.value);
        }}
      />
      <Button onClick={() => deleteOffice(index)}>
        <i className="material-icons md-36">delete</i>
      </Button>
    </li>
  );
}

export default OfficesEditItem;
