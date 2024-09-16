import React from "react";
import "../../App.css";
import "./SearchInput.css";

const SearchInput = (props) => {
  return (
    <>
      <div className="search-container">
        <input
          value={props.searchValue}
          onChange={(e) => props.handleChange(e)}
          type="text"
          className="search-input"
          placeholder="Search something..."
        ></input>
      </div>
    </>
  );
};

export default SearchInput;
