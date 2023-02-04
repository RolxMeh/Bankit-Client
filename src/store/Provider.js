import React, { useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
  const [newUserInfo, setNewUserInfo] = useState({});
  return (
    <Context.Provider value={{ newUserInfo, setNewUserInfo }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
