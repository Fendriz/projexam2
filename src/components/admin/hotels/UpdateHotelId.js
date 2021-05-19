import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BASE_URL, headers } from "../../../constants/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaHotel } from "../../validation/Schema";
import PropTypes from "prop-types";

function UpdateHotelId({id}) {
    const defaultState = {
        name: "",
        email: "",
    };

    const {
        register,
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


    return (
        <>
            <Form.Group>
                <Form.Label>Hotel Name</Form.Label>
                <Form.Control
                    label="hotel"
                    name="hotel"
                    placeholder={hotel.name}
                    defaultValue={hotel.name}
                    {...register("hotel")}

                />
                {errors.name && <p className="text-danger">{errors.name.message}</p>}
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    name="email"
                    placeholder={hotel.email}
                    {...register("email")}
                />
                {errors.email && <p className="text-danger">{errors.email.message}</p>}
            </Form.Group>
            <Form.Group>
                <Form.Label>Price per Night</Form.Label>
                <Form.Control
                    name="price"
                    placeholder={hotel.price}
                    {...register("price")}
                />
                {errors.price && <p className="text-danger">{errors.price.message}</p>}
            </Form.Group>
            <Form.Group>
                <Form.Label>Max Guests</Form.Label>
                <Form.Control
                    name="guests"
                    placeholder={hotel.maxGuests}
                    {...register("guests")}
                />
                {errors.guests && <p className="text-danger">{errors.guests.message}</p>}
            </Form.Group>
            <Form.Group>
                <Form.Label>Image Url</Form.Label>
                <Form.Control
                    name="image"
                    placeholder={hotel.image}
                    {...register("image")}
                />
                {errors.image && <p className="text-danger">{errors.image.message}</p>}
            </Form.Group>
            <Form.Group>
                <Form.Label>Latitude</Form.Label>
                <Form.Control
                    name="lat"
                    placeholder={hotel.lat}
                    {...register("lat")}
                />
                {errors.lat && <p className="text-danger">{errors.lat.message}</p>}
            </Form.Group>
            <Form.Group>
                <Form.Label>Longitude</Form.Label>
                <Form.Control
                    name="lnt"
                    placeholder={hotel.lng}
                    {...register("lnt")}
                />
                {errors.lnt && <p className="text-danger">{errors.lnt.message}</p>}
            </Form.Group>
            <Form.Group>
                <Form.Label>ID</Form.Label>
                <Form.Control name="id" placeholder={hotel.id} {...register("id")} />
                {errors.id && <p className="text-danger">{errors.id.message}</p>}
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
                {errors.mess && <p className="text-danger">{errors.mess.message}</p>}
            </Form.Group>

            <Button type="submit" className="button">
                Submit
            </Button>
        </>
    );
}
UpdateHotelId.propTypes = {
    hotelId: PropTypes.string.isRequired
 };

export default UpdateHotelId;
