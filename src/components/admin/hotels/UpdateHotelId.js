import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BASE_URL, headers, PATCH } from "../../../constants/api";
import DeleteHotel from "./DeleteHotel";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaHotel } from "../../validation/Schema";
import PropTypes from "prop-types";

function UpdateHotelId({id}) {
    const defaultState = {
        name: "",
        email: "",
    };

    const history = useHistory();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(SchemaHotel),
    });
    const [hotel, setHotel] = useState(defaultState);

    // let { id } = useParams();

    const options = { headers };
    const fetchUrl = BASE_URL + "establishments/" + id;

    useEffect(() => {
        fetch(fetchUrl, options)
            .then((response) => response.json())
            .then((json) => setHotel(json))
            .catch((error) => console.log(error));
    }, []);
    
    console.log(id);

    async function onSubmit(data) {
        console.log("data", data);

        const updateOptions = { headers, method: PATCH, body: JSON.stringify(data) };
        await fetch(fetchUrl, updateOptions);
        history.push("/admin/hotels");
    }

    return (
        <>
            {/* <Form onSubmit={handleSubmit(onSubmit)} className="form_update"> */}
                <Form.Group>
                    <Form.Label>Hotel Name</Form.Label>
                    <Form.Control
                        label="hotel"
                        name="hotel"
                        placeholder={hotel.name}
                        defaultValue={hotel.name}
                        {...register("hotel")}

                    />
                    {errors.name && <p class="text-danger">{errors.name.message}</p>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        name="email"
                        placeholder={hotel.email}
                        {...register("email")}
                    />
                    {errors.email && <p class="text-danger">{errors.email.message}</p>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price per Night</Form.Label>
                    <Form.Control
                        name="price"
                        placeholder={hotel.price}
                        {...register("price")}
                    />
                    {errors.price && <p class="text-danger">{errors.price.message}</p>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Max Guests</Form.Label>
                    <Form.Control
                        name="guests"
                        placeholder={hotel.maxGuests}
                        {...register("guests")}
                    />
                    {errors.guests && <p class="text-danger">{errors.guests.message}</p>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image Url</Form.Label>
                    <Form.Control
                        name="image"
                        placeholder={hotel.image}
                        {...register("image")}
                    />
                    {errors.image && <p class="text-danger">{errors.image.message}</p>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Latitude</Form.Label>
                    <Form.Control
                        name="lat"
                        placeholder={hotel.lat}
                        {...register("lat")}
                    />
                    {errors.lat && <p class="text-danger">{errors.lat.message}</p>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Longitude</Form.Label>
                    <Form.Control
                        name="lnt"
                        placeholder={hotel.lng}
                        {...register("lnt")}
                    />
                    {errors.lnt && <p class="text-danger">{errors.lnt.message}</p>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>ID</Form.Label>
                    <Form.Control name="id" placeholder={hotel.id} {...register("id")} />
                    {errors.id && <p class="text-danger">{errors.id.message}</p>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={6}
                        name="mess"
                        placeholder={hotel.description}
                        {...register("mess")}
                    />
                    {errors.mess && <p class="text-danger">{errors.mess.message}</p>}
                </Form.Group>

                <Button type="submit" class="button">
                    Submit
                </Button>
            {/* </Form> */}
        </>
    );
}
UpdateHotelId.propTypes = {
    hotelId: PropTypes.string.isRequired
 };

export default UpdateHotelId;
