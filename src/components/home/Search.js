import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function Search({ handleSearch }) {
  return (
    <InputGroup id="search-home">
      <FormControl
        placeholder="Search by name..."
        onChange={(event) => handleSearch(event.target.value)}
      ></FormControl>
    </InputGroup>
  );
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Search;

