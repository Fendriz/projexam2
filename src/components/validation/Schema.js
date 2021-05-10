import React from "react";
import * as yup from "yup";

const SchemaHotel = yup.object().shape({
 
  name: yup
    .string()
    .required("No name is provided")
    .min(2, "Name is to short - should be minimun 2 characters"),
  address: yup
    .string()
    .required("No Address is provided")
    .min(2, "Address is to short - should be minimun 2 characters"),
  email: yup
    .string()
    .required("No Email provided")
    .email("Enter a valid E-mail"),
  price: yup.number().required("No Price provided"),
  maxGuests: yup.number("Enter a valid number").required("No Guests provided"),
  image: yup.string().required("No url provided").url("Enter a valid url"),
  lat: yup.number("Enter a valid number").required("No Latitude provided"),
  lng: yup.number("Enter a valid number").required("No Longitude provided"),
  description: yup
    .string("Enter a valid string")
    .required("No message provided")
    .min(10, "Name is to short - should be minimun 10 characters"),

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
