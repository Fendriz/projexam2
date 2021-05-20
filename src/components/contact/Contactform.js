import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { SchemaContact } from "../validation/Schema";
import { BASE_URL, headers } from "../../constants/api";
import { useHistory } from "react-router-dom";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaContact),
  });
  const history = useHistory();
  const url = BASE_URL + "contacts";
  async function onSubmit(data) {
    const name = data.firstName + " " + data.lastName;
    const newData = {
      name: name,
      email: data.email,
      message: data.mess
    }
    const options = { headers, method: "POST", body: JSON.stringify(newData) };
    await fetch(url, options);
    history.go(0)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          label="firstName"
          name="firstName"
          placeholder="firstName"
          {...register("firstName")}
        />
        {errors.firstName && (
          <p className="text-danger">{errors.firstName.message}</p>
        )}
      </Form.Group>
      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          name="lastName"
          placeholder="lastName"
          {...register("lastName")}
        />
        {errors.lastName && (
          <p className="text-danger">{errors.lastName.message}</p>
        )}
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control name="email" placeholder="email" {...register("email")} />
        {errors.email && <p className="text-danger">{errors.email.message}</p>}
      </Form.Group>
      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="mess"
          placeholder="message"
          {...register("mess")}
        />
        {errors.mess && <p className="text-danger">{errors.mess.message}</p>}
      </Form.Group>

      <Button type="submit" className="button">
        Submit
      </Button>
    </Form>
  );
}
export default ContactForm;
