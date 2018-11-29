import "./MapPanelWorkstation.scss";

import React, { useState } from "react";
import { Button } from "bloomer";
import PopupSelectUser from "../PopupSelectUser";

function MapPanelWorkstation({ workstation }) {
  const [isPopupOpened, setIsPopupOpened] = useState(false);

  const positionStyle = {
    left: `${workstation.x}%`,
    top: `${workstation.y}%`
  };

  const closePopup = () => {
    setIsPopupOpened(false);
  };

  const togglePopup = () => {
    setIsPopupOpened(!isPopupOpened);
  };

  return (
    <div>
      <Button
        onClick={() => togglePopup()}
        className="MapPanelWorkstation"
        style={positionStyle}
      >
        <i className="material-icons md-18">person_add</i>
      </Button>

      {isPopupOpened ? (
        <PopupSelectUser close={closePopup} workstation={workstation} />
      ) : null}
    </div>
  );
}

export default MapPanelWorkstation;
