import React from "react";
import { useHistory } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { BASE_URL, headers, DELETE } from "../../../constants/api";
import PropTypes from "prop-types";

import "react-confirm-alert/src/react-confirm-alert.css";

function DeleteFromApi({ id, name, button, item }) {
  const history = useHistory();
  const title = `Confirm deleting ${name}`;
  const abutton = `fas ${button}` 
  function checkDelete() {
    confirmAlert({
      title: title,
      buttons: [
        {
          label: "yes",
          onClick: () => deleteHotel(),
        },
        {
          label: "no",
        },
      ],
    });
  }

  async function deleteHotel() {
    const url = BASE_URL+item+id;
    const options = { headers, method: DELETE };
    await fetch(url, options);
    history.go(0);
  }

  return <i className={abutton} onClick={checkDelete}></i>;
}
DeleteFromApi.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
};

export default DeleteFromApi;
