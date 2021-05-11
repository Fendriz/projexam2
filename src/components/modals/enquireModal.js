import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

function EnquireModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [FaultyPwd, setFaultyPwd] = useState(false);
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {}
  return (
    <>
      <div className="Button" onClick={handleShow}>
        Enquire
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="enquire-modal"
      >
        <Modal.Header closeButton className="enquire-modal-header">
          <Modal.Title>Enquire Hotel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="formContainer">
            <p>We will get back to you as soon as possible </p>
            <Form onSubmit={handleSubmit(onSubmit)} className="enquire-form">
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  placeholder="Enter your name"
                  {...register("name")}
                />
                {FaultyPwd && (
                  <p class="text-danger">UserName or Password is wrong</p>
                )}
              </Form.Group>

              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={() => setFaultyPwd(false)}
                />
                {FaultyPwd && (
                  <p class="text-danger">UserName or Password is wrong</p>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Group>
                  <Form.Label>Check Inn</Form.Label>
                  <Form.Control
                    type="date"
                    name="checkinn"
                    placeholder="dd/mm/yyyy"
                    onChange={() => setFaultyPwd(false)}
                  />
                  {FaultyPwd && (
                    <p class="text-danger">UserName or Password is wrong</p>
                  )}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Check Out</Form.Label>
                  <Form.Control
                    type="date"
                    name="checkout"
                    placeholder="dd/mm/yyyy"
                    onChange={() => setFaultyPwd(false)}
                  />
                  {FaultyPwd && (
                    <p class="text-danger">UserName or Password is wrong</p>
                  )}
                </Form.Group>
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default EnquireModal;
