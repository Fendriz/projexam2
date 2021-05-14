
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { BASE_URL, headers,PATCH } from "../../constants/api";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

function UpdateHotelModal(props) {
  const history = useHistory();
  const { closeModal,ismodal } = useContext(AuthContext);

  async function onClick() {
  console.log(props)
      const fetchUrl = BASE_URL + "establishments/" + props.hotel.id;
      const updateOptions = {
        headers,
        method: PATCH,
        body: JSON.stringify(props.data),
      };
      await fetch(fetchUrl, updateOptions);
      history.push("/admin/hotels/update");
      history.go(0);
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
            <Form  className="form_update" id="form_modal-update">
              <Form.Group className="form-group-update ">
                <Form.Group className="form-group-left ">
                  <Form.Group className="modal-group">
                    <Form.Group className="modal-old">
                      <Form.Label>Name</Form.Label>
                      <Form.Control readOnly isInvalid value={props.hotel.name} />
                    </Form.Group>
                    <Form.Group className="modal-new">
                      <Form.Label>Name</Form.Label>
                      <Form.Control readOnly isValid value={props.data.name} />
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
                  <Button  className="button" onClick={onClick}>
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
