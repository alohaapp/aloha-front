/*
* This makes a react contexts that carries the filter status.
*/
import React, { createContext, useContext } from "react";
import QueryString from "query-string";
import CRUDContext from "../CRUDContext";

const FilterContext = createContext();

function searchFunction(searchLow) {
  return worker =>
    (worker.email && worker.email.toLowerCase().includes(searchLow)) ||
    (worker.name && worker.name.toLowerCase().includes(searchLow)) ||
    (worker.surname && worker.surname.toLowerCase().includes(searchLow)) ||
    (worker.username && worker.username.toLowerCase().includes(searchLow)) ||
    (worker.notes && worker.notes.toLowerCase().includes(searchLow));
}

export const FilterProvider = ({ children, queryString }) => {
  const { workersCRUD } = useContext(CRUDContext);
  const { search, username } = QueryString.parse(queryString);
  let workers = workersCRUD.store;
  let workersSearch = workersCRUD.store;

  if (workers && username) {
    workers = [
      workers.find(
        worker => worker.userName.toLowerCase() === username.toLowerCase()
      )
    ];
  } else if (workers && search) {
    const searchLow = search.toLowerCase();
    workers = workers.filter(searchFunction(searchLow));
  }

  if (workers && search) {
    const searchLow = search.toLowerCase();
    workersSearch = workersSearch.filter(searchFunction(searchLow));
  }
  return (
    <FilterContext.Provider
      value={{
        workers,
        workersSearch,
        search: search || "",
        username: username || ""
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
