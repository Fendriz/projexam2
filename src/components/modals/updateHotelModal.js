
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
  async function onSubmit() {
  console.log(props)
      const fetchUrl = BASE_URL + "establishments/" + props.hotel.id;
      const updateOptions = {
        headers,
        method: PATCH,
        body: JSON.stringify(props.data),
      };
      await fetch(fetchUrl, updateOptions);
    }
  return (
      <Modal
        show={ismodal}
        onHide={closeModal}
        backdrop="static"
        keyboard={false}
        id="update-modal"
      >
        <Modal.Header closeButton className="enquire-modal-header">
          <Modal.Title>Check changes before update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="formContainer">
            <Form onSubmit={handleSubmit(onSubmit)} className="form_update" id="form_modal-update">
              <Form.Group className="form-group-update ">
                <Form.Group className="form-group-left ">
                  <Form.Group className="modal-group">
                    <Form.Group className="modal-old">
                      <Form.Label>Name</Form.Label>
                      <Form.Control name="name" {...register("name")} readOnly isInvalid value={props.hotel.name} />
                    </Form.Group>
                    <Form.Group className="modal-new">
                      <Form.Label>Name</Form.Label>
                      <Form.Control name="hotel" {...register("name")} readOnly isValid value={props.data.name} />
                    </Form.Group>
                  </Form.Group>
                  <Form.Group className="modal-group">
                    <Form.Group className="modal-old">
                      <Form.Label>address</Form.Label>
                      <Form.Control readOnly isInvalid value={props.hotel.address} />
                    </Form.Group>
                    <Form.Group className="modal-new">
                      <Form.Label>address</Form.Label>
                      <Form.Control readOnly isValid value={props.data.address} />
                    </Form.Group>
                  </Form.Group>
                  <Form.Group className="modal-group">
                    <Form.Group className="modal-old">
                      <Form.Label>email</Form.Label>
                      <Form.Control readOnly isInvalid value={props.hotel.email} />
                    </Form.Group>
                    <Form.Group className="modal-new">
                      <Form.Label>email</Form.Label>
                      <Form.Control readOnly isValid value={props.data.email} />
                    </Form.Group>
                  </Form.Group>
                  <Form.Group className="modal-group">
                    <Form.Group className="modal-old">
                      <Form.Label>price</Form.Label>
                      <Form.Control readOnly isInvalid value={props.hotel.price} />
                    </Form.Group>
                    <Form.Group className="modal-new">
                      <Form.Label>price</Form.Label>
                      <Form.Control readOnly isValid value={props.data.price} />
                    </Form.Group>
                  </Form.Group>
                  <Form.Group className="modal-group">
                    <Form.Group className="modal-old">
                      <Form.Label>maxGuests</Form.Label>
                      <Form.Control readOnly isInvalid value={props.hotel.maxGuests} />
                    </Form.Group>
                    <Form.Group className="modal-new">
                      <Form.Label>maxGuests</Form.Label>
                      <Form.Control readOnly isValid value={props.data.maxGuests} />
                    </Form.Group>
                  </Form.Group>
                  <Form.Group className="modal-group">
                    <Form.Group className="modal-old">
                      <Form.Label>lat</Form.Label>
                      <Form.Control readOnly isInvalid value={props.hotel.lat} />
                    </Form.Group>
                    <Form.Group className="modal-new">
                      <Form.Label>lat</Form.Label>
                      <Form.Control readOnly isValid value={props.data.lat} />
                    </Form.Group>
                  </Form.Group>
                  <Form.Group className="modal-group">
                    <Form.Group className="modal-old">
                      <Form.Label>lng</Form.Label>
                      <Form.Control readOnly isInvalid value={props.hotel.lng} />
                    </Form.Group>
                    <Form.Group className="modal-new">
                      <Form.Label>lng</Form.Label>
                      <Form.Control readOnly isValid value={props.data.lng} />
                    </Form.Group>
                  </Form.Group>
                </Form.Group>
                <Form.Group className="form-group-right form-margintop">
                  <Form.Group> 
                    <Form.Group className="modal-old">
                      <Form.Label>image</Form.Label>
                      <Form.Control readOnly isInvalid value={props.hotel.image} />
                    </Form.Group>
                    <Form.Group className="modal-new">
                      <Form.Label>image</Form.Label>
                      <Form.Control readOnly isValid value={props.data.image} />
                    </Form.Group>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group >
                      <Form.Control
                        as="textarea"
                        defaultValue={props.hotel.description}
                        readOnly
                        className="modal-old"
                        isInvalid 
                        textarea="5"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        as="textarea"
                        defaultValue={props.data.description}
                        readOnly
                        className="modal-old"
                        isValid  
                      />
                    </Form.Group>
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
