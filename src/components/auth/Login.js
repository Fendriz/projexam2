import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const { login, islogged } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  function onSubmit(data) {
    // if (login(credentials.username)) {

    // }
    console.log(login(data));
    console.log(islogged);
    // if (login(data)) {
    // history.push("/admin");
    // console.log("finally");
    // }
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
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
      <Link to="/register">Register</Link>
    </>
  );
}

export default Login;

// import React, { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import Login from "./Logout";

// function Login() {
//     const { login } = useContext(AuthContext);

//     return <button onClick={login}>Log in</button>;
// }

// export default Login;
