import React from "react";
import AdminMenu from "../adminform/AdminHotelMenu";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

function EnquiriesId({ id, name, email, checkIn, checkOut }) {

    console.log(checkIn)
    function changeSelect() {
        console.log("changeselct");
    }
    return (
        <>
            <Form.Group key={id}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} readOnly name="name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={email} readOnly name="email" />
                </Form.Group>
                <Form.Group>
                    <Form.Group>
                        <Form.Label>Check Inn</Form.Label>
                        <Form.Control
                            type="date"
                            name="checkIn"
                            value={checkIn}
                            readOnly
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Check Out</Form.Label>
                        <Form.Control
                            type="date"
                            name="checkOut"
                            value={checkOut}
                            readOnly
                        />
                    </Form.Group>
                </Form.Group>
                <Button type="submit" class="button">
                    Replay
                </Button>
            </Form.Group>
        </>
    );
}
EnquiriesId.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    checkIn: PropTypes.string.isRequired,
    checkOut: PropTypes.string.isRequired,
};
export default EnquiriesId;