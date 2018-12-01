import React, { createContext, useState } from "react";

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <MessageContext.Provider
      value={{ isVisible, setIsVisible, message, setMessage }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export default MessageContext;
