/*
* This makes a react contexts that carries the cruds.
* If part of the react tree is wrapped on it, it will make
* the cruds accesible anywhere via React.useContext(CRUDContext)
* For example...
* const { useOffices } = useContext(CRUDContext);
* const { store, loading, fetch, ...etc } = useOffices();
* ...will provide access to the offices crud hook.
*/
import React, { createContext } from "react";
import createCRUDHook from "../../hooks/crud";

const CRUDContext = createContext();

const useCRUDs = () => ({
  officesCRUD: createCRUDHook("/Offices")(),
  floorsCRUD: createCRUDHook("/Floors")(),
  workersCRUD: createCRUDHook("/Workers")()
});

export const CRUDProvider = ({ children }) => (
  <CRUDContext.Provider value={useCRUDs()}>{children}</CRUDContext.Provider>
);

export default CRUDContext;
