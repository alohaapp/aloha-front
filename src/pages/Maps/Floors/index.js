import React from "react";
import useAPI from "../../../hooks/useAPI";

function Floors(props) {
  const floors = useAPI({ url: "/floors" });
  return floors ? (
    <ul>
      {floors.map(floor => (
        <li key={floor.name}>{floor.name}</li>
      ))}
    </ul>
  ) : (
    <h2>Loading...</h2>
  );
}

export default Floors;
