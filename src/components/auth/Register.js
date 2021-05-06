import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../context/AuthContext";

function Register() {
  const { register, handleSubmit } = useForm();
  const { registerUser } = useContext(AuthContext);
  const { users } = useContext(AuthContext);
  const history = useHistory();

  function onSubmit(data) {
    registerUser(data);
   
    history.push("/login");
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h1>Register</h1>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="username"
          placeholder="Enter your username"
          {...register("username")}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          placeholder="Enter your password"
          {...register("password")}
        />
      </Form.Group>

      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default Register;
