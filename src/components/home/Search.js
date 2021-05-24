import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function Search({ handleSearch, placeholder}) {
  return (
    <InputGroup id="search-home">
      <FormControl
        placeholder={placeholder}
        onChange={(event) => handleSearch(event.target.value)}
      ></FormControl>
    </InputGroup>
  );
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default Search;

