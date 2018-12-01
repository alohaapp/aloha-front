import "./FilterToolbar.scss";
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../../constants";
import FilterContext from "../../../components/FilterContext";
import Autocomplete from "../../../components/Autocomplete";
import FallbackImage from "../../../assets/img/fallback.jpg";

const FilterToolbar = ({ isMap }) => {
  const { workersSearch, search, username } = useContext(FilterContext);
  const [searchText, setSearchText] = useState(search);
  const [usernameText, setUsernameText] = useState(username);
  useEffect(
    () => {
      setSearchText(search);
      setUsernameText(username);
    },
    [search, username]
  );

  const queryString = `${search ? `?search=${search}` : ""}${
    username ? `${search ? "&" : "?"}username=${username}` : ""
  }`;

  return (
    <div className="filter-toolbar">
      <div className="filter-text">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={event => {
            setSearchText(event.target.value);
          }}
        />
        <Link to={`?search=${searchText}`}>
          <i className="material-icons">search</i>
        </Link>
      </div>
      <div className="filter-username">
        <Autocomplete
          value={usernameText}
          onChange={event => {
            setUsernameText(event.target.value);
          }}
          onLeave={() => {
            setUsernameText(username);
          }}
        >
          {(workersSearch &&
            workersSearch
              .filter(worker =>
                worker.userName
                  .toLowerCase()
                  .includes(usernameText.toLowerCase())
              )
              .map(worker => (
                <div key={worker.id} className="filter-username-dropdown-item">
                  <Link to={{ search: `username=${worker.userName}` }}>
                    <img
                      alt="user"
                      src={
                        worker.imageId
                          ? `${API_URL}/files/${worker.imageId}`
                          : FallbackImage
                      }
                    />
                    <span>{worker.userName}</span>
                  </Link>
                </div>
              ))) ||
            []}
        </Autocomplete>
      </div>
      <div className="filter-switch">
        <Link
          className={`map-link${isMap ? " active" : ""}`}
          to={`/map${queryString}`}
        />
        <Link
          className={`workers-link${isMap ? "" : " active"}`}
          to={`/workers${queryString}`}
        />
      </div>
    </div>
  );
};

export default FilterToolbar;
