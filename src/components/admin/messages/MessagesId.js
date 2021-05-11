import React from "react";
import AdminMenu from "../adminform/AdminHotelMenu";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

function MessagesID({ id, firstName, lastName, email, message }) {
  function changeSelect() {
    console.log("changeselct");
  }
  return (
    <>
      <Form.Group key={id}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control value={firstName} readOnly name="firstName" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control value={lastName} readOnly name="lastName" />
        </Form.Group>
        <Form.Group>
          <Form.Label>email</Form.Label>
          <Form.Control value={email} readOnly name="email" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            readOnly
            rows={6}
            name="message"
            value={message}
          />
        </Form.Group>

        <Button type="submit" class="button">
          Replay
        </Button>
      </Form.Group>
    </>
  );
}
MessagesID.propTypes = {
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
export default MessagesID;
