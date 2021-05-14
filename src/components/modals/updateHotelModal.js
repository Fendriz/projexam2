
import React, { useState, useEffect,useContext } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaEnquire} from "../validation/Schema"
import { BASE_URL, headers,PATCH } from "../../constants/api";
import Moment from 'moment';
import { AuthContext } from "../../context/AuthContext";

function UpdateHotelModal(props) {
  //const [show, setShow] = useState(true);
  //const handleClose = () => setShow(false);
  const url = BASE_URL + "enquiries";
  const { closeModal,ismodal } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaEnquire),
  });
  async function onSubmit(data) {
      const fetchUrl = BASE_URL + "establishments/" + props.id;
      const updateOptions = {
        headers,
        method: PATCH,
        body: JSON.stringify(props.data),
      };
      await fetch(fetchUrl, updateOptions);
    }
  console.log(props.data)
  console.log(props.hotel)
  return (
      <Modal
        show={ismodal}
        onHide={closeModal}
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
            <Form onSubmit={handleSubmit(onSubmit)} className="form_update" id="form_modal-update">
              <Form.Group className="form-group-flex ">
                <Form.Group className="form-group-left ">
                  <Form.Group className="modal-old">
                    <Form.Label>Old</Form.Label>
                    <Form.Control readOnly value={props.hotel.name} />
                  </Form.Group>
                  <Form.Group className="modal-new">
                    <Form.Label>New</Form.Label>
                    <Form.Control readOnly value={props.data.name} />
                  </Form.Group>
                  <Form.Group className="modal-old">
                    <Form.Label>Old</Form.Label>
                    <Form.Control readOnly value={props.hotel.address} />
                  </Form.Group>
                  <Form.Group className="modal-new">
                    <Form.Label>New</Form.Label>
                    <Form.Control readOnly value={props.data.address} />
                  </Form.Group>
                  <Form.Group className="modal-old">
                    <Form.Label>Old</Form.Label>
                    <Form.Control readOnly value={props.hotel.email} />
                  </Form.Group>
                  <Form.Group className="modal-new">
                    <Form.Label>New</Form.Label>
                    <Form.Control readOnly value={props.data.email} />
                  </Form.Group>
                  <Form.Group className="modal-old">
                    <Form.Label>Old</Form.Label>
                    <Form.Control readOnly value={props.hotel.price} />
                  </Form.Group>
                  <Form.Group className="modal-new">
                    <Form.Label>New</Form.Label>
                    <Form.Control readOnly value={props.data.price} />
                  </Form.Group>
                  <Form.Group className="modal-old">
                    <Form.Label>Old</Form.Label>
                    <Form.Control readOnly value={props.hotel.maxGuests} />
                  </Form.Group>
                  <Form.Group className="modal-new">
                    <Form.Label>New</Form.Label>
                    <Form.Control readOnly value={props.data.maxGuests} />
                  </Form.Group>
                  <Form.Group className="modal-old">
                    <Form.Label>Old</Form.Label>
                    <Form.Control readOnly value={props.hotel.lat} />
                  </Form.Group>
                  <Form.Group className="modal-new">
                    <Form.Label>New</Form.Label>
                    <Form.Control readOnly value={props.data.lat} />
                  </Form.Group>
                  <Form.Group className="modal-old">
                    <Form.Label>Old</Form.Label>
                    <Form.Control readOnly value={props.hotel.lng} />
                  </Form.Group>
                  <Form.Group className="modal-new">
                    <Form.Label>New</Form.Label>
                    <Form.Control readOnly value={props.data.lng} />
                  </Form.Group>
                </Form.Group>
                <Form.Group className="form-group-right form-margintop">
                  <Form.Group>
                    <Form.Label>New</Form.Label>
                    <Form.Control readOnly value={props.data.image} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Old</Form.Label>
                    <Form.Control readOnly value={props.hotel.price} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Old</Form.Label>
                    <Form.Control
                      as="textarea"
                      defaultValue={props.data.description}
                      readOnly
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>New</Form.Label>
                    <Form.Control
                      as="textarea"
                      defaultValue={props.hotel.description}
                      readOnly
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Old</Form.Label>
                    {props.hotel.selfCatering?<p>YES selfcatering</p>:<p>NO selfcatering</p>}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>New</Form.Label>
                    {props.hotel.selfCatering?<p>YES selfcatering</p>:<p>NO selfcatering</p>}
                  </Form.Group>
                  <Button type="submit" class="button">
                    Submit
                  </Button>
                </Form.Group>
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
       
      </Modal>
  );
}
export default UpdateHotelModal;
