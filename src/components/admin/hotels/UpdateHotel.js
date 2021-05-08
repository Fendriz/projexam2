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
import AdminHotelMenu from "../adminform/AdminHotelMenu";
import AdminMenu from "../adminform/AdminMenu";
import { NavLink } from "react-router-dom";
import { SchemaHotel } from "../../validation/Schema";

function UpdateHotel() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaHotel),
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
      <Form onSubmit={handleSubmit(onSubmit)} className="form_update">
        <AdminHotelMenu active={2}></AdminHotelMenu>
        <Form.Group>
          <Form.Label>Hotel</Form.Label>
          <Form.Control
            label="hotel"
            name="hotel"
            placeholder="hotel"
            {...register("hotel")}
          />
          {errors.hotel && <p class="text-danger">{errors.hotel.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            placeholder="email"
            {...register("email")}
          />
          {errors.email && <p class="text-danger">{errors.email.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            placeholder="Price per night"
            {...register("price")}
          />
          {errors.price && <p class="text-danger">{errors.price.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Max Guest</Form.Label>
          <Form.Control
            name="guests"
            placeholder="Max Guests"
            {...register("guests")}
          />
          {errors.guests && <p class="text-danger">{errors.guests.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Image Url</Form.Label>
          <Form.Control
            name="image"
            placeholder="Image Url"
            {...register("image")}
          />
          {errors.image && <p class="text-danger">{errors.image.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Coord Lat</Form.Label>
          <Form.Control
            name="lat"
            placeholder="Coordinates Latitude"
            {...register("lat")}
          />
          {errors.lat && <p class="text-danger">{errors.lat.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Coord Lnt</Form.Label>
          <Form.Control
            name="lnt"
            placeholder="Coordinates Longitude"
            {...register("lnt")}
          />
          {errors.lnt && <p class="text-danger">{errors.lnt.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>ID</Form.Label>
          <Form.Control name="id" placeholder="Hotel ID" {...register("id")} />
          {errors.id && <p class="text-danger">{errors.id.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Max Guest</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            name="mess"
            placeholder="message"
            {...register("mess")}
          />
          {errors.mess && <p class="text-danger">{errors.mess.message}</p>}
        </Form.Group>

        <Button type="submit" class="button">
          Submit
        </Button>
        <ul>
          {hotels.map((hotel) => {
            return (
              <li key={hotel.id}>
                <NavLink to={`/admin/hotels/edit/${hotel.id}`}>
                  {hotel.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </Form>
    </div>
  );
}

export default UpdateHotel;
