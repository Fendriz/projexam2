import React from "react";
import * as yup from "yup";

const SchemaHotel = yup.object().shape({
  hotel: yup
    .string()
    .required("No name is provided")
    .min(2, "Name is to short - should be minimun 2 characters"),
  email: yup
    .string()
    .required("No Email provided")
    .email("Enter a valid E-mail"),
  price: yup.number("Enter a valid number").required("No Price provided"),
  guests: yup.number("Enter a valid number").required("No Guests provided"),
  url: yup.string().required("No url provided").url("Enter a valid url"),
  lat: yup.number("Enter a valid number").required("No Latitude provided"),
  lnt: yup.number("Enter a valid number").required("No Longitude provided"),
  id: yup.number("Enter a valid number").required("No Id provided"),
});
const SchemaContact = yup.object().shape({
  firstName: yup
    .string()
    .required("No name is provided")
    .min(2, "Name is to short - should be minimun 2 characters"),
  lastName: yup
    .string()
    .required("No name is provided")
    .min(2, "Name is to short - should be minimun 2 characters"),
  email: yup
    .string()
    .required("No Email provided")
    .email("Enter a valid E-mail"),
  mess: yup
    .string()
    .required("No Message provided")
    .min(10, "Message is to short - should be minimun 10 characters"),
});
const SchemaRegister = yup.object().shape({
  username: yup
    .string()
    .required("No name is provided")
    .min(2, "Name is to short - should be minimun 2 characters"),
  password: yup
    .string()
    .required("No password is provided")
    .min(8, "Password is to short - should be minimun 8 characters"),
});
export { SchemaContact, SchemaRegister, SchemaHotel };
