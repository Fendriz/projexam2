import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function Search() {
	
	return (
		<InputGroup id="search-home">
			<FormControl placeholder="Search by name..." />
		</InputGroup>
	);
}

export default Search;