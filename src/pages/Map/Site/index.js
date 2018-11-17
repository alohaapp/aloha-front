import React from "react";
import SidePanel from "../SidePanel";
import Visualization from "../Visualization";
import "./Site.scss";

const Maps = ({ offices, floors, floorId }) => {
  return (
    <div className="Maps">
      <header className="Maps-header" />
      <SidePanel offices={offices} />
      {floors && floorId && <Visualization floor={floors} />}
    </div>
  );
};

export default Maps;
