import React, { useContext } from "react";
import MessageContext from "../MessageContext";

function AlohaMessage() {
  const { message, isVisible, setIsVisible } = useContext(MessageContext);

  const onClick = () => setIsVisible(false);

  return (
    <>
      {isVisible && (
        <div className="aloha-message">
          {message}
          <button onClick={onClick}>
            <span className="icon is-small">
              <i className="material-icons md-36">close</i>
            </span>
          </button>
        </div>
      )}
    </>
  );
}
export default AlohaMessage;
