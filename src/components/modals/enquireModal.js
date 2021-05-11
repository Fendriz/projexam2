import React, { useState } from "react";
import { Link} from "react-router-dom";
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


    function onSubmit(data) {
        
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
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="formContainer">
                        <Form onSubmit={handleSubmit(onSubmit)} className="login_form">
                            <h2>Login</h2>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    name="username"
                                    placeholder="Enter your username"
                                    {...register("username")}
                                    onChange={() => setFaultyPwd(false)}
                                />
                                {FaultyPwd && (
                                    <p class="text-danger">UserName or Password is wrong</p>
                                )}
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    {...register("password")}
                                    onChange={() => setFaultyPwd(false)}
                                />
                                {FaultyPwd && (
                                    <p class="text-danger">UserName or Password is wrong</p>
                                )}
                            </Form.Group>

                            <Button type="submit">Submit</Button>
                            <Form.Group>
                                <Link to="/register">
                                    <span>Dont have an account?</span>Register
                                        </Link>
                            </Form.Group>
                        </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                        </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>


        </>
    );
}
export default EnquireModal;