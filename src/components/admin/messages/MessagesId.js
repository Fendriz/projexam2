import React from "react";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import DeleteFromApi from "../adminform/DeleteFromApi";

function MessagesID({ id, name,email, message,order }) {
  return (
      <Form.Group className="formGroup-readonly">
        <Form.Label className="readonly-id"># {order+1} </Form.Label>
       <DeleteFromApi id={id} name={name} button="fa-window-close" item="contacts/"/>
        <Form.Group>
          <Form.Control value={name} readOnly name="name" />
        </Form.Group>
        <Form.Group>
          <Form.Control value={email} readOnly name="email" />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as="textarea"
            readOnly
            rows={6}
            name="message"
            value={message}
          />
        </Form.Group>

        <Button className="button">
          Replay
        </Button>
      </Form.Group>
  );
}
MessagesID.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
export default MessagesID;
