import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const [FaultyPwd, setFaultyPwd] = useState(false);

  function onSubmit(data) {
    login(data)?history.push("/admin/hotels/create"):setFaultyPwd(true);
  }
  return (
    <div className="formBackground" id="login">
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
              <p className="text-danger">UserName or Password is wrong</p>
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
              <p className="text-danger">UserName or Password is wrong</p>
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
    </div>
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
