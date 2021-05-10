import React from "react";
import { useHistory } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import Button from "react-bootstrap/Button";
import { BASE_URL, headers, DELETE } from "../../../constants/api";
import PropTypes from "prop-types";

import "react-confirm-alert/src/react-confirm-alert.css";

function DeleteHotel({id, name}) {
    const history = useHistory();
    const title = `Confirm deleting ${name}`
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
        // const url = BASE_URL + "establishments/" + id;
        // const options = { headers, method: DELETE };
        // await fetch(url, options);
        // history.push("/admin/hotels/update");
        // history.go(0)
        console.log(id)
    }

    return (
        <i class="fas fa-trash-alt" onClick={checkDelete}></i>
    );
}
DeleteHotel.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default DeleteHotel;
