import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BASE_URL, headers, PATCH } from "../../../constants/api";
import DeleteHotel from "./DeleteHotel";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AdminHotel from "../adminform/AdminHotel"
import AdminMenu from "../adminform/AdminMenu"
import { NavLink } from "react-router-dom";

const schema = yup.object().shape({
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
function UpdateHotel() {

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
    });

    const [hotels, setHotels] = useState([]);
    const [error, setError] = useState(null);

    const url = BASE_URL + "establishments";
   

    const options = { headers };

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                // handle error
                if (json.error) {
                    setHotels([]);
                    setError(json.message);
                } else {
                    setHotels(json);
                }
            })
            .catch((error) => console.log(error));
    }, []);

    
    async function onSubmit(data) {
        console.log("data", data);

    
    }

    return (
      <div className="container_hotel">
            <AdminMenu active={1}></AdminMenu>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <AdminHotel active={2}></AdminHotel>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    label="firstName"
                    name='firstName'
                    placeholder='firstName'
                    {...register('firstName')}
                />
                {errors.firstName && (
                    <p class='text-danger'>{errors.firstName.message}</p>
                )}
            </Form.Group>
            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    name='lastName'
                    placeholder='lastName'
                    {...register('lastName')}
                />
                {errors.lastName && (
                    <p class='text-danger'>{errors.lastName.message}</p>
                )}
            </Form.Group>
            <Form.Group>
            <Form.Label>Email</Form.Label>
                <Form.Control
                    name='email'
                    placeholder='email'
                    {...register('email')}
                />
                {errors.email && (
                    <p class='text-danger'>{errors.email.message}</p>
                )}
            </Form.Group>
            <Form.Group>
            <Form.Label>Message</Form.Label>
                <Form.Control
                    as='textarea'
                    rows={6}
                    name='mess'
                    placeholder='message'
                    {...register('mess')}
                />
                {errors.mess && (
                    <p class='text-danger'>{errors.mess.message}</p>
                )}
            </Form.Group>

            <Button type='submit' class="button">Submit</Button>
            <ul>
                {hotels.map((hotel) => {
                    return (
                        <li key={hotel.id}>
                            <NavLink to={`/admin/hotels/edit/${hotel.id}`}>{hotel.name}</NavLink>
                        </li>
                    );
                })}
            </ul>
        </Form>
        </div>
    );
}

export default UpdateHotel;
