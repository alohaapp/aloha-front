import "./FilterToolbar.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const FilterToolbar = ({ isMap, filters = {} }) => {
  const [searchText, setSearchText] = useState(filters.search);
  console.log(searchText);
  return (
    <div className="filter-toolbar">
      <div className="filter-text">
        <input
          type="text"
          value={searchText}
          onChange={event => {
            setSearchText(event.target.value);
          }}
        />
        <Link to={`?${searchText}`}>
          <i className="material-icons">search</i>
        </Link>
      </div>
      <div className="filter-switch">
        <Link className={`map-link${isMap ? " active" : ""}`} to={`/map`} />
        <Link
          className={`workers-link${isMap ? "" : " active"}`}
          to={`/workers`}
        />
      </div>
    </div>
  );
};

export default FilterToolbar;
