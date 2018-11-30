import React, { useState } from "react";
import { Link } from "react-router-dom";

const FilterToolbar = ({ isMap }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="filter-toolbar">
      <div className="">
        <input
          type="text"
          value={searchText}
          onChange={event => {
            setSearchText(event.target.value);
          }}
        />
        <i className="material-icons">search</i>
      </div>
      <div>
        <Link to={`/map`}>
          <input type="radio" value="option1" checked={isMap} />
        </Link>
        <Link to={`/workers`}>
          <input type="radio" value="option2" checked={!isMap} />
        </Link>
      </div>
    </div>
  );
};

export default FilterToolbar;
