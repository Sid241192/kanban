// import React from 'react'
import { faAngleDown, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";

import { AppContext } from "../../App";
import "./layout.css";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { state, dispatch } = useContext(AppContext);
  const [groupingOption, setGroupingOption] = useState("status");
  const [sortingOption, setSortingOption] = useState("priority");
  const handleSelectChange = (event) => {
    const { name, value } = event.target;

    if (name === "groupingOption") {
      setGroupingOption(value);
      dispatch({ type: "SET_GROUPING_SELECTED_DROPDOWN", payload: value });
    } else if (name === "sortingOption") {
      setSortingOption(value);
      dispatch({ type: "SET_ORDERING_SELECTED_DROPDOWN", payload: value });
    }
  };

  const handleDisplay = () => setShowDropdown(!showDropdown);
  return (
    <header className="custom-header">
      <div className="header-left">
        <button className="header-btn" onClick={handleDisplay}>
          <FontAwesomeIcon icon={faSliders} className="header-btn-item" />
          <span className="header-btn-item">Display</span>
          <FontAwesomeIcon icon={faAngleDown} className="header-btn-item" />
        </button>
        {showDropdown && (
          <div className="dropdown-container">
            <div className="dropdown-elements">
              <div className="dropdown-caption">Grouping</div>
              <div className="dropdown-select-container">
                <select
                  name="groupingOption"
                  className="custom-select"
                  onChange={handleSelectChange}
                >
                  <option value="status">Status</option>
                  <option value="userId">User</option>
                  <option value="priority">Priority</option>
                </select>
                {/* <FontAwesomeIcon icon={faAngleDown} /> */}
              </div>
            </div>

            <div className="dropdown-elements">
              <div className="dropdown-caption">Ordering</div>
              <div>
                <select
                  name="sortingOption"
                  className="custom-select"
                  onChange={handleSelectChange}
                >
                  {/* <option value="priority">Sort by Priority</option> */}
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
