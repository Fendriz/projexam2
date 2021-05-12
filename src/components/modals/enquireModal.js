import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaEnquire} from "../validation/Schema"
import { BASE_URL, headers } from "../../constants/api";
import Moment from 'moment';

function EnquireModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const url = BASE_URL + "enquiries";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaEnquire),
  });
  async function onSubmit(data) {
    data.checkIn = Moment(data.checkIn).format("MMM DD YYYY");
    data.checkOut = Moment(data.checkOut).format("MMM DD YYYY");
    data.establishmentId = props.id
    const options = { headers, method: "POST", body: JSON.stringify(data) };
    await fetch(url, options);
    handleClose();
  }
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
                {errors.name && (
                  <p class="text-danger">{errors.name.message}</p>
                )}
              </Form.Group>

              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  {...register("email")}
                />
                {errors.email && (
                  <p class="text-danger">{errors.email.message}</p>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Group>
                  <Form.Label>Check Inn</Form.Label>
                  <Form.Control
                    type="date"
                    name="checkIn"
                    placeholder="dd/mm/yyyy"
                    {...register("checkIn")}
                  />
                  {errors.checkIn && (
                    <p class="text-danger">{errors.checkIn.message}</p>
                  )}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Check Out</Form.Label>
                  <Form.Control
                    type="date"
                    name="checkOut"
                    placeholder="dd/mm/yyyy"
                    {...register("checkOut")}
                  />
                  {errors.checkOut && (
                    <p class="text-danger">{errors.checkOut.message}</p>
                  )}
                </Form.Group>
                <Button type="submit" variant="primary" >Submit</Button>
              </Form.Group>
              
            </Form>
          </div>
        </Modal.Body>
       
      </Modal>
    </>
  );
}
export default EnquireModal;
