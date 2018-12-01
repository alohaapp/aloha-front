import React, { useContext } from "react";
import MessageContext from "../MessageContext";

function AlohaMessage() {
  const { message, isVisible, setIsVisible } = useContext(MessageContext);

  const onClick = () => setIsVisible(false);

  return (
    <div>
      {isVisible && (
        <div className="aloha-message">
          {message}
          <button onClick={onClick}>X</button>
        </div>
      )}
    </div>
  );
}
export default AlohaMessage;
