import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { BASE_URL, headers } from "../../constants/api";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

function HotelModal(props) {
  const history = useHistory();
  const { closeModal,ismodal } = useContext(AuthContext);
  let id =""
  if ( props.hotel!=undefined ){
    id= props.hotel.id
  }
  async function onClick() {
    const fetchUrl = BASE_URL + props.apiType + id
      const updateOptions = {
        headers,
        method: props.apiMethod,
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
          <Modal.Title>Check before sending</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="formContainer">
            <Form  className="form_update" id="form_modal-update">
              <Form.Group className="form-group-update form-group-flex">
                <Form.Group className="form-group-left ">
                  <Form.Group className="modal-group">
                    <Form.Group className="modal-new">
                      <Form.Label>Name</Form.Label>
                      <Form.Control readOnly isValid value={props.data.name} />
                    </Form.Group>
                  </Form.Group>
                  <Form.Group className="modal-group">
                    <Form.Group className="modal-new">
                      <Form.Label>address</Form.Label>
                      <Form.Control readOnly isValid value={props.data.address} />
                    </Form.Group>
                  </Form.Group>
                  <Form.Group className="modal-group">
                    <Form.Group className="modal-new">
                      <Form.Label>email</Form.Label>
                      <Form.Control readOnly isValid value={props.data.email} />
                    </Form.Group>
                  </Form.Group>
                  <Form.Group className="modal-group">
                    <Form.Group className="modal-new">
                      <Form.Label>price</Form.Label>
                      <Form.Control readOnly isValid value={props.data.price} />
                    </Form.Group>
                  </Form.Group>
                  <Form.Group className="modal-group">
                    <Form.Group className="modal-new">
                      <Form.Label>maxGuests</Form.Label>
                      <Form.Control readOnly isValid value={props.data.maxGuests} />
                    </Form.Group>
                  </Form.Group>
                  <Form.Group className="modal-group">
                    <Form.Group className="modal-new">
                      <Form.Label>lat</Form.Label>
                      <Form.Control readOnly isValid value={props.data.lat} />
                    </Form.Group>
                  </Form.Group>
                </Form.Group>
                <Form.Group className="form-group-right">
                  <Form.Group className="modal-group">
                    <Form.Group className="modal-new">
                      <Form.Label>lng</Form.Label>
                      <Form.Control readOnly isValid value={props.data.lng} />
                    </Form.Group>
                  </Form.Group>
                  <Form.Group> 
                    <Form.Group className="modal-new">
                      <Form.Label>image</Form.Label>
                      <Form.Control readOnly isValid value={props.data.image} />
                    </Form.Group>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group className="modal-new">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        defaultValue={props.data.description}
                        readOnly
                        rows={6}   
                        className="modal-new"
                        isValid  
                      />
                    </Form.Group>
                  </Form.Group>
                  <Form.Group className="modal-new">
                    <Form.Label>SelfCatering</Form.Label>
                    <Form.Control readOnly isValid value={props.data.selfCatering?"yes":"NO"} />
                  </Form.Group>
                </Form.Group>
              </Form.Group>
            </Form>
            <div className="button-container">
              <Button  className="button" onClick={onClick}>
                Submit
              </Button>
            </div>
          </div>
        </Modal.Body>
       
      </Modal>
  );
}
export default HotelModal;
