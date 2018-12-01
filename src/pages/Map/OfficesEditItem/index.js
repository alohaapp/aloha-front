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
      <Button className="is-light" onClick={() => deleteOffice(index)}>
        <span className="icon is-small">
          <i className="material-icons md-36">delete</i>
        </span>
      </Button>
    </li>
  );
}

export default OfficesEditItem;
