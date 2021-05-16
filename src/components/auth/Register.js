import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../context/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaRegister } from "../validation/Schema";

function Register() {
  const { registerUser } = useContext(AuthContext);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaRegister),
  });

  function onSubmit(data) {
    registerUser(data);

    history.push("/login");
  }

  return (
    <div className="formBackground" id="register">
      <div className="formContainer">
        <Form onSubmit={handleSubmit(onSubmit)} className="register_form">
          <h2>Register</h2>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="username"
              placeholder="Enter your username"
              {...register("username")}
            />
            {errors.username && (
              <p class="text-danger">{errors.username.message}</p>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter your password"
              {...register("password")}
            />
            {errors.password && (
              <p class="text-danger">{errors.password.message}</p>
            )}
          </Form.Group>

          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  );
}

export default Register;
